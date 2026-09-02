import { readFile, stat } from 'node:fs/promises';
import { basename, dirname, join, relative } from 'node:path';

import {
  extractDestructuredProps,
  extractOwnPropsFromSource,
  extractPropsFromSource,
  extractRecipeProps,
  formatComponentDescription,
  mergePropDefinitions,
  parseLeadingJsdoc,
  toCamelCase,
} from './parse.mjs';
import { parseVanillaExports } from './vanilla-exports.mjs';

const LEGACY_SKIP = new Set([
  'ClickAwayListener',
  'NotificationsContainer',
  'NotificationVisual',
  'MultiTextFieldBase',
  'TextInputBase',
  'ButtonBase',
  'ButtonLoader',
]);

const CATEGORY_BY_PATH = [
  [/Chart|BarChart|DonutChart|LineChart|data-table|DataTable|Table/, 'data-display'],
  [
    /Controls|CheckBox|Radio|Switch|TextField|TextArea|NumberField|Select|Search|Filter|Slider|DatePicker/,
    'form',
  ],
  [
    /Notification|Toast|Broadcast|InlineAlert|Banner|Snackbar|ProgressIndicator/,
    'feedback',
  ],
  [/Modal|Drawer|Dialog|Popover|Tooltip|Menu|Dropdown/, 'overlay'],
  [/Breadcrumb|Tabs|TabStepper|TopAppBar|TopNavBar|Nav|Pagination|SideNav/, 'navigation'],
  [/Avatar|Badge|Tag|Icon|Typography|Text|Link|Label|TruncatedContent/, 'display'],
  [/Button|IconButton|DropdownButton/, 'actions'],
  [/Box|Card|Layout|Cover|Skeleton/, 'layout'],
  [/ThemeProvider/, 'theming'],
];

/**
 * @param {string} repoRoot
 */
export async function generateComponents(repoRoot) {
  const ictinusSrc = join(repoRoot, 'packages/ictinus/src');
  /** @type {Record<string, any>} */
  const components = {};

  const legacyExports = await parseLegacyExports(join(ictinusSrc, 'index.ts'));
  for (const exp of legacyExports) {
    if (LEGACY_SKIP.has(exp.name)) continue;
    const info = await buildLegacyComponent(ictinusSrc, exp);
    if (info) components[info.id] = info;
  }

  const vanillaExports = await parseVanillaExports(ictinusSrc);
  for (const exp of vanillaExports) {
    const info = await buildVanillaComponent(ictinusSrc, exp);
    if (info) components[info.id] = info;
  }

  return components;
}

/**
 * @param {string} indexPath
 */
async function parseLegacyExports(indexPath) {
  const source = await readFile(indexPath, 'utf8');
  /** @type {Array<{ name: string, exportKind: 'default' | 'named', modulePath: string }>} */
  const exports = [];

  const defaultAsRe =
    /export\s*\{\s*default\s+as\s+(\w+)\s*\}\s*from\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = defaultAsRe.exec(source)) !== null) {
    if (!isLegacyComponentExport(m[1], m[2])) continue;
    exports.push({ name: m[1], exportKind: 'default', modulePath: m[2] });
  }

  const namedFromRe = /export\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/g;
  while ((m = namedFromRe.exec(source)) !== null) {
    const modulePath = m[2];
    const parts = m[1].split(',').map((p) => p.trim()).filter(Boolean);
    for (const part of parts) {
      if (part.startsWith('type ') || part.startsWith('type\t')) continue;
      if (part.startsWith('default as ')) continue;
      const name = part.replace(/^type\s+/, '').split(/\s+as\s+/).pop();
      if (!name || !isLegacyComponentExport(name, modulePath)) continue;
      if (exports.some((e) => e.name === name && e.modulePath === modulePath)) continue;
      exports.push({ name, exportKind: 'named', modulePath });
    }
  }

  return exports;
}

/**
 * @param {string} ictinusSrc
 * @param {{ name: string, exportKind: string, modulePath: string }} exp
 */
async function buildLegacyComponent(ictinusSrc, exp) {
  const filePath = await resolveModule(join(ictinusSrc, 'index.ts'), exp.modulePath, exp.name);
  if (!filePath) {
    return {
      id: `legacy:${exp.name}`,
      name: exp.name,
      api: 'legacy',
      description: `${exp.name} component from @orfium/ictinus (legacy API).`,
      import:
        exp.exportKind === 'default'
          ? `import ${exp.name} from '@orfium/ictinus';`
          : `import { ${exp.name} } from '@orfium/ictinus';`,
      category: inferCategory(exp.modulePath, exp.name),
      props: {},
      sourcePath: exp.modulePath,
    };
  }

  const source = await readFile(filePath, 'utf8');
  const componentIndex = findComponentIndex(source, exp.name);
  const jsdoc = parseComponentJsdoc(source, componentIndex);

  const props = await resolveComponentProps(source, filePath, exp.name);

  const importStmt =
    exp.exportKind === 'default'
      ? `import ${exp.name} from '@orfium/ictinus';\n// or: import { ${exp.name} } from '@orfium/ictinus';`
      : `import { ${exp.name} } from '@orfium/ictinus';`;

  const description =
    cleanDescription(formatComponentDescription(jsdoc)) ||
    `${exp.name} component from @orfium/ictinus (legacy Emotion API). Prefer @orfium/ictinus/vanilla when a vanilla equivalent exists.`;

  return {
    id: `legacy:${exp.name}`,
    name: exp.name,
    api: 'legacy',
    description,
    import: importStmt,
    category: inferCategory(filePath, exp.name),
    ...(jsdoc.deprecated ? { deprecated: jsdoc.deprecated } : {}),
    props,
    sourcePath: relative(join(ictinusSrc, '..'), filePath),
  };
}

/**
 * @param {string} ictinusSrc
 * @param {{ name: string, filePath: string }} exp
 */
async function buildVanillaComponent(ictinusSrc, exp) {
  const impl = await findImplFile(exp.filePath, exp.name);
  const filePath = impl ?? exp.filePath;
  const source = await readFile(filePath, 'utf8');
  const componentIndex = findComponentIndex(source, exp.name);
  const jsdoc = parseComponentJsdoc(source, componentIndex);

  // Prefer XOwnProps docs; fall back to XProps / recipe / destructuring.
  const props = await resolveComponentProps(source, filePath, exp.name);

  return {
    id: `vanilla:${exp.name}`,
    name: exp.name,
    api: 'vanilla',
    description:
      cleanDescription(formatComponentDescription(jsdoc)) ||
      `${exp.name} from @orfium/ictinus/vanilla (preferred modern API).`,
    import: `import { ${exp.name} } from '@orfium/ictinus/vanilla';`,
    category: inferCategory(filePath, exp.name),
    ...(jsdoc.deprecated ? { deprecated: jsdoc.deprecated } : {}),
    props,
    sourcePath: relative(join(ictinusSrc, '..'), filePath),
  };
}

/**
 * Merge prop sources. Later entries fill gaps; put OwnProps last so JSDoc wins.
 * @param {string} source
 * @param {string} filePath
 * @param {string} name
 */
async function resolveComponentProps(source, filePath, name) {
  let typed = extractPropsFromSource(source, name);
  if (Object.keys(typed).length === 0) {
    typed = await loadPropsFromSiblings(filePath, name);
  }

  const own = extractOwnPropsFromSource(source, name);
  const siblingOwn = Object.keys(own).length
    ? own
    : await loadOwnPropsFromSiblings(filePath, name);
  const destructured = extractDestructuredProps(source, name);
  const recipe = await loadRecipeProps(filePath, name);

  return mergePropDefinitions(destructured, recipe, typed, siblingOwn);
}

/**
 * Load vanilla-extract recipe variant props from a sibling `*.css.ts`.
 * @param {string} filePath
 * @param {string} name
 */
async function loadRecipeProps(filePath, name) {
  const dir = dirname(filePath);
  const base = basename(filePath).replace(/\.(tsx|ts)$/, '');
  const recipeName = toCamelCase(name);
  const candidates = [
    join(dir, `${base}.css.ts`),
    join(dir, `${name}.css.ts`),
    join(dir, `${recipeName}.css.ts`),
  ];

  for (const c of candidates) {
    try {
      const src = await readFile(c, 'utf8');
      const props = extractRecipeProps(src, recipeName);
      if (Object.keys(props).length > 0) return props;
    } catch {
      /* continue */
    }
  }
  return {};
}

function findComponentIndex(source, name) {
  const patterns = [
    new RegExp(`export\\s+const\\s+${name}\\b`),
    new RegExp(`export\\s+function\\s+${name}\\b`),
    new RegExp(`export\\s+default\\s+function\\s+${name}\\b`),
    new RegExp(`(?:export\\s+)?const\\s+${name}\\s*=\\s*(?:React\\.)?forwardRef\\b`),
    // Plain const (Dialog, Popover compounds, etc.)
    new RegExp(`(?:export\\s+)?const\\s+${name}\\s*=`),
    new RegExp(`function\\s+${name}\\b`),
  ];
  for (const re of patterns) {
    const m = re.exec(source);
    if (m) return m.index;
  }
  return -1;
}

/**
 * Only the JSDoc immediately above the component declaration.
 * @param {string} source
 * @param {number} index
 */
function parseComponentJsdoc(source, index) {
  if (index < 0) return { description: '', deprecated: undefined, tags: {} };
  return parseLeadingJsdoc(source, index);
}

async function loadPropsFromSiblings(filePath, name) {
  for (const c of siblingCandidates(filePath, name)) {
    try {
      const src = await readFile(c, 'utf8');
      const props = extractPropsFromSource(src, name);
      if (Object.keys(props).length > 0) return props;
    } catch {
      /* continue */
    }
  }
  return {};
}

async function loadOwnPropsFromSiblings(filePath, name) {
  for (const c of siblingCandidates(filePath, name)) {
    try {
      const src = await readFile(c, 'utf8');
      const props = extractOwnPropsFromSource(src, name);
      if (Object.keys(props).length > 0) return props;
    } catch {
      /* continue */
    }
  }
  return {};
}

function siblingCandidates(filePath, name) {
  const dir = dirname(filePath);
  const base = basename(filePath).replace(/\.(tsx|ts)$/, '');
  return [
    join(dir, `${name}.types.ts`),
    join(dir, `${base}.types.ts`),
    join(dir, 'types.ts'),
    join(dir, `${name}.tsx`),
    join(dir, `${name}.ts`),
  ];
}

async function findImplFile(indexOrFile, name) {
  if (indexOrFile.endsWith(`${name}.tsx`) || indexOrFile.endsWith(`${name}.ts`)) {
    return indexOrFile;
  }
  const dir = dirname(indexOrFile);
  for (const c of [join(dir, `${name}.tsx`), join(dir, `${name}.ts`)]) {
    try {
      await stat(c);
      return c;
    } catch {
      /* continue */
    }
  }
  return null;
}

async function resolveModule(fromFile, modulePath, componentName) {
  const base = join(dirname(fromFile), modulePath);
  const candidates = [
    `${base}.tsx`,
    `${base}.ts`,
    join(base, 'index.ts'),
    join(base, 'index.tsx'),
    join(base, `${componentName}.tsx`),
    join(base, `${componentName}.ts`),
  ];
  for (const c of candidates) {
    try {
      await stat(c);
      if (c.endsWith('index.ts') || c.endsWith('index.tsx')) {
        const impl = await findImplFile(c, componentName);
        return impl ?? c;
      }
      return c;
    } catch {
      /* continue */
    }
  }
  return null;
}

function inferCategory(pathOrName, name) {
  const hay = `${pathOrName} ${name}`;
  for (const [re, category] of CATEGORY_BY_PATH) {
    if (re.test(hay)) return [category];
  }
  return ['components'];
}

function cleanDescription(description) {
  if (!description) return '';
  const trimmed = description.trim();
  // Reject JSDoc that accidentally captured type-body noise
  if (trimmed.includes('?:') || trimmed.includes('*/') || trimmed.length > 2000) {
    return '';
  }
  return trimmed;
}

function isLegacyComponentExport(name, modulePath) {
  if (!/^[A-Z]/.test(name)) return false;

  const NON_COMPONENTS = new Set([
    'PropsValidationError',
    'ValidationError',
    'KEYBOARD_EVENT_KEYS',
    'TypeColorToColorMatchProvider',
    'ThemeSwitchProvider',
  ]);
  if (NON_COMPONENTS.has(name)) return false;

  // Hooks / utils / theme barrels
  if (
    modulePath.includes('/hooks/') ||
    modulePath.includes('/utils/') ||
    modulePath.includes('/theme') ||
    modulePath.endsWith('/date') ||
    modulePath.endsWith('theme/functions')
  ) {
    return false;
  }

  return (
    modulePath.includes('/components/') ||
    modulePath.includes('/Broadcast') ||
    modulePath.includes('/InlineAlert') ||
    modulePath.includes('/Toast')
  );
}
