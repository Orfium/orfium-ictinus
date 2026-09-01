/// <reference types="vitest" />

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';
import { configDefaults, coverageConfigDefaults } from 'vitest/config';
import pkg from './package.json' with { type: 'json' };

const regexesOfPackages = (externalPackages: string[] = []) =>
  externalPackages.map((packageName) => new RegExp(`^${packageName}(/.*)?`));

const plugins = [
  react({ jsxImportSource: '@emotion/react' }),
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
  console.log(mode, import.meta.dirname);

  return {
    publicDir: false,
    envPrefix: 'REACT_APP_',
    // Define these to keep compatibility with ictinus, toolbox and SSO
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.PORT': JSON.stringify(env.PORT),
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
      },
      outDir: 'dist',
      // This is required to ensure CSS is split and imported properly. Because we are using build.lib the default differs and is set to false instead of true.
      // https://vite.dev/config/build-options.html#build-csscodesplit
      cssCodeSplit: true,
      rolldownOptions: {
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
            // Vite 8 / Rolldown: ? from *.svg?react leaks into filenames under preserveModules
            // https://github.com/rolldown/rolldown/issues/8761
            entryFileNames: (chunk) => `${chunk.name.replaceAll('?', '_')}.js`,
          },
        ],
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
      coverage: {
        reporter: ['lcov'],
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
