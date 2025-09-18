/// <reference types="vitest" />

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
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
  tsconfigPaths({
    projects: ['./tsconfig.json', './tsconfig.node.json'],
  }),
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
  console.log(mode, __dirname);

  return {
    publicDir: false,
    envPrefix: 'REACT_APP_',
    // Define these to keep compatibility with ictinus, toolbox and SSO
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.PORT': JSON.stringify(env.PORT),
    },
    plugins,
    build: {
      lib: {
        entry: {
          index: path.resolve(__dirname, 'src/index.ts'),
        },
        name: pkg.name,
      },
      minify: 'esbuild',
      outDir: 'dist',
      // This is required to ensure CSS is split and imported properly. Because we are using build.lib the default differs and is set to false instead of true.
      // https://vite.dev/config/build-options.html#build-csscodesplit
      cssCodeSplit: true,
      rollupOptions: {
        external: [
          'react',
          'react-dom',
          /@emotion\/styled/,
          /@emotion\/react/,
          ...regexesOfPackages([
            '__mocks__',
            ...Object.keys(pkg.dependencies || {}),
            ...Object.keys(pkg.peerDependencies || {}),
          ]),
        ],
        output: [
          {
            preserveModules: true,
            preserveModulesRoot: 'src',
          },
        ],
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
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
