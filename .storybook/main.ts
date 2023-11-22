import fs from 'fs';
import path from 'path';

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
    '../docs/WELCOME.mdx',
    '../docs/GETTING_STARTED.mdx',
    '../docs/system/THEME.mdx',
    '../docs/system/COLOR-UTILITY.mdx',
    '../docs/guides/*.mdx',
    '../docs/tokens/TOKENS.mdx',
    '../docs/tokens/globals/*.mdx',
    '../docs/tokens/*.mdx',
    '../docs/system/*.mdx',
    '../src/**/*.@(mdx|stories.@(ts|tsx))',
  ],

  addons: [
    // '@storybook/addon-actions/register',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y', // '@storybook/addon-storysource/register',
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
};
