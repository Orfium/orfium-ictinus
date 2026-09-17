/// <reference types="vitest" />

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { configDefaults, coverageConfigDefaults } from 'vitest/config';
import pkg from './package.json' with { type: 'json' };

const plugins = [
  vanillaExtractPlugin(),
  dts({
    insertTypesEntry: true,
  }),
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    publicDir: false,
    // Define these to keep compatibility with ictinus
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    resolve: {
      tsconfigPaths: true,
    },
    plugins,
    build: {
      lib: {
        entry: {
          index: path.resolve(import.meta.dirname, 'src/index.ts'),
        },
        name: pkg.name,
        cssFileName: 'vars',
      },
      outDir: 'dist',
    },
    test: {
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
