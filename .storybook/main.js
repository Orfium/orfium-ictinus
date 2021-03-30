// const projectConfig = require('../webpack.config.js');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const tsConfig = require('../tsconfig');
const pathToInlineSvg = path.resolve(__dirname, '../src/components/Icon/assets');
const util = require('util');

module.exports = {
  stories: [
    '../guides/INTRODUCTION.stories.@(md|mdx)',
    '../guides/GETTING_STARTED.stories.@(md|mdx)',
    '../guides/*.stories.@(md|mdx)',
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
  ],
  webpackFinal: async config => {
    // do mutation to the config
    // Edit config with care. Make sure to preserve the following config options:
    // * entry
    // * output

    const rules = config.module.rules;
    const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;

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

    return config;
  },
};
