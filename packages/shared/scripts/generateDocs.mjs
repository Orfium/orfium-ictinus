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
  const surfaces = getExportedComponentsFromSource();
  const { legacy, vanilla } = surfaces;
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

  const withStubs = addMissingExportStubs(processed, surfaces);
  return collapseIconDocs(dedupeByDisplayName(withStubs));
}

/**
 * react-docgen-typescript skips some public components (zero-arg functions,
 * generic forwardRef casts). Emit minimal stubs so agents can still find them.
 *
 * @param {Array<{ displayName: string }>} docs
 * @param {{ legacy: Set<string>, vanilla: Set<string>, program: ts.Program, typeChecker: ts.TypeChecker }} surfaces
 */
function addMissingExportStubs(docs, { legacy, vanilla, program, typeChecker }) {
  const documented = new Set(
    docs.map((doc) => `${resolveApi(doc.displayName)}:${docsShortName(doc.displayName)}`),
  );

  /** @type {Array<{ displayName: string, props: [], tags: { api: string } }>} */
  const stubs = [];

  /** @type {Array<{ api: 'vanilla' | 'legacy', prefix: string, names: Set<string>, entry: string }>} */
  const entries = [
    {
      api: 'vanilla',
      prefix: VANILLA_PREFIX,
      names: vanilla,
      entry: path.join(srcRoot, 'vanilla/index.ts'),
    },
    {
      api: 'legacy',
      prefix: LEGACY_PREFIX,
      names: legacy,
      entry: path.join(srcRoot, 'index.ts'),
    },
  ];

  for (const { api, prefix, names, entry } of entries) {
    const sourceFile = program.getSourceFile(entry);
    if (!sourceFile) continue;

    const moduleSymbol = typeChecker.getSymbolAtLocation(sourceFile);
    if (!moduleSymbol) continue;

    /** @type {Map<string, ts.Symbol>} */
    const exportSymbols = new Map();
    for (const exportSymbol of typeChecker.getExportsOfModule(moduleSymbol)) {
      exportSymbols.set(exportSymbol.getName(), exportSymbol);
    }

    for (const name of names) {
      if (api === 'legacy' && vanilla.has(name)) continue;
      if (documented.has(`${api}:${name}`)) continue;

      const exportSymbol = exportSymbols.get(name);
      if (!exportSymbol || !isCallableComponentExport(exportSymbol, sourceFile, typeChecker)) {
        continue;
      }

      console.warn(
        `docgen missed ${api}:${name}; emitting minimal stub (props unknown)`,
      );
      stubs.push({
        displayName: `${prefix}${name}`,
        props: [],
        tags: { api },
      });
      documented.add(`${api}:${name}`);
    }
  }

  return stubs.length ? [...docs, ...stubs] : docs;
}

/**
 * @param {ts.Symbol} exportSymbol
 * @param {ts.SourceFile} sourceFile
 * @param {ts.TypeChecker} typeChecker
 */
function isCallableComponentExport(exportSymbol, sourceFile, typeChecker) {
  const resolved =
    exportSymbol.flags & ts.SymbolFlags.Alias
      ? typeChecker.getAliasedSymbol(exportSymbol)
      : exportSymbol;
  if (!(resolved.flags & ts.SymbolFlags.Value)) return false;

  const type = typeChecker.getTypeOfSymbolAtLocation(resolved, sourceFile);
  return type.getCallSignatures().length > 0;
}

/** Glyph icons are `FooIcon`; bare `Icon` is the named-icon component. */
const isGlyphIcon = (name) => /.+Icon$/.test(name);

/**
 * @param {Array<{ displayName: string, props: unknown[], tags: Record<string, string> }>} docs
 */
function collapseIconDocs(docs) {
  return docs.map((doc) => {
    const name = docsShortName(doc.displayName);
    if (!isGlyphIcon(name)) return doc;
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

/**
 * @returns {{
 *   legacy: Set<string>,
 *   vanilla: Set<string>,
 *   program: ts.Program,
 *   typeChecker: ts.TypeChecker,
 * }}
 */
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

  return { legacy, vanilla, program, typeChecker };
}

const docs = generateDocs();
const outputPath = path.join(sharedRoot, 'data', 'docs.json');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(docs, null, 2)}\n`);
console.log(`Generated ${path.relative(sharedRoot, outputPath)} with ${docs.length} components`);
