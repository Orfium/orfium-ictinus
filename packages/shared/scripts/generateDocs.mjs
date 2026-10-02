import fg from 'fast-glob';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import docgen from 'react-docgen-typescript';
import ts from 'typescript';

import {
  LEGACY_PREFIX,
  VANILLA_PREFIX,
  docsShortName,
  resolveApi,
} from '../src/getDocs.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sharedRoot = path.resolve(__dirname, '..');
const ictinusRoot = path.resolve(sharedRoot, '../ictinus');
const srcRoot = path.resolve(ictinusRoot, 'src');

/**
 * @param {docgen.ComponentDoc[]} docs
 * @returns {Record<string, string>}
 */
function buildTypeExpansions(docs) {
  /** @type {Record<string, string>} */
  const expansions = {};

  for (const doc of docs) {
    const match = doc.displayName.match(
      /^@orfium\/ictinus\/(?:vanilla\/)?(\w+)Doc$/,
    );
    if (!match) continue;

    const typeName = match[1];
    const props = Object.entries(doc.props)
      .filter(
        ([, prop]) => prop.declarations?.length && prop.type.name !== 'undefined',
      )
      .map(([name, prop]) => {
        const type = prop.type.raw || prop.type.name || 'unknown';
        return `${name}${prop.required ? '' : '?'}: ${type}`;
      });

    if (props.length > 0) {
      expansions[typeName] = `{ ${props.join('; ')} }`;
    }
  }

  return expansions;
}

/**
 * @param {string} rawType
 * @param {Record<string, string>} expansions
 */
function expandTypeReferences(rawType, expansions) {
  let result = rawType;
  for (const [typeName, shape] of Object.entries(expansions)) {
    result = result.replaceAll(typeName, shape);
  }
  return result;
}

/**
 * Prefer explicit displayName prefix; else infer from export surfaces (+ path ties).
 *
 * @param {string} displayName
 * @param {string} filePath
 * @param {{ legacy: Set<string>, vanilla: Set<string> }} surfaces
 */
function normalizeDisplayName(displayName, filePath, surfaces) {
  if (resolveApi(displayName)) return displayName;

  const name = docsShortName(displayName);
  const inVanilla = surfaces.vanilla.has(name);
  const inLegacy = surfaces.legacy.has(name);

  if (inVanilla && inLegacy) {
    if (/[/\\]components[/\\]/.test(filePath)) return `${LEGACY_PREFIX}${name}`;
    return `${VANILLA_PREFIX}${name}`;
  }
  if (inVanilla) return `${VANILLA_PREFIX}${name}`;
  if (inLegacy) return `${LEGACY_PREFIX}${name}`;

  if (/[/\\]vanilla[/\\]/.test(filePath)) return `${VANILLA_PREFIX}${name}`;
  return `${LEGACY_PREFIX}${name}`;
}

function generateDocs() {
  const { legacy, vanilla } = getExportedComponentsFromSource();
  const parser = docgen.withCustomConfig(path.resolve(ictinusRoot, 'tsconfig.json'), {
    savePropValueAsString: true,
    shouldExtractValuesFromUnion: true,
    shouldRemoveUndefinedFromOptional: true,
    skipChildrenPropWithoutDoc: false,
  });

  const docs = parser.parse(
    fg.globSync(path.join(srcRoot, '**/{*.css.ts,*.tsx}'), {
      ignore: ['**/*.spec.*', '**/*.test.*'],
    }),
  );

  const typeExpansions = buildTypeExpansions(docs);

  const processed = docs
    .map(
      ({
        description,
        filePath,
        methods: _methods,
        props,
        tags,
        ...doc
      }) => {
        const filterProps = Object.fromEntries(
          Object.entries(props)
            .filter(([, prop]) =>
              prop.parent
                ? !(
                    (prop.parent.fileName.includes('@types/react') ||
                      prop.parent.fileName.endsWith('react/index.d.ts')) &&
                    prop.name !== 'children'
                  )
                : prop.type.name !== 'undefined',
            )
            .filter(([, prop]) => !(prop.type.name === 'never'))
            .map(
              ([
                name,
                { declarations: _declarations, defaultValue, description: propDescription, required, ...prop },
              ]) => {
                delete prop.parent;

                if (prop.type.raw) {
                  prop.type.raw = expandTypeReferences(prop.type.raw, typeExpansions);
                }

                const typeName = prop.type.raw || prop.type.name || 'unknown';

                return [
                  name,
                  {
                    name,
                    type: { name: typeName },
                    ...(defaultValue && { defaultValue }),
                    ...(propDescription && { description: propDescription }),
                    ...(required && { required }),
                  },
                ];
              },
            ),
        );

        const displayName = normalizeDisplayName(doc.displayName, filePath, {
          legacy,
          vanilla,
        });
        const api = resolveApi(displayName);

        return {
          ...doc,
          displayName,
          props: Object.values(filterProps).sort((a, b) => a.name.localeCompare(b.name)),
          tags: {
            ...(api ? { api } : undefined),
            ...('asChild' in filterProps && 'className' in filterProps
              ? { extends: 'Box' }
              : undefined),
            ...tags,
          },
          ...(description && { description }),
        };
      },
    )
    .filter((doc) => {
      const name = docsShortName(doc.displayName);
      const api = resolveApi(doc.displayName);
      if (api === 'vanilla') return vanilla.has(name);
      // Prefer vanilla when both exist.
      if (api === 'legacy') return !vanilla.has(name) && legacy.has(name);
      return false;
    });

  return collapseIconDocs(dedupeByDisplayName(processed));
}

/**
 * @param {Array<{ displayName: string, props: unknown[], tags: Record<string, string> }>} docs
 */
function collapseIconDocs(docs) {
  return docs.map((doc) => {
    const name = docsShortName(doc.displayName);
    if (!name.endsWith('Icon') || name === 'IconPrimitive') return doc;
    return {
      ...doc,
      props: [],
      tags: { ...doc.tags, extends: 'IconPrimitive' },
    };
  });
}

/** @param {Array<{ displayName: string }>} docs */
function dedupeByDisplayName(docs) {
  const seen = new Set();
  return docs.filter((doc) => {
    if (seen.has(doc.displayName)) return false;
    seen.add(doc.displayName);
    return true;
  });
}

/** @returns {{ legacy: Set<string>, vanilla: Set<string> }} */
function getExportedComponentsFromSource() {
  const pkg = JSON.parse(fs.readFileSync(path.join(ictinusRoot, 'package.json'), 'utf8'));

  const program = ts.createProgram(
    fg.globSync(path.join(srcRoot, '**/*.{ts,tsx}'), {
      ignore: ['**/*.spec.*', '**/*.test.*'],
    }),
    {
      allowJs: true,
      esModuleInterop: true,
      moduleResolution: ts.ModuleResolutionKind.Node10,
      target: ts.ScriptTarget.Latest,
    },
  );

  const typeChecker = program.getTypeChecker();
  /** @type {Set<string>} */
  const legacy = new Set();
  /** @type {Set<string>} */
  const vanilla = new Set();

  /** @type {Record<string, { set: Set<string>, entry: string }>} */
  const surfaces = {
    '.': { set: legacy, entry: path.join(srcRoot, 'index.ts') },
    './vanilla': { set: vanilla, entry: path.join(srcRoot, 'vanilla/index.ts') },
  };

  for (const exportKey of Object.keys(pkg.exports ?? {})) {
    const surface = surfaces[exportKey];
    if (!surface) continue;

    const sourceFile = program.getSourceFile(surface.entry);
    if (!sourceFile) continue;

    const moduleSymbol = typeChecker.getSymbolAtLocation(sourceFile);
    if (!moduleSymbol) continue;

    typeChecker.getExportsOfModule(moduleSymbol).forEach((exportSymbol) => {
      const name = exportSymbol.getName();
      if (/^[A-Z]/.test(name) && !name.endsWith('Props')) {
        surface.set.add(name);
      }
    });
  }

  return { legacy, vanilla };
}

const docs = generateDocs();
const outputPath = path.join(sharedRoot, 'data', 'docs.json');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(docs, null, 2)}\n`);
console.log(`Generated ${path.relative(sharedRoot, outputPath)} with ${docs.length} components`);
