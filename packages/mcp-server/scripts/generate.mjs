import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { generateComponents } from './lib/components.mjs';
import { generateGuides } from './lib/guides.mjs';
import { generateIcons } from './lib/icons.mjs';
import { attachPatterns } from './lib/patterns.mjs';
import { generateTokens } from './lib/tokens.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageRoot = join(__dirname, '..');
const repoRoot = join(packageRoot, '..', '..');
const outPath = join(packageRoot, 'src', 'data.json');

async function main() {
  console.log('Generating Ictinus MCP metadata…');

  const [components, guides, icons, tokens] = await Promise.all([
    generateComponents(repoRoot),
    generateGuides(repoRoot),
    generateIcons(repoRoot),
    generateTokens(repoRoot),
  ]);

  await attachPatterns(repoRoot, components);

  const data = {
    generatedAt: new Date().toISOString(),
    components,
    guides,
    icons,
    tokens,
  };

  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');

  console.log(
    `Wrote ${outPath}\n` +
      `  components: ${Object.keys(components).length}\n` +
      `  guides: ${Object.keys(guides).length}\n` +
      `  icons: ${Object.keys(icons).length}\n` +
      `  token categories: ${Object.keys(tokens).length}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
