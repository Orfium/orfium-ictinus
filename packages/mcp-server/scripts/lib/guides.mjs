import { readdir, readFile } from 'node:fs/promises';
import { basename, join, relative } from 'node:path';

import { stripMdx, toKebabCase } from './parse.mjs';

/**
 * @param {string} repoRoot
 */
export async function generateGuides(repoRoot) {
  const docsRoot = join(repoRoot, 'apps/storybook/docs');
  /** @type {Record<string, { name: string, title: string, content: string }>} */
  const guides = {};

  const files = await walkMdx(docsRoot);
  for (const file of files) {
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

  // Hand-authored agent guide for dual API
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
5. Icons (legacy): \`<Icon name="search" />\` from \`@orfium/ictinus\`.
`,
  };

  guides['mcp-usage'] = {
    name: 'mcp-usage',
    title: 'Using the Ictinus MCP',
    content: `# Using the Ictinus MCP

## Tools

- \`search_components\` — find components by name/keyword/category
- \`get_component\` — description, import, **all prop definitions** (type/default), starter example
- \`get_patterns\` — Storybook usage examples
- \`get_tokens\` — design token maps
- \`search_icons\` — icon names for \`<Icon name="…" />\`
- \`get_guides\` — setup and foundation docs

## Workflow

1. \`search_components\` to discover candidates
2. \`get_component\` for import + **full props** (omit \`props\` unless filtering)
3. \`get_component({ props: "size variant" })\` only to narrow prop definitions
4. \`get_patterns\` before composing multiple components
5. \`get_guides({ names: "getting-started-installation vanilla-vs-legacy" })\` for setup
`,
  };

  return guides;
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
