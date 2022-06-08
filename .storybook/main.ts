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
    '../docs/guides/INTRODUCTION.stories.@(md|mdx)',
    '../docs/guides/GETTING_STARTED.stories.@(md|mdx)',
    '../docs/system/THEME.stories.@(md|mdx)',
    '../docs/system/COLOR-UTILITY.stories.@(md|mdx)',
    '../docs/guides/*.stories.@(md|mdx)',
    '../docs/system/*.stories.@(md|mdx)',
    '../src/**/*.stories.@(ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource/register',
    '@storybook/addon-docs',
    'storybook-addon-pseudo-states',
    'storybook-addon-designs',
  ],
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config: any) => {
    // do mutation to the config
    // Edit config with care. Make sure to preserve the following config options:
    // * entry
    // * output

    const rules = config.module.rules;
    const fileLoaderRule = rules.find((rule: any) => rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules[0].use[0].options.presets = [
      ...config.module.rules[0].use[0].options.presets,
      require.resolve('@emotion/babel-preset-css-prop'),
    ];

    rules.push({
      test: /\.svg$/,
      issuer: /\.tsx?$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.style.ts?$/,
      use: ['url-loader'],
    });

    /**
     * this code here helps resolving the emotion react and emotion styled. Without this we are getting
     * an error of "Can't resolve '@emotion/styled/base'"
     * solution: https://github.com/storybookjs/storybook/issues/13277
     */
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': getPackageDir('@emotion/react'),
      '@emotion/styled': getPackageDir('@emotion/styled'),
    };

    return config;
  },
};
