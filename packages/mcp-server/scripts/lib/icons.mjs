import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

/**
 * Parse legacy AcceptedIconNames + vanilla `*Icon` component exports.
 * @param {string} repoRoot
 */
export async function generateIcons(repoRoot) {
  const legacy = await generateLegacyIcons(repoRoot);
  const vanilla = await generateVanillaIcons(repoRoot, legacy);

  /** @type {Record<string, any>} */
  const icons = {};
  for (const icon of Object.values(legacy)) {
    icons[`legacy:${icon.name}`] = icon;
  }
  for (const icon of Object.values(vanilla)) {
    icons[`vanilla:${icon.name}`] = icon;
  }
  return icons;
}

/**
 * @param {string} repoRoot
 */
async function generateLegacyIcons(repoRoot) {
  const typesPath = join(
    repoRoot,
    'packages/ictinus/src/components/Icon/Icon.types.ts',
  );
  const source = await readFile(typesPath, 'utf8');

  /** @type {Record<string, { name: string, api: string, category: string, keywords: string[], import: string }>} */
  const icons = {};

  const categoryRe =
    /export type (\w+Icons)\s*=\s*([\s\S]*?)(?=\nexport type |\n$)/g;
  let match;
  while ((match = categoryRe.exec(source)) !== null) {
    const categoryType = match[1];
    if (categoryType === 'AcceptedIconNames') continue;
    const category = categoryType.replace(/Icons$/, '');
    const body = match[2];
    const names = [...body.matchAll(/'\s*([^']+)\s*'/g)].map((m) => m[1]);
    for (const name of names) {
      icons[name] = {
        name,
        api: 'legacy',
        category,
        keywords: buildKeywords(name, category),
        import: `import Icon from '@orfium/ictinus';\n// <Icon name="${name}" />`,
      };
    }
  }

  return icons;
}

/**
 * @param {string} repoRoot
 * @param {Record<string, any>} legacyByName
 */
async function generateVanillaIcons(repoRoot, legacyByName) {
  const indexPath = join(repoRoot, 'packages/ictinus/src/icons/index.ts');
  const source = await readFile(indexPath, 'utf8');
  const exports = [...source.matchAll(/export\s+\*\s+from\s+['"]\.\/([^'"]+)['"]/g)].map(
    (m) => m[1],
  );

  /** @type {Record<string, any>} */
  const icons = {};

  for (const exportName of exports) {
    // Skip non-icon primitives
    if (!exportName.endsWith('Icon') || exportName === 'IconPrimitive') continue;

    const legacyName = toLegacyIconName(exportName);
    const legacy = legacyByName[legacyName];
    const category = legacy?.category ?? 'icon';

    icons[exportName] = {
      name: exportName,
      api: 'vanilla',
      category,
      keywords: buildKeywords(exportName.replace(/Icon$/, ''), category),
      import: `import { ${exportName} } from '@orfium/ictinus/vanilla';\n// <${exportName} />`,
    };
  }

  return icons;
}

/** `EditIcon` → `edit`, `ArrowDownIcon` → `arrowDown` */
function toLegacyIconName(exportName) {
  const base = exportName.replace(/Icon$/, '');
  return base.charAt(0).toLowerCase() + base.slice(1);
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
