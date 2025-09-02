/// <reference types="vitest" />

import path from 'path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults, coverageConfigDefaults } from 'vitest/config';

// @ts-ignore
import pkg from './package.json';

const regexesOfPackages = (externalPackages = []) =>
  externalPackages.map((packageName) => new RegExp(`^${packageName}(/.*)?`));

const plugins = [
  tsconfigPaths({
    projects: ['./tsconfig.json', './tsconfig.node.json'],
  }),
  vanillaExtractPlugin({
    identifiers: 'debug',
  }),
  dts({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    insertTypesEntry: true,
  }),
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    publicDir: false,
    // Define these to keep compatibility with ictinus
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    plugins,
    build: {
      lib: {
        entry: {
          index: path.resolve(__dirname, 'src/index.ts'),
          'css/index': path.resolve(__dirname, 'src/css/index.ts'),
        },
        name: pkg.name,
        cssFileName: 'styles',
      },
      minify: 'esbuild',
      outDir: 'dist',
      rollupOptions: {
        external: [
          ...regexesOfPackages([
            ...Object.keys(pkg.dependencies || {}),
            ...Object.keys(pkg.peerDependencies || {}),
          ]),
        ],
      },
    },
    test: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      globals: true,
      environment: 'jsdom',
      coverage: {
        reporter: ['text', 'html', 'json', 'lcov'],
        provider: 'v8',
        include: ['src'],
        exclude: [
          ...coverageConfigDefaults.exclude,
          '**/*.style.ts',
          '**/*.styles.ts',
          '**/styles.ts',
        ],
      },
      exclude: [...configDefaults.exclude],
    },
  };
});


