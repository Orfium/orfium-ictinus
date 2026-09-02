import { readdir, readFile, stat } from 'node:fs/promises';
import { dirname, join } from 'node:path';

/**
 * Discover vanilla public component exports from packages/ictinus/src/vanilla/index.ts
 * @param {string} ictinusSrc
 */
export async function parseVanillaExports(ictinusSrc) {
  const vanillaIndex = join(ictinusSrc, 'vanilla/index.ts');
  const source = await readFile(vanillaIndex, 'utf8');
  /** @type {Array<{ name: string, filePath: string }>} */
  const results = [];

  const starRe = /export\s+\*\s+from\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = starRe.exec(source)) !== null) {
    const resolved = join(dirname(vanillaIndex), m[1]);
    const entry = await resolveExisting(resolved);
    if (!entry) continue;

    const files = await collectTsFiles(entry);
    for (const file of files) {
      const names = await extractComponentExports(file);
      for (const name of names) {
        results.push({ name, filePath: file });
      }
    }
  }

  const seen = new Set();
  return results.filter((r) => {
    if (seen.has(r.name)) return false;
    seen.add(r.name);
    return true;
  });
}

async function resolveExisting(base) {
  for (const candidate of [
    base,
    `${base}.ts`,
    `${base}.tsx`,
    join(base, 'index.ts'),
    join(base, 'index.tsx'),
  ]) {
    try {
      await stat(candidate);
      return candidate;
    } catch {
      /* continue */
    }
  }
  return null;
}

async function collectTsFiles(entry) {
  const s = await stat(entry);
  if (s.isFile()) return [entry];

  /** @type {string[]} */
  const files = [];
  const entries = await readdir(entry, { withFileTypes: true });
  for (const e of entries) {
    if (
      e.isFile() &&
      /\.(ts|tsx)$/.test(e.name) &&
      !e.name.endsWith('.css.ts') &&
      !e.name.endsWith('.test.tsx') &&
      !e.name.endsWith('.test.ts')
    ) {
      files.push(join(entry, e.name));
    }
  }
  return files;
}

async function extractComponentExports(filePath) {
  const source = await readFile(filePath, 'utf8');
  const names = new Set();

  for (const re of [
    /export\s+(?:async\s+)?function\s+([A-Z]\w*)/g,
    /export\s+const\s+([A-Z]\w*)\s*=/g,
  ]) {
    let match;
    while ((match = re.exec(source)) !== null) {
      const name = match[1];
      if (shouldSkipExport(name)) continue;
      names.add(name);
    }
  }

  const braceRe = /export\s*\{([^}]+)\}/g;
  let bm;
  while ((bm = braceRe.exec(source)) !== null) {
    for (const part of bm[1].split(',')) {
      const cleaned = part.trim();
      if (!cleaned || cleaned.startsWith('type ')) continue;
      const name = cleaned.split(/\s+as\s+/).pop();
      if (name && /^[A-Z]/.test(name) && !shouldSkipExport(name)) names.add(name);
    }
  }

  return [...names];
}

function shouldSkipExport(name) {
  if (name.endsWith('Props')) return true;
  if (name.endsWith('Styles')) return true;
  if (name.endsWith('Variants')) return true;
  if (name.endsWith('Context')) return true;
  // Individual icon components — use search_icons / legacy <Icon name="…" />
  if (name.endsWith('Icon')) return true;
  if (name === 'ICONS' || name === 'IconPrimitive') return true;
  return false;
}
