// const projectConfig = require('../webpack.config.js');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const tsConfig = require('../tsconfig');

module.exports = {
  stories: [
    '../guides/INTRODUCTION.stories.(md|mdx)',
    '../guides/*.stories.(md|mdx)',
    '../src/**/*.stories.(ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-docs',
  ],
  webpackFinal: async config => {
    // do mutation to the config
    // Edit config with care. Make sure to preserve the following config options:
    // * entry
    // * output

    console.log(path.relative(__dirname, tsConfig.compilerOptions.baseUrl));

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.resolve(__dirname, '../src')],
      use: [
        'ts-loader',
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            // Provide the path to your tsconfig.json so that your stories can
            // display types from outside each individual story.
            tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
            shouldExtractLiteralValuesFromEnum: true,
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx', '.js', '.md', '.mdx');

    // resolve the src directory so that we can import directly from it
    // https://webpack.js.org/configuration/resolve/#resolvemodules
    // path.relative(__dirname, tsConfig.compilerOptions.baseUrl) === path.relative('...../ictinus/.storybook, './src')
    config.resolve.modules.push(path.relative(__dirname, tsConfig.compilerOptions.baseUrl));

    return config;
  },
};
