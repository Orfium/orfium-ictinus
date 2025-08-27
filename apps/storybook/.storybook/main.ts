import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';
import remarkGfm from 'remark-gfm';
import { mergeConfig } from 'vite';
import turbosnap from 'vite-plugin-turbosnap';

module.exports = {
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
    'storybook-addon-pseudo-states',
    '@storybook/addon-designs',
    '@storybook/addon-vitest',
  ],

  staticDirs: ['../public'],

  env: (config: Record<string, unknown>) => ({
    ...config,
    STORYBOOK_ENV: 'true',
  }),

  docs: {
    inlineStories: true,
    defaultName: 'Overview',

    story: {
      canvas: { sourceState: 'shown' },
      source: { type: 'code' },
    },
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldExtractValuesFromUnion: true,
      compilerOptions: {
        baseUrl: path.resolve(__dirname, '../../../packages/ictinus/src'),
        paths: {
          '~/*': [path.resolve(__dirname, '../../../packages/ictinus/src/*')],
        },
        esModuleInterop: true,
      },
    },
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins:
        configType === 'PRODUCTION'
          ? [
              // https://github.com/chromaui/chromatic-cli/issues/904
              turbosnap({
                // This should be the base path of your storybook.  In monorepos, you may only need process.cwd().
                rootDir: config.root ?? process.cwd(),
              }),
            ]
          : [],
    });
  },
} as StorybookConfig;
