import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  generateComponents,
  generateGuides,
  generateIcons,
  generateTokens,
} from './generators.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, '..', 'src', 'data.json');

async function main() {
  console.log('Generating Ictinus MCP metadata…');

  const [components, guides, icons, tokens] = await Promise.all([
    generateComponents(),
    generateGuides(),
    generateIcons(),
    generateTokens(),
  ]);

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
