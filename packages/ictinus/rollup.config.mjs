import hash from '@emotion/hash';
import json from '@rollup/plugin-json';
import svgr from '@svgr/rollup';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import { readFileSync } from 'node:fs';
import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';

const env = process.env.NODE_ENV ?? 'development';
const pkg = JSON.parse(readFileSync('./package.json'));
const external = new RegExp(
  '^(?:' +
    Object.keys({
      ...pkg.dependencies,
      ...pkg.peerDependencies,
    }).join('|') +
    ')(?:/.+)?$'
);

const stripSvgQuery = {
  name: 'strip-svg-query',
  resolveId(source, importer) {
    if (source.endsWith('.svg?react')) {
      const clean = source.replace('?react', '');
      return this.resolve(clean, importer, { skipSelf: true });
    }
    return null;
  },
};

export default defineConfig([
  {
    external,
    input: './src/vanilla/index.ts',
    output: {
      dir: 'dist/vanilla',
      entryFileNames: (info) => {
        return info.name.endsWith('.css')
          ? `${info.name.replace(/\.css$/, '-css')}.js`
          : '[name].js';
      },
      format: 'es',
      preserveModules: true,
      preserveModulesRoot: 'src/vanilla',
    },
    plugins: [
      typescriptPaths({
        preserveExtensions: true,
      }),
      esbuild({
        define: {
          'process.env.NODE_ENV': JSON.stringify(env),
        },
        target: 'esnext',
      }),
      json(),
      stripSvgQuery,
      svgr(),
      vanillaExtractPlugin(
        env === 'production'
          ? {
              identifiers: (options) => normalizeIdentifier(hash(`${pkg.version}_${options.hash}`)),
            }
          : {}
      ),
    ],
  },
  {
    external,
    input: './src/vanilla/index.ts',
    output: {
      dir: 'dist/vanilla',
      format: 'es',
    },
    plugins: [
      typescriptPaths({
        preserveExtensions: true,
      }),
      dts({
        respectExternal: true,
        tsconfig: 'tsconfig.vanilla.json',
      }),
    ],
  },
]);

function normalizeIdentifier(identifier) {
  return identifier.match(/^[0-9]/) ? '_'.concat(identifier) : identifier;
}
