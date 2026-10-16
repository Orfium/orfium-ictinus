import { readdir, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @typedef {import('@orfium/shared').Prop} PropItem
 * @typedef {import('../src/types.js').PropDefinition} PropDefinition
 */

/**
 * @param {PropItem} prop
 * @returns {PropDefinition}
 */
export function parsePropDefinition(prop) {
  /** @type {PropDefinition} */
  const propDef = {
    type: prop.type?.name || 'unknown',
  };

  if (prop.description) propDef.description = prop.description;
  if (prop.defaultValue?.value != null) {
    propDef.defaultValue = String(prop.defaultValue.value);
  }
  if (prop.required) propDef.required = true;

  return propDef;
}

/**
 * Extract a top-level `export const name = { … }` object literal and evaluate it.
 */
export function extractExportedConstObject(source, name) {
  const marker = new RegExp(`export\\s+const\\s+${name}\\s*=\\s*`);
  const match = marker.exec(source);
  if (!match) {
    const local = new RegExp(`(?:^|\\n)const\\s+${name}\\s*=\\s*`);
    const localMatch = local.exec(source);
    if (!localMatch) return null;
    return evalObjectLiteral(source, localMatch.index + localMatch[0].length);
  }
  return evalObjectLiteral(source, match.index + match[0].length);
}

function evalObjectLiteral(source, start) {
  while (start < source.length && /\s/.test(source[start])) start++;
  if (source[start] !== '{') return null;

  let depth = 0;
  let i = start;
  let inString = null;
  let escaped = false;

  for (; i < source.length; i++) {
    const ch = source[i];
    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === '\\') {
        escaped = true;
        continue;
      }
      if (ch === inString) inString = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      inString = ch;
      continue;
    }
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        i++;
        break;
      }
    }
  }

  let literal = source.slice(start, i);
  literal = literal.replace(/\s+as\s+const/g, '');

  try {
    // eslint-disable-next-line no-new-func
    return new Function(`return (${literal})`)();
  } catch {
    return null;
  }
}

/**
 * Flatten nested token objects into `a.b.c` → leaf value.
 */
export function flattenTokens(obj, prefix = '', out = {}) {
  if (obj == null || typeof obj !== 'object') return out;

  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value != null && typeof value === 'object' && !Array.isArray(value)) {
      if (
        'value' in value &&
        (typeof value.value === 'string' || typeof value.value === 'number')
      ) {
        out[path] = String(value.value);
      } else if ('value' in value && typeof value.value === 'object') {
        out[path] = serializeShadow(value.value);
      } else {
        flattenTokens(value, path, out);
      }
    } else if (typeof value === 'string' || typeof value === 'number') {
      out[path] = String(value);
    }
  }
  return out;
}

function serializeShadow(value) {
  if (value && typeof value === 'object' && 'x' in value) {
    const { x, y, blur, spread, color } = value;
    return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
  }
  return JSON.stringify(value);
}

/** Strip MDX/JSX noise for guide plain-text content. */
export function stripMdx(content) {
  let out = content;
  out = out.replace(/^import\s.+$/gm, '');
  out = out.replace(/<Meta[\s\S]*?\/>/g, '');

  out = out.replace(/<(SectionHeader|SubsectionHeader)\b([^>]*)\/>/g, (_, tag, attrs) => {
    const title =
      attrs.match(/title=\{['"]([^'"]+)['"]\}/)?.[1] ||
      attrs.match(/title=['"]([^'"]+)['"]/)?.[1];
    if (!title) return '';
    return `\n${tag === 'SectionHeader' ? '#' : '##'} ${title}\n`;
  });

  out = out.replace(
    /<\/?(?:Canvas|ArgsTable|Controls|Primary|Stories|Story|Description|Source|ColorPalette|ColorItem|Typeset)[^>]*>/g,
    '',
  );
  out = out.replace(/<p>/g, '\n').replace(/<\/p>/g, '\n');
  out = out.replace(/<br\s*\/?>/g, '\n');
  out = out.replace(/\n{3,}/g, '\n\n');
  return out.trim();
}

export function toKebabCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

/**
 * Attach Storybook CSF examples onto matching components (Axiom demos equivalent).
 * @param {Record<string, any>} components
 */
export async function attachStoryPatterns(components) {
  const storiesRoot = join(__dirname, '../../../apps/storybook/src');
  const dirs = [
    'stories',
    'vanilla',
    'button',
    'avatar',
    'badge',
    'icon',
    'nav',
    'tag-group',
    'data-table',
  ];

  /** @type {string[]} */
  const storyFiles = [];
  for (const dir of dirs) {
    storyFiles.push(...(await walkStories(join(storiesRoot, dir))));
  }

  /** @type {Map<string, any[]>} */
  const byComponentId = new Map();

  for (const file of storyFiles) {
    const source = await readFile(file, 'utf8');
    for (const example of extractStoryExamples(source, file)) {
      if (!example.primary) continue;
      const id = `${example.api}:${example.primary}`;
      const list = byComponentId.get(id) ?? [];
      list.push(example);
      byComponentId.set(id, list);
    }
  }

  for (const component of Object.values(components)) {
    const examples = byComponentId.get(component.id) ?? [];
    if (!examples.length) continue;
    component.examples = examples.slice(0, 8).map((example) => ({
      title: example.title,
      components: example.components,
      code: example.code,
    }));
  }
}

async function walkStories(dir) {
  /** @type {string[]} */
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walkStories(full)));
    else if (entry.isFile() && /\.stories\.(tsx|ts|jsx|js)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function extractStoryExamples(source, file) {
  const primary = detectPrimaryComponent(source);
  if (!primary) return [];

  const api = detectApi(source, primary);
  const usedComponents = detectIctinusComponents(source);
  if (!usedComponents.includes(primary)) usedComponents.unshift(primary);

  /** @type {any[]} */
  const examples = [];
  const titleMatch = source.match(/title:\s*['"`]([^'"`]+)['"`]/);

  const parts = source.split(/(?=export\s+const\s+\w+)/);
  for (const part of parts) {
    const nameMatch = part.match(/^export\s+const\s+(\w+)/);
    if (!nameMatch) continue;
    const storyName = nameMatch[1];
    if (storyName === 'default') continue;

    let code = part.trim();
    if (code.length > 4000) code = `${code.slice(0, 4000)}\n/* … truncated … */`;

    const storyComponents = usedComponents.filter((name) =>
      new RegExp(`<${name}\\b`).test(part),
    );
    const components =
      storyComponents.length > 0
        ? [...new Set([primary, ...storyComponents])]
        : usedComponents;

    examples.push({
      title: titleMatch ? `${titleMatch[1]} / ${storyName}` : storyName,
      primary,
      api,
      components,
      code: [
        {
          filename: file.split(/[/\\]/).slice(-2).join('/'),
          content: code,
        },
      ],
    });
  }

  return examples.slice(0, 12);
}

function detectPrimaryComponent(source) {
  return (
    source.match(/\bcomponent:\s*(\w+)/)?.[1] ||
    source.match(/Meta<\s*typeof\s+(\w+)\s*>/)?.[1] ||
    source.match(/StoryObj<\s*typeof\s+(\w+)\s*>/)?.[1] ||
    null
  );
}

function detectApi(source, primary) {
  const vanillaImport = new RegExp(
    `import\\s+(?:${primary}\\s*,|[\\s\\S]*?\\{[^}]*\\b${primary}\\b[^}]*\\})\\s*from\\s*['"]@orfium\\/ictinus\\/vanilla['"]`,
  );
  if (vanillaImport.test(source)) return 'vanilla';
  const vanillaBlock = source.match(
    /import\s+(?:(\w+)|\{([^}]+)\})\s*from\s*['"]@orfium\/ictinus\/vanilla['"]/g,
  );
  if (vanillaBlock?.some((block) => block.includes(primary))) return 'vanilla';
  return 'legacy';
}

function detectIctinusComponents(source) {
  const names = new Set();
  const importRe =
    /import\s+(?:(\w+)\s*,?\s*)?(?:\{([^}]+)\})?\s*from\s*['"]@orfium\/ictinus(?:\/vanilla)?['"]/g;
  let m;
  while ((m = importRe.exec(source)) !== null) {
    if (m[1] && /^[A-Z]/.test(m[1])) names.add(m[1]);
    if (m[2]) {
      for (const part of m[2].split(',')) {
        const name = part.trim().split(/\s+as\s+/).pop();
        if (name && /^[A-Z]/.test(name)) names.add(name);
      }
    }
  }
  return [...names];
}
