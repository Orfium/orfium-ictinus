import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

/**
 * Attach Storybook CSF examples onto matching components.
 * Examples are attached only to the story's **primary** component
 * (`meta.component` / `Meta<typeof X>`), not every imported helper.
 *
 * Secondary imports stay on `example.components` so `get_patterns` can still
 * find composition examples (e.g. Broadcast + Button).
 *
 * @param {string} repoRoot
 * @param {Record<string, any>} components
 */
export async function attachPatterns(repoRoot, components) {
  const storiesRoot = join(repoRoot, 'apps/storybook/src');
  const storyFiles = [
    ...(await walkStories(join(storiesRoot, 'stories'))),
    ...(await walkStories(join(storiesRoot, 'vanilla')).catch(() => [])),
    ...(await walkStories(join(storiesRoot, 'button')).catch(() => [])),
    ...(await walkStories(join(storiesRoot, 'avatar')).catch(() => [])),
    ...(await walkStories(join(storiesRoot, 'badge')).catch(() => [])),
    ...(await walkStories(join(storiesRoot, 'icon')).catch(() => [])),
    ...(await walkStories(join(storiesRoot, 'nav')).catch(() => [])),
    ...(await walkStories(join(storiesRoot, 'tag-group')).catch(() => [])),
    ...(await walkStories(join(storiesRoot, 'data-table')).catch(() => [])),
  ];

  /** @type {Map<string, any[]>} */
  const byComponentId = new Map();

  for (const file of storyFiles) {
    const source = await readFile(file, 'utf8');
    const examples = extractStoryExamples(source, file);
    for (const example of examples) {
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

/**
 * @param {string} dir
 */
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

/**
 * @param {string} source
 * @param {string} file
 */
function extractStoryExamples(source, file) {
  const primary = detectPrimaryComponent(source);
  if (!primary) return [];

  const api = detectApi(source, primary);
  const usedComponents = detectIctinusComponents(source);
  // Ensure primary is always listed
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
    if (code.length > 4000) {
      code = `${code.slice(0, 4000)}\n/* … truncated … */`;
    }

    // Prefer components referenced in this story body; fall back to file imports
    const storyComponents = detectJsxComponents(part, usedComponents);
    const components =
      storyComponents.length > 0
        ? unique([primary, ...storyComponents])
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

  if (examples.length === 0) {
    examples.push({
      title: titleMatch?.[1] ?? file.split(/[/\\]/).pop(),
      primary,
      api,
      components: usedComponents,
      code: [
        {
          filename: file.split(/[/\\]/).slice(-2).join('/'),
          content:
            source.length > 4000
              ? `${source.slice(0, 4000)}\n/* … truncated … */`
              : source,
        },
      ],
    });
  }

  return examples.slice(0, 12);
}

function detectPrimaryComponent(source) {
  const fromComponentProp = source.match(/\bcomponent:\s*(\w+)/);
  if (fromComponentProp) return fromComponentProp[1];

  const fromMeta = source.match(/Meta<\s*typeof\s+(\w+)\s*>/);
  if (fromMeta) return fromMeta[1];

  const fromStoryObj = source.match(/StoryObj<\s*typeof\s+(\w+)\s*>/);
  if (fromStoryObj) return fromStoryObj[1];

  return null;
}

/**
 * Infer vanilla vs legacy from how the primary component is imported.
 * @param {string} source
 * @param {string} primary
 */
function detectApi(source, primary) {
  const vanillaImport = new RegExp(
    `import\\s+(?:${primary}\\s*,|[\\s\\S]*?\\{[^}]*\\b${primary}\\b[^}]*\\})\\s*from\\s*['"]@orfium\\/ictinus\\/vanilla['"]`,
  );
  if (vanillaImport.test(source) || /from\s*['"]@orfium\/ictinus\/vanilla['"]/.test(source)) {
    // If primary appears only via vanilla, or file is vanilla-first
    if (vanillaImport.test(source)) return 'vanilla';
    // File imports from vanilla at all and primary is in vanilla import list
    const vanillaBlock = source.match(
      /import\s+(?:(\w+)|\{([^}]+)\})\s*from\s*['"]@orfium\/ictinus\/vanilla['"]/g,
    );
    if (vanillaBlock?.some((block) => block.includes(primary))) return 'vanilla';
  }

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

/**
 * Detect which known components appear as JSX tags in a story body.
 * @param {string} source
 * @param {string[]} known
 */
function detectJsxComponents(source, known) {
  return known.filter((name) => new RegExp(`<${name}\\b`).test(source));
}

function unique(items) {
  return [...new Set(items)];
}
