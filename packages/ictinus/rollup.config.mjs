import json from '@rollup/plugin-json';
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
      vanillaExtractPlugin(),
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
