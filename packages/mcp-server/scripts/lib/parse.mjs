/**
 * Extract a top-level `export const name = { … }` object literal and evaluate it.
 * Strips TypeScript `as const` / `as const satisfies …` noise.
 */
export function extractExportedConstObject(source, name) {
  const marker = new RegExp(`export\\s+const\\s+${name}\\s*=\\s*`);
  const match = marker.exec(source);
  if (!match) {
    // also allow `const name =` then `export default name` / `export { name }`
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
  // strip trailing `as const` etc. already outside; clean type assertions inside values
  literal = literal.replace(/\s+as\s+const/g, '');

  try {
    // eslint-disable-next-line no-new-func
    return new Function(`return (${literal})`)();
  } catch {
    return null;
  }
}

/**
 * Flatten nested token objects into `a.b.c` → leaf value (string or serialized).
 */
export function flattenTokens(obj, prefix = '', out = {}) {
  if (obj == null || typeof obj !== 'object') return out;

  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value != null && typeof value === 'object' && !Array.isArray(value)) {
      // design-token shape: { value, type, description? }
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

/**
 * Parse JSDoc immediately above a match index.
 * Multi-line @example / @see / @remarks continue until the next @tag.
 *
 * Important: only the last JSDoc block flush against the declaration is used.
 * A naive greedy/dotall match would span from an earlier OwnProps doc through
 * nested prop comments into the component comment.
 */
export function parseLeadingJsdoc(source, index) {
  const before = source.slice(0, index);
  // Body cannot contain `*/`, so this cannot span multiple comment blocks.
  const jsdocMatch = before.match(/\/\*\*((?:(?!\*\/)[\s\S])*)\*\/\s*$/);
  if (!jsdocMatch) return { description: '', deprecated: undefined, tags: {} };

  const body = jsdocMatch[1]
    .split('\n')
    .map((line) => line.replace(/^\s*\*\s?/, ''))
    .join('\n')
    .trim();

  /** @type {Record<string, string | string[]>} */
  const tags = {};
  const lines = body.split('\n');
  const descLines = [];
  let deprecated;
  /** @type {string | null} */
  let activeTag = null;

  for (const line of lines) {
    const tagMatch = line.match(/^@(\w+)\s*(.*)$/);
    if (tagMatch) {
      const [, tag, rest] = tagMatch;
      activeTag = tag;
      if (tag === 'deprecated') {
        deprecated = parseDeprecated(rest);
        activeTag = null;
      } else if (tag === 'example' || tag === 'see' || tag === 'remarks') {
        const existing = tags[tag];
        if (existing == null) tags[tag] = rest;
        else if (Array.isArray(existing)) existing.push(rest);
        else tags[tag] = [existing, rest];
      } else {
        tags[tag] = rest;
      }
      continue;
    }

    if (activeTag && (activeTag === 'example' || activeTag === 'remarks')) {
      const existing = tags[activeTag];
      if (Array.isArray(existing)) {
        existing[existing.length - 1] = `${existing[existing.length - 1]}\n${line}`.trim();
      } else {
        tags[activeTag] = `${existing ?? ''}\n${line}`.trim();
      }
      continue;
    }

    activeTag = null;
    descLines.push(line);
  }

  return {
    description: descLines.join('\n').trim(),
    deprecated,
    tags,
  };
}

/**
 * Build a human-readable description from JSDoc summary + @example / @see.
 * @param {{ description?: string, tags?: Record<string, string | string[]> }} jsdoc
 */
export function formatComponentDescription(jsdoc) {
  const parts = [];
  const summary = (jsdoc.description || '').trim();
  if (summary) parts.push(summary);

  const examples = jsdoc.tags?.example;
  if (examples) {
    const list = Array.isArray(examples) ? examples : [examples];
    for (const ex of list) {
      const trimmed = String(ex).trim();
      if (trimmed) parts.push(`Example:\n${trimmed}`);
    }
  }

  const see = jsdoc.tags?.see;
  if (see) {
    const list = Array.isArray(see) ? see : [see];
    const joined = list
      .map((s) => String(s).trim())
      .filter(Boolean)
      .join('; ');
    if (joined) parts.push(`See: ${joined}`);
  }

  return parts.join('\n\n').trim();
}

function parseDeprecated(text) {
  const sinceMatch = text.match(/since\s+([\d.]+)/i);
  const linkMatch = text.match(/\{@link\s+([^}]+)\}/);
  const useMatch = text.match(/use\s+([A-Za-z0-9_./\s]+?)(?:\s+instead|$)/i);
  return {
    message: text || 'deprecated',
    since: sinceMatch?.[1],
    replacement: linkMatch?.[1]?.trim() || useMatch?.[1]?.trim(),
  };
}

/**
 * Extract props from `type XProps = { … }` / `interface XProps { … }`.
 * Intersection aliases (`type XProps = A & B`) are skipped — callers should
 * fall back to `XOwnProps`, destructuring, or recipe extraction.
 */
export function extractPropsFromSource(source, componentName) {
  return extractPropsInterface(source, `${componentName}Props`);
}

/**
 * Extract documented design-system props from `interface XOwnProps { … }`.
 * Prefer this over bare `XProps = A & B` intersections for MCP metadata.
 */
export function extractOwnPropsFromSource(source, componentName) {
  return extractPropsInterface(source, `${componentName}OwnProps`);
}

/**
 * @param {string} source
 * @param {string} typeName
 */
function extractPropsInterface(source, typeName) {
  const declRe = new RegExp(`(?:export\\s+)?(?:type|interface)\\s+${typeName}\\b`);
  const match = declRe.exec(source);
  if (!match) return {};

  const afterName = source.slice(match.index + match[0].length);
  // Skip type aliases that are only intersections / utilities (no immediate object)
  const aliasBody = afterName.match(/^\s*=\s*([^;{]+)/);
  if (aliasBody && !aliasBody[1].includes('{')) {
    // `type FooProps = Bar & Baz` — no inline members
    if (!/^\s*\{/.test(afterName.replace(/^\s*=\s*/, ''))) return {};
  }

  const braceStart = source.indexOf('{', match.index);
  if (braceStart < 0) return {};

  // Avoid matching a different block far away — props decl should open soon
  if (braceStart - match.index > 200) return {};

  // For `type X = Foo<{ ... }>` the first `{` may be a generic — require it to
  // look like a prop members block (keys with `:` / `;`)
  const block = sliceBalanced(source, braceStart);
  if (!block) return {};
  const members = parsePropMembers(block.slice(1, -1));
  return members;
}

/**
 * Extract props from component param / body destructuring, including defaults.
 * Handles `forwardRef(( { a = 'x', b }, ref )` and `const { a, b } = props`.
 *
 * @param {string} source
 * @param {string} componentName
 * @returns {Record<string, { type: string, description?: string, defaultValue?: string, required?: boolean }>}
 */
export function extractDestructuredProps(source, componentName) {
  /** @type {Record<string, { type: string, defaultValue?: string, required?: boolean }>} */
  const props = {};

  const startPatterns = [
    new RegExp(`export\\s+const\\s+${componentName}\\s*=\\s*(?:React\\.)?forwardRef`),
    new RegExp(`(?:export\\s+)?const\\s+${componentName}\\s*=\\s*(?:React\\.)?forwardRef`),
    new RegExp(`export\\s+function\\s+${componentName}\\b`),
    new RegExp(`function\\s+${componentName}\\b`),
    new RegExp(`export\\s+const\\s+${componentName}\\s*=`),
    new RegExp(`(?:export\\s+)?const\\s+${componentName}\\s*=`),
  ];

  let start = -1;
  for (const re of startPatterns) {
    const m = re.exec(source);
    if (m) {
      start = m.index + m[0].length;
      break;
    }
  }
  if (start < 0) return props;

  const window = source.slice(start, start + 1200);

  // Param destructure: ({ ... }) or ( { ... },
  const paramOpen = window.search(/\(\s*\{/);
  if (paramOpen >= 0) {
    const abs = start + paramOpen;
    const brace = source.indexOf('{', abs);
    const block = sliceBalanced(source, brace);
    if (block) Object.assign(props, parseDestructureMembers(block.slice(1, -1)));
  }

  // Body: const { ... } = props
  const bodyAssign = window.match(/\b(?:const|let)\s*\{([\s\S]*?)\}\s*=\s*props\b/);
  if (bodyAssign) {
    Object.assign(props, parseDestructureMembers(bodyAssign[1]));
  }

  return props;
}

/**
 * @param {string} body
 */
function parseDestructureMembers(body) {
  /** @type {Record<string, { type: string, defaultValue?: string, required?: boolean }>} */
  const props = {};
  let i = 0;
  while (i < body.length) {
    while (i < body.length && /[\s,]/.test(body[i])) i++;
    if (i >= body.length) break;
    if (body.startsWith('...', i)) {
      // rest — skip identifier
      i += 3;
      while (i < body.length && /[A-Za-z0-9_$]/.test(body[i])) i++;
      continue;
    }
    const nameMatch = body.slice(i).match(/^([A-Za-z_][\w]*)/);
    if (!nameMatch) {
      i++;
      continue;
    }
    const name = nameMatch[1];
    i += name.length;
    while (i < body.length && /\s/.test(body[i])) i++;

    let defaultValue;
    if (body[i] === '=') {
      i++;
      while (i < body.length && /\s/.test(body[i])) i++;
      const valueStart = i;
      let depth = 0;
      let inString = null;
      let escaped = false;
      for (; i < body.length; i++) {
        const ch = body[i];
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
        if (ch === '(' || ch === '{' || ch === '[') depth++;
        else if (ch === ')' || ch === '}' || ch === ']') depth = Math.max(0, depth - 1);
        else if ((ch === ',' || ch === '}') && depth === 0) break;
      }
      defaultValue = body.slice(valueStart, i).trim();
    }

    // Skip React/html plumbing that isn't a public API signal
    if (name === 'children' || name === 'className' || name === 'style' || name === 'ref') {
      continue;
    }

    props[name] = {
      type: inferTypeFromDefault(defaultValue),
      required: false,
      ...(defaultValue ? { defaultValue: stripQuotes(defaultValue) } : {}),
    };
  }
  return props;
}

function inferTypeFromDefault(defaultValue) {
  if (defaultValue == null) return 'unknown';
  if (defaultValue === 'true' || defaultValue === 'false') return 'boolean';
  if (/^['"`]/.test(defaultValue)) return 'string';
  if (/^-?\d/.test(defaultValue)) return 'number';
  return 'unknown';
}

function stripQuotes(value) {
  const m = value.match(/^['"`](.*)['"`]$/s);
  return m ? m[1] : value;
}

/**
 * Extract variant props from a vanilla-extract `recipe({ variants, defaultVariants })`.
 *
 * @param {string} cssSource
 * @param {string} recipeName camelCase export (e.g. "button", "codeBadge")
 */
export function extractRecipeProps(cssSource, recipeName) {
  /** @type {Record<string, { type: string, defaultValue?: string, required?: boolean }>} */
  const props = {};

  const marker = new RegExp(`(?:export\\s+)?const\\s+${recipeName}\\s*=\\s*recipe\\s*\\(`);
  const match = marker.exec(cssSource);
  if (!match) return props;

  const objStart = cssSource.indexOf('{', match.index + match[0].length - 1);
  if (objStart < 0) return props;
  const obj = sliceBalanced(cssSource, objStart);
  if (!obj) return props;

  const variantsKey = obj.match(/\bvariants\s*:/);
  if (variantsKey && variantsKey.index != null) {
    const vStart = obj.indexOf('{', variantsKey.index);
    const variantsBlock = sliceBalanced(obj, vStart);
    if (variantsBlock) {
      Object.assign(props, parseRecipeVariantKeys(variantsBlock.slice(1, -1)));
    }
  }

  const defaultsKey = obj.match(/\bdefaultVariants\s*:/);
  if (defaultsKey && defaultsKey.index != null) {
    const dStart = obj.indexOf('{', defaultsKey.index);
    const defaultsBlock = sliceBalanced(obj, dStart);
    if (defaultsBlock) {
      const defaults = parseSimpleObjectLiterals(defaultsBlock.slice(1, -1));
      for (const [key, value] of Object.entries(defaults)) {
        if (!props[key]) {
          props[key] = { type: typeof value === 'boolean' ? 'boolean' : 'string', required: false };
        }
        props[key].defaultValue = String(value);
      }
    }
  }

  return props;
}

/**
 * @param {string} body variants object body
 */
function parseRecipeVariantKeys(body) {
  /** @type {Record<string, { type: string, description?: string, defaultValue?: string, required?: boolean }>} */
  const props = {};
  let i = 0;
  /** @type {string[]} */
  let pendingDocs = [];

  while (i < body.length) {
    while (i < body.length && /[\s,]/.test(body[i])) i++;
    if (i >= body.length) break;

    if (body.startsWith('/**', i)) {
      const end = body.indexOf('*/', i + 3);
      if (end === -1) break;
      pendingDocs.push(body.slice(i + 3, end));
      i = end + 2;
      continue;
    }
    if (body.startsWith('//', i)) {
      const end = body.indexOf('\n', i);
      i = end === -1 ? body.length : end + 1;
      continue;
    }

    const keyMatch = body.slice(i).match(/^([A-Za-z_][\w]*)\s*:/);
    if (!keyMatch) {
      pendingDocs = [];
      i++;
      continue;
    }
    const key = keyMatch[1];
    i += keyMatch[0].length;
    while (i < body.length && /\s/.test(body[i])) i++;
    if (body[i] !== '{') {
      pendingDocs = [];
      continue;
    }
    const optionBlock = sliceBalanced(body, i);
    if (!optionBlock) break;
    i += optionBlock.length;

    const unique = topLevelObjectKeys(optionBlock.slice(1, -1));
    const isBoolean = unique.length > 0 && unique.every((k) => k === 'true' || k === 'false');
    const meta = parsePropJsdoc(pendingDocs.map((d) => `*${d}`).join('\n'));
    pendingDocs = [];

    props[key] = {
      type: isBoolean ? 'boolean' : unique.map((k) => `'${k}'`).join(' | ') || 'string',
      required: false,
      ...(meta.description ? { description: meta.description } : {}),
      ...(meta.defaultValue ? { defaultValue: stripQuotes(meta.defaultValue) } : {}),
    };
  }
  return props;
}

/**
 * Keys at depth 0 of an object literal body (ignores nested sprinkles keys).
 * @param {string} body
 */
function topLevelObjectKeys(body) {
  /** @type {string[]} */
  const keys = [];
  let i = 0;
  let depth = 0;
  let inString = null;
  let escaped = false;

  while (i < body.length) {
    const ch = body[i];
    if (inString) {
      if (escaped) {
        escaped = false;
        i++;
        continue;
      }
      if (ch === '\\') {
        escaped = true;
        i++;
        continue;
      }
      if (ch === inString) inString = null;
      i++;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      inString = ch;
      i++;
      continue;
    }
    if (ch === '{' || ch === '(' || ch === '[') {
      depth++;
      i++;
      continue;
    }
    if (ch === '}' || ch === ')' || ch === ']') {
      depth = Math.max(0, depth - 1);
      i++;
      continue;
    }
    if (depth === 0) {
      const keyMatch = body.slice(i).match(/^([A-Za-z_][\w]*)\s*:/);
      if (keyMatch) {
        keys.push(keyMatch[1]);
        i += keyMatch[0].length;
        continue;
      }
    }
    i++;
  }
  return [...new Set(keys)];
}

/**
 * Parse flat `{ a: 'x', b: true }` literals (defaultVariants).
 * @param {string} body
 */
function parseSimpleObjectLiterals(body) {
  /** @type {Record<string, string | boolean | number>} */
  const out = {};
  const re = /([A-Za-z_][\w]*)\s*:\s*(true|false|-?\d+(?:\.\d+)?|['"`][^'"`]*['"`])/g;
  let m;
  while ((m = re.exec(body)) !== null) {
    const [, key, raw] = m;
    if (raw === 'true') out[key] = true;
    else if (raw === 'false') out[key] = false;
    else if (/^-?\d/.test(raw)) out[key] = Number(raw);
    else out[key] = stripQuotes(raw);
  }
  return out;
}

/**
 * Merge prop maps; later sources fill gaps, union types win over `unknown`.
 * @param {...Record<string, any>} sources
 */
export function mergePropDefinitions(...sources) {
  /** @type {Record<string, any>} */
  const out = {};
  for (const src of sources) {
    for (const [name, def] of Object.entries(src ?? {})) {
      if (!out[name]) {
        out[name] = { ...def };
        continue;
      }
      const cur = out[name];
      if (!cur.defaultValue && def.defaultValue) cur.defaultValue = def.defaultValue;
      if (!cur.description && def.description) cur.description = def.description;
      if (def.type && shouldPreferType(def.type, cur.type)) cur.type = def.type;
      if (cur.required == null && def.required != null) cur.required = def.required;
    }
  }
  return out;
}

function shouldPreferType(next, current) {
  if (!current || current === 'unknown') return true;
  if (next === 'unknown') return false;
  if (next.includes('|') && !current.includes('|')) return true;
  if (next === 'boolean' && current === 'unknown') return true;
  return false;
}

/** PascalCase → camelCase (`CodeBadge` → `codeBadge`) */
export function toCamelCase(name) {
  return name.charAt(0).toLowerCase() + name.slice(1);
}

function sliceBalanced(source, start) {
  if (source[start] !== '{') return null;
  let depth = 0;
  let inString = null;
  let escaped = false;
  let inLineComment = false;
  let inBlockComment = false;

  for (let i = start; i < source.length; i++) {
    const ch = source[i];
    const next = source[i + 1];

    if (inLineComment) {
      if (ch === '\n') inLineComment = false;
      continue;
    }
    if (inBlockComment) {
      if (ch === '*' && next === '/') {
        inBlockComment = false;
        i++;
      }
      continue;
    }
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

    if (ch === '/' && next === '/') {
      inLineComment = true;
      i++;
      continue;
    }
    if (ch === '/' && next === '*') {
      inBlockComment = true;
      i++;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      inString = ch;
      continue;
    }
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return source.slice(start, i + 1);
    }
  }
  return null;
}

function parsePropMembers(body) {
  /** @type {Record<string, { type: string, description?: string, defaultValue?: string, required?: boolean }>} */
  const props = {};

  // Walk the body outside of comments is hard; instead split on prop-like lines
  // after normalizing JSDoc onto the following declaration.
  const tokens = [];
  let i = 0;
  while (i < body.length) {
    if (body.startsWith('/**', i)) {
      const end = body.indexOf('*/', i + 3);
      if (end === -1) break;
      tokens.push({ kind: 'jsdoc', value: body.slice(i + 3, end) });
      i = end + 2;
      continue;
    }
    if (body[i] === '/' && body[i + 1] === '/') {
      const end = body.indexOf('\n', i);
      i = end === -1 ? body.length : end + 1;
      continue;
    }
    // declaration until semicolon at depth 0
    if (/[A-Za-z_]/.test(body[i])) {
      let depth = 0;
      let j = i;
      let inString = null;
      let escaped = false;
      for (; j < body.length; j++) {
        const ch = body[j];
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
        if (ch === '(' || ch === '{' || ch === '[') depth++;
        else if (ch === ')' || ch === '}' || ch === ']') depth = Math.max(0, depth - 1);
        else if (ch === ';' && depth === 0) {
          j++;
          break;
        }
      }
      tokens.push({ kind: 'decl', value: body.slice(i, j).trim() });
      i = j;
      continue;
    }
    i++;
  }

  /** @type {string[]} */
  let pendingDocs = [];
  for (const token of tokens) {
    if (token.kind === 'jsdoc') {
      pendingDocs.push(token.value);
      continue;
    }

    const decl = token.value;
    const methodMatch = decl.match(/^([A-Za-z_][\w]*)(\?)?\((.*)\)\s*:\s*(.+);?$/s);
    const propMatch = decl.match(/^([A-Za-z_][\w]*)(\?)?:\s*(.+);?$/s);

    const meta = parsePropJsdoc(pendingDocs.map((d) => `*${d}`).join('\n'));
    pendingDocs = [];

    if (methodMatch) {
      const [, name, optional, params, returnType] = methodMatch;
      props[name] = {
        type: `(${params}) => ${returnType.replace(/\s+/g, ' ').replace(/;$/, '').trim()}`,
        required: !optional,
        ...(meta.description ? { description: meta.description } : {}),
        ...(meta.defaultValue ? { defaultValue: meta.defaultValue } : {}),
      };
      continue;
    }

    if (propMatch) {
      const [, name, optional, typeRaw] = propMatch;
      props[name] = {
        type: typeRaw.replace(/\s+/g, ' ').replace(/;$/, '').trim(),
        required: !optional,
        ...(meta.description ? { description: meta.description } : {}),
        ...(meta.defaultValue ? { defaultValue: meta.defaultValue } : {}),
      };
    }
  }

  return props;
}

function parsePropJsdoc(jsdoc) {
  if (!jsdoc) return {};
  const lines = jsdoc.split('\n').map((l) => l.replace(/^\s*\*\s?/, '').trim());

  let defaultValue;
  const desc = [];
  let inExample = false;
  for (const line of lines) {
    if (!line) continue;
    if (line.startsWith('@example')) {
      inExample = true;
      continue;
    }
    if (line.startsWith('@') && !line.startsWith('@default')) {
      inExample = false;
      continue;
    }
    if (inExample) continue;
    const def = line.match(/^@default\s+(.+)$/);
    if (def) {
      defaultValue = def[1].trim();
      continue;
    }
    desc.push(line);
  }
  return {
    description: desc.join(' ').trim() || undefined,
    defaultValue,
  };
}

export function stripMdx(content) {
  let out = content;
  out = out.replace(/^import\s.+$/gm, '');
  out = out.replace(/<Meta[\s\S]*?\/>/g, '');

  // Convert SectionHeader / SubsectionHeader title props into markdown headings
  out = out.replace(/<(SectionHeader|SubsectionHeader)\b([^>]*)\/>/g, (_, tag, attrs) => {
    const title =
      attrs.match(/title=\{['"]([^'"]+)['"]\}/)?.[1] || attrs.match(/title=['"]([^'"]+)['"]/)?.[1];
    if (!title) return '';
    return `\n${tag === 'SectionHeader' ? '#' : '##'} ${title}\n`;
  });

  out = out.replace(
    /<\/?(?:Canvas|ArgsTable|Controls|Primary|Stories|Story|Description|Source|ColorPalette|ColorItem|Typeset)[^>]*>/g,
    ''
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
