import type { StorybookConfig } from '@storybook/react-vite';
import { fileURLToPath, resolve } from 'node:url';
import { dirname } from 'path';
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
};

export default config;
