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
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-designs',
    '@storybook/addon-vitest',
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
      // Sanitize component names to avoid invalid JS identifiers
      // componentNameResolver: (exp, source) => {
      //   const name = exp.getName();

      //   // Handle default exports - use filename instead
      //   if (name === 'default') {
      //     const sourceFile = source.getSourceFile();
      //     // Use fileName property of SourceFile, which is a string
      //     const fileNameStr = sourceFile.fileName || '';
      //     const match = fileNameStr.match(/([^/\\]+)\.(tsx?|jsx?)$/);
      //     return match ? match[1] : 'Component';
      //   }

      //   return name;
      // },
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
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    return {
      ...config,
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
