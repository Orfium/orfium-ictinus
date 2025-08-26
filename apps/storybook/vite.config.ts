/// <reference types="vitest" />

import path from 'path';

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults, coverageConfigDefaults } from 'vitest/config';

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
  vanillaExtractPlugin(),
  dts({
    insertTypesEntry: true,
    exclude: ['__mocks__'],
  }),
];
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `REACT_APP_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  console.log(mode);

  return {
    publicDir: false,
    envPrefix: 'REACT_APP_',
    // Define these to keep compatibility with ictinus, toolbox and SSO
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.STORYBOOK_ENV': JSON.stringify(env.STORYBOOK_ENV),
      'process.env.PORT': JSON.stringify(env.PORT),
    },
    plugins,
    resolve: {
      alias: {
        '@orfium/ictinus': path.resolve(__dirname, '../../packages/ictinus/src'),
      },
    },
    build: {
      lib: {
        entry: {
          index: path.resolve(__dirname, 'src/index.ts'),
          'vanilla/index': path.resolve(__dirname, 'src/vanilla/index.ts'),
        },
        name: pkg.name,
      },
      minify: 'esbuild',
      outDir: 'dist',
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          'emotion-reset',
          ...regexesOfPackages([
            '__mocks__' as never,
            ...(Object.keys(pkg.dependencies || {}) as never),
            ...(('peerDependencies' in pkg
              ? Object.keys(pkg.peerDependencies as Record<string, string>[])
              : []) as never),
          ]),
        ],
      },
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
          '**/*.stories.tsx',
          '**/*.style.ts',
          '**/*.styles.ts',
          '**/styles.ts',
          '**/__mocks__/',
          'test',
        ],
      },
      exclude: [...configDefaults.exclude],
    },
  };
});
