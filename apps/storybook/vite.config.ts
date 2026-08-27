/// <reference types="vitest" />

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react({ jsxImportSource: '@emotion/react' }), svgr(), vanillaExtractPlugin()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      '@orfium/ictinus': resolve(import.meta.dirname, '../../packages/ictinus/src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    restoreMocks: true,
    setupFiles: ['./vitest.setup.ts'],
    exclude: [...configDefaults.exclude],
  },
});
