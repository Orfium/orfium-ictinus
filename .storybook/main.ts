import fs from 'fs';
import path from 'path';
import turbosnap from 'vite-plugin-turbosnap';
import { mergeConfig } from 'vite';

function getPackageDir(filepath: string) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`
      );
    }
    currDir = dir;
  }
}

module.exports = {
  stories: [
    '../docs/GettingStarted/**/*.mdx',
    '../docs/Foundations/**/*.mdx',
    '../docs/Utilities/**/*.mdx',
    '../src/**/*.@(mdx|stories.@(ts|tsx))',
  ],

  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    'storybook-addon-pseudo-states',
    '@storybook/addon-designs',
    '@storybook/addon-mdx-gfm',
  ],

  staticDirs: ['../public'],

  env: (config: any) => ({
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
    // also valid 'react-docgen-typescript' | false
    reactDocgen: 'react-docgen-typescript',
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
};
