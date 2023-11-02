/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { coverageConfigDefaults, configDefaults } from 'vitest/config';

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
    // resolve: {
    //   alias: {
    //     /**
    //      * Storybook (specifically the interactions addon) requires that we use their
    //      *   instrumented version of jest-expect. So our storybook does so. To make
    //      *   these interactions still work in vitest we have @storybook/jest aliased
    //      *   to resolve to vitest which, critically, exports { expect } as well.
    //      */
    //     '@storybook/jest': 'vitest',
    //   },
    // },
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
      setupFiles: './src/test/setup.ts',
      coverage: {
        provider: 'v8', // or 'istanbul'
        exclude: [
          ...coverageConfigDefaults.exclude,
          '**/*.styles.ts',
          '**/styles.ts',
          '**/__mocks__/',
          'src/config/',
          'src/test/',
        ],
      },
      exclude: [...configDefaults.exclude],
    },
  };
});
