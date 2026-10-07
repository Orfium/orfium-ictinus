import {
  docsShortName,
  getDocs,
  resolveApi,
} from '@orfium/shared';
import { readdir, readFile } from 'node:fs/promises';
import { basename, dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  attachStoryPatterns,
  extractExportedConstObject,
  flattenTokens,
  parsePropDefinition,
  stripMdx,
  toKebabCase,
} from './parsers.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = join(__dirname, '..', '..', '..');

/** Internal / non-public pieces that still appear in export graphs. */
const SKIP = new Set([
  'ClickAwayListener',
  'NotificationsContainer',
  'NotificationVisual',
  'MultiTextFieldBase',
  'TextInputBase',
  'ButtonBase',
  'ButtonLoader',
  'sprinkles',
]);

const CATEGORY_BY_NAME = [
  [/Chart|BarChart|DonutChart|LineChart|DataTable|Table/, 'data-display'],
  [
    /CheckBox|Radio|Switch|TextField|TextArea|NumberField|Select|Search|Filter|Slider|DatePicker/,
    'form',
  ],
  [/Notification|Toast|Broadcast|InlineAlert|Banner|Snackbar|ProgressIndicator/, 'feedback'],
  [/Modal|Drawer|Dialog|Popover|Tooltip|Menu|Dropdown/, 'overlay'],
  [/Breadcrumb|Tabs|TabStepper|TopAppBar|TopNavBar|Nav|Pagination|SideNav/, 'navigation'],
  [/Avatar|Badge|Tag|Icon|Typography|Text|Link|Label|TruncatedContent/, 'display'],
  [/Button|IconButton|DropdownButton/, 'actions'],
  [/Box|Card|Layout|Cover|Skeleton/, 'layout'],
  [/ThemeProvider/, 'theming'],
];

/**
 * @typedef {import('../src/types.js').ComponentInfo} ComponentInfo
 * @typedef {import('../src/types.js').DeprecationInfo} DeprecationInfo
 * @typedef {import('../src/types.js').DesignTokens} DesignTokens
 * @typedef {import('../src/types.js').Guide} Guide
 * @typedef {import('../src/types.js').IconInfo} IconInfo
 */

/** Glyph icons are `FooIcon`; bare `Icon` is the named-icon component. */
const isGlyphIcon = (name) => /.+Icon$/.test(name);

/**
 * @param {string} text
 * @returns {DeprecationInfo}
 */
function parseDeprecatedTag(text) {
  const message = text?.trim() || 'deprecated';
  const sinceMatch = message.match(/since\s+([\d.]+)/i);
  // Prefer "use … instead" over the first `{@link}` (often the deprecated name).
  const useMatch = message.match(
    /use\s+(?:vanilla\s+)?(?:\{@link\s+([^}]+)\}|`?([A-Za-z0-9_./]+)`?)/i,
  );
  const replacement = (useMatch?.[1] || useMatch?.[2])?.trim();

  return {
    message,
    ...(sinceMatch?.[1] ? { since: sinceMatch[1] } : {}),
    ...(replacement ? { replacement } : {}),
  };
}

/**
 * @returns {Promise<Record<string, ComponentInfo>>}
 */
export async function generateComponents() {
  const docs = getDocs();
  /** @type {Record<string, ComponentInfo>} */
  const components = {};

  for (const doc of docs) {
    const name = docsShortName(doc.displayName);
    if (SKIP.has(name)) continue;
    if (isGlyphIcon(name)) continue;

    const api = resolveApi(doc.displayName);
    if (api !== 'vanilla' && api !== 'legacy') continue;

    const id = `${api}:${name}`;
    /** @type {ComponentInfo} */
    const component = {
      id,
      name,
      api,
      description:
        cleanDescription(doc.description) ||
        (api === 'vanilla'
          ? `${name} from @orfium/ictinus/vanilla (preferred modern API).`
          : `${name} component from @orfium/ictinus (legacy Emotion API). Prefer @orfium/ictinus/vanilla when a vanilla equivalent exists.`),
      import:
        api === 'vanilla'
          ? `import { ${name} } from '@orfium/ictinus/vanilla';`
          : `import { ${name} } from '@orfium/ictinus';`,
      category: inferCategory(name),
      props: Object.fromEntries(
        (doc.props ?? []).map((prop) => [prop.name, parsePropDefinition(prop)]),
      ),
    };

    if (doc.tags?.extends) component.extends = doc.tags.extends;
    if (doc.tags?.deprecated) {
      component.deprecated = parseDeprecatedTag(doc.tags.deprecated);
    }

    components[id] = component;
  }

  // Box props already land on components via BoxProps — tag overlaps as inherited.
  tagInheritedBoxProps(components);

  await attachStoryPatterns(components);

  return components;
}

/**
 * @returns {Promise<Record<string, IconInfo>>}
 */
export async function generateIcons() {
  const docs = getDocs();
  /** @type {Record<string, IconInfo>} */
  const icons = {};

  for (const doc of docs) {
    const name = docsShortName(doc.displayName);
    if (!isGlyphIcon(name)) continue;

    const api = resolveApi(doc.displayName) ?? 'vanilla';
    if (api !== 'vanilla') continue;

    const base = name.replace(/Icon$/, '');
    icons[`vanilla:${name}`] = {
      name,
      api: 'vanilla',
      category: 'icon',
      keywords: buildKeywords(base, 'icon'),
      import: `import { ${name} } from '@orfium/ictinus/vanilla';\n// <${name} />`,
      ...(doc.tags?.extends ? { extends: doc.tags.extends } : {}),
    };
  }

  return icons;
}

/**
 * @returns {Promise<Record<string, Guide>>}
 */
export async function generateGuides() {
  const docsRoot = join(repoRoot, 'apps/storybook/docs');
  /** @type {Record<string, Guide>} */
  const guides = {};

  for (const file of await walkMdx(docsRoot)) {
    const source = await readFile(file, 'utf8');
    const titleMatch =
      source.match(/title:\s*['"]([^'"]+)['"]/) ||
      source.match(/title=\{['"]([^'"]+)['"]\}/) ||
      source.match(/SectionHeader\s+title=\{?['"]([^'"]+)['"]\}?/);
    const rel = relative(docsRoot, file).replace(/\\/g, '/');
    const name = toKebabCase(
      rel.replace(/\.mdx$/i, '').replace(/\//g, '-').replace(/_/g, '-'),
    );
    const title =
      titleMatch?.[1] ||
      basename(file, '.mdx')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());

    guides[name] = {
      name,
      title,
      content: stripMdx(source),
    };
  }

  guides['vanilla-vs-legacy'] = {
    name: 'vanilla-vs-legacy',
    title: 'Vanilla vs Legacy API',
    content: `# Vanilla vs Legacy API

Ictinus currently ships two component APIs:

## Preferred: Vanilla (\`@orfium/ictinus/vanilla\`)

Modern components built with vanilla-extract, React Aria, and sprinkles.

\`\`\`tsx
import { Button, Box, Text, ThemeProvider } from '@orfium/ictinus/vanilla';

export function App() {
  return (
    <ThemeProvider>
      <Box p="4">
        <Button variant="primary">Save</Button>
        <Text>Hello</Text>
      </Box>
    </ThemeProvider>
  );
}
\`\`\`

## Legacy (\`@orfium/ictinus\`)

Older Emotion-based components. Still widely used; some are deprecated in favor of vanilla.

\`\`\`tsx
import { ThemeProvider, Button } from '@orfium/ictinus';

export function App() {
  return (
    <ThemeProvider>
      <Button type="primary">Save</Button>
    </ThemeProvider>
  );
}
\`\`\`

## Agent rules

1. Prefer **vanilla** when both exist (Button, Tooltip, Table, Menu, etc.).
2. Always wrap the app in the matching \`ThemeProvider\`.
3. Use \`get_component\` / \`search_components\` with the \`api\` field to disambiguate.
4. Design tokens live in \`@orfium/tokens\` and are re-exported from \`@orfium/ictinus\`.
5. Icons: \`import { SearchIcon } from '@orfium/ictinus/vanilla'\` — \`<SearchIcon />\` (extends IconPrimitive).
6. Vanilla components extend **Box** — layout/spacing/color via sprinkle props; query \`props\` on \`get_component\` only for component-specific API.
`,
  };

  guides['mcp-usage'] = {
    name: 'mcp-usage',
    title: 'Using the Ictinus MCP',
    content: `# Using the Ictinus MCP

## Tools

- \`search_components\` — find components by name/keyword/category
- \`get_component\` — description, import, example titles, starter (overview by default)
- \`get_patterns\` — Storybook usage examples
- \`get_tokens\` — design token maps
- \`search_icons\` — vanilla \`*Icon\` components (e.g. \`EditIcon\`)
- \`get_guides\` — setup and foundation docs

## Workflow

1. \`search_components\` to discover candidates
2. \`get_component\` for import + overview (\`propNames\`, \`extends\`)
3. \`get_component({ props: "size variant" })\` when you need prop types/defaults (\`props: "*"\` for all component-specific props)
4. \`get_patterns\` before composing multiple components
5. \`get_guides({ names: "getting-started-installation vanilla-vs-legacy" })\` for setup

## Styling (vanilla)

Most vanilla components **extend Box** and accept sprinkle layout props (\`p\`, \`m\`, \`gap\`, \`display\`, color tokens, …).
Component-specific props are listed under \`propNames\`; Box/sprinkle props are inherited — use \`get_component({ name: "Box", props: "…" })\` or \`get_tokens\` for styling.
`,
  };

  return guides;
}

/**
 * @returns {Promise<DesignTokens>}
 */
export async function generateTokens() {
  const tokensDir = join(repoRoot, 'packages/tokens/src/tokens');
  const semanticDir = join(
    repoRoot,
    'packages/tokens/src/theme/tokens/semantic/variables',
  );

  const [
    colorsSrc,
    spacingSrc,
    sizingSrc,
    borderRadiusSrc,
    borderWidthSrc,
    fontSizeSrc,
    fontWeightSrc,
    fontFamilySrc,
    letterSpacingSrc,
    lineHeightSrc,
    semanticColorsSrc,
    boxShadowSrc,
  ] = await Promise.all([
    readFile(join(tokensDir, 'color.ts'), 'utf8'),
    readFile(join(tokensDir, 'spacing.ts'), 'utf8'),
    readFile(join(tokensDir, 'sizing.ts'), 'utf8'),
    readFile(join(tokensDir, 'borderRadius.ts'), 'utf8'),
    readFile(join(tokensDir, 'borderWidth.ts'), 'utf8'),
    readFile(join(tokensDir, 'fontSize.ts'), 'utf8'),
    readFile(join(tokensDir, 'fontWeight.ts'), 'utf8'),
    readFile(join(tokensDir, 'fontFamily.ts'), 'utf8'),
    readFile(join(tokensDir, 'letterSpacing.ts'), 'utf8'),
    readFile(join(tokensDir, 'lineHeight.ts'), 'utf8'),
    readFile(join(semanticDir, 'colors.ts'), 'utf8'),
    readFile(join(semanticDir, 'boxShadow.ts'), 'utf8'),
  ]);

  return {
    colors: flattenTokens(extractExportedConstObject(colorsSrc, 'colors') ?? {}),
    spacing: flattenTokens(extractExportedConstObject(spacingSrc, 'spacing') ?? {}),
    sizing: flattenTokens(extractExportedConstObject(sizingSrc, 'sizing') ?? {}),
    borderRadius: flattenTokens(
      extractExportedConstObject(borderRadiusSrc, 'borderRadius') ?? {},
    ),
    borderWidth: flattenTokens(
      extractExportedConstObject(borderWidthSrc, 'borderWidth') ?? {},
    ),
    fontSize: flattenTokens(extractExportedConstObject(fontSizeSrc, 'fontSize') ?? {}),
    fontWeight: flattenTokens(
      extractExportedConstObject(fontWeightSrc, 'fontWeight') ?? {},
    ),
    fontFamily: flattenTokens(
      extractExportedConstObject(fontFamilySrc, 'fontFamily') ?? {},
    ),
    letterSpacing: flattenTokens(
      extractExportedConstObject(letterSpacingSrc, 'letterSpacing') ?? {},
    ),
    lineHeight: flattenTokens(
      extractExportedConstObject(lineHeightSrc, 'lineHeight') ?? {},
    ),
    semanticColors: flattenTokens(
      extractExportedConstObject(semanticColorsSrc, 'colors') ?? {},
    ),
    boxShadow: flattenTokens(
      extractExportedConstObject(boxShadowSrc, 'boxShadow') ?? {},
    ),
  };
}

/**
 * @param {Record<string, ComponentInfo>} components
 */
function tagInheritedBoxProps(components) {
  const box = components['vanilla:Box'];
  if (!box) return;

  for (const component of Object.values(components)) {
    if (component.name === 'Box') continue;
    if (component.extends !== 'Box' && component.extends !== 'IconPrimitive') continue;

    for (const [name, prop] of Object.entries(component.props)) {
      const boxProp = box.props[name];
      if (boxProp && boxProp.type === prop.type) prop.sprinkle = true;
    }
  }
}

function inferCategory(name) {
  for (const [re, category] of CATEGORY_BY_NAME) {
    if (re.test(name)) return [category];
  }
  return ['components'];
}

function cleanDescription(description) {
  if (!description) return '';
  const trimmed = description.trim();
  if (trimmed.includes('?:') || trimmed.includes('*/') || trimmed.length > 2000) {
    return '';
  }
  return trimmed;
}

function buildKeywords(name, category) {
  const parts = name
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .toLowerCase()
    .split(/[\s_-]+/)
    .filter(Boolean);
  return [...new Set([name.toLowerCase(), category.toLowerCase(), ...parts])];
}

/**
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
async function walkMdx(dir) {
  /** @type {string[]} */
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walkMdx(full)));
    else if (entry.isFile() && entry.name.endsWith('.mdx')) out.push(full);
  }
  return out;
}
