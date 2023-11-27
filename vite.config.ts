/// <reference types="vitest" />

import path from 'path';

import { optimizeLodashImports } from '@optimize-lodash/rollup-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import type { UserConfig } from 'vite';
import type * as vite from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { coverageConfigDefaults, configDefaults } from 'vitest/config';

// @ts-ignore
import pkg from './package.json';

const regexesOfPackages = (externalPackages = []) =>
  externalPackages.map((packageName) => new RegExp(`^${packageName}(/.*)?`));

const plugins = [
  react({
    babel: {
      plugins: ['@emotion/babel-plugin'],
    },
  }),
  tsconfigPaths(),
  svgr(),
  dts({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    insertTypesEntry: true,
    exclude: ['__mocks__'],
  }),
  optimizeLodashImports() as vite.Plugin,
];
// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }): UserConfig => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `REACT_APP_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  console.log(mode);

  return {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    publicDir: false,
    envPrefix: 'REACT_APP_',
    // Define these to keep compatibility with ictinus, toolbox and SSO
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.STORYBOOK_ENV': JSON.stringify(env.STORYBOOK_ENV),
      'process.env.PORT': JSON.stringify(env.PORT),
    },
    plugins,
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: pkg.name,
        // the proper extensions will be added
        fileName: 'index',
      },
      minify: 'esbuild',
      outDir: 'dist',
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          'emotion-reset',
          /@emotion\/styled/,
          /@emotion\/react/,
          ...regexesOfPackages([
            '__mocks__',
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
