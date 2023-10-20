/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { coverageConfigDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `REACT_APP_` prefix.
  const env = loadEnv(mode, process.cwd(), 'REACT_APP_');
  console.log(mode);
  console.log(env);

  return {
    envPrefix: 'REACT_APP_',
    // Define these to keep compatibility with ictinus, toolbox and SSO
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
    },
    plugins: [
      react({
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      tsconfigPaths(),
      svgr(),
    ],
    build: {
      outDir: 'build',
    },
    test: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/testing/setup.ts',
      coverage: {
        provider: 'v8', // or 'istanbul'
        exclude: [
          ...coverageConfigDefaults.exclude,
          '**/page.tsx',
          '**/*.styles.ts',
          '**/styles.ts',
          '**/__mocks__/',
          'src/config/',
          'src/test/',
        ],
      },
    },
  };
});
