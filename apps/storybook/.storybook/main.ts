import type { StorybookConfig } from '@storybook/react-vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import remarkGfm from 'remark-gfm';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: [
    '../docs/GettingStarted/**/*.mdx',
    '../docs/Foundations/**/*.mdx',
    '../docs/Utilities/**/*.mdx',
    '../src/**/*.@(mdx|stories.@(ts|tsx))',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-a11y'),
    {
      name: getAbsolutePath('@storybook/addon-docs'),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    getAbsolutePath('@storybook/addon-designs'),
    getAbsolutePath('@storybook/addon-vitest'),
  ],
  staticDirs: ['../public'],
  env: (config) => ({
    ...config,
    STORYBOOK_ENV: 'true',
  }),
  docs: {
    defaultName: 'Overview',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: true,
      compilerOptions: {
        baseUrl: resolve(__dirname, '../../../packages/ictinus/src'),
        paths: {
          '~/*': [resolve(__dirname, '../../../packages/ictinus/src/*')],
          '@orfium/ictinus': [resolve(__dirname, '../../../packages/ictinus/src')],
          '@orfium/ictinus/*': [resolve(__dirname, '../../../packages/ictinus/src/*')],
        },
        esModuleInterop: true,
      },
    },
  },
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  async viteFinal(config) {
    return {
      ...config,
      build: {
        ...config.build,
        rollupOptions: {
          ...config.build?.rollupOptions,
          output: {
            ...config.build?.rollupOptions?.output,
            manualChunks(id) {
              // Make ictinus a single chunk to avoid circular dependencies
              if (id.includes('packages/ictinus/src')) {
                return 'ictinus';
              }
            },
          },
        },
      },
      server: {
        ...config.server,
        // If the dev server starts serving requests before optimization
        // completes, it causes intermittent ESM/CJS loading errors, which locally
        // shows up as an infinite loading spinner in the web browser, and an
        // error in the browser console about missing exports.
        // Disabling pre-transform ensures the server waits for optimization to
        // complete before processing requests.
        preTransformRequests: false,
      },
    };
  },
};

export default config;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
