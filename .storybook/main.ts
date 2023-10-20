import '@babel/polyfill';

const fs = require('fs');
const path = require('path');

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
    '../docs/WELCOME.stories.@(md|mdx)',
    '../docs/GETTING_STARTED.stories.@(md|mdx)',
    '../docs/system/THEME.stories.@(md|mdx)',
    '../docs/system/COLOR-UTILITY.stories.@(md|mdx)',
    '../docs/guides/*.stories.@(md|mdx)',
    '../docs/tokens/TOKENS.stories.@(md|mdx)',
    '../docs/tokens/globals/*.stories.@(md|mdx)',
    '../docs/tokens/*.stories.@(md|mdx)',
    '../docs/system/*.stories.@(md|mdx)',
    '../src/**/*.stories.@(ts|tsx|mdx)',
  ],

  addons: [
    // '@storybook/addon-actions/register',
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

  // webpackFinal: async (config: any) => {
  //   // do mutation to the config
  //   // Edit config with care. Make sure to preserve the following config options:
  //   // * entry
  //   // * output
  //
  //   const rules = config.module.rules;
  //   const fileLoaderRule = rules.find((rule: any) => rule.test.test('.svg'));
  //   fileLoaderRule.exclude = /\.svg$/;
  //
  //   // config.module.rules[0].use[0].options.presets = [
  //   //   ...config.module.rules[0].use[0].options.presets,
  //   //   require.resolve('@emotion/babel-preset-css-prop'),
  //   // ];
  //
  //   rules.push({
  //     test: /\.(png|jpe?g|gif)$/i,
  //     use: [
  //       {
  //         loader: 'file-loader',
  //       },
  //     ],
  //   });
  //   rules.push({
  //     test: /\.svg$/,
  //     issuer: /\.tsx?$/,
  //     use: ['@svgr/webpack'],
  //   });
  //
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     issuer: /\.style.ts?$/,
  //     use: ['url-loader'],
  //   });
  //
  //   return config;
  // },
  features: {
    storyStoreV7: false,
  },
  env: (config: any) => ({
    ...config,
    STORYBOOK_ENV: 'true',
  }),

  docs: {
    autodocs: true,
  },

  core: {
    builder: '@storybook/builder-vite',
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
