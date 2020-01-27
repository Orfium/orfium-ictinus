const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/welcome.stories.[tj](s|sx)', '../src/**/*.stories.[tj](s|sx)'],
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-knobs/register',
    'storybook-readme/register',
  ],
  webpackFinal: async (config, { configType }) => {
    // Edit config with care. Make sure to preserve the following config options:
    // * entry
    // * output

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.resolve(__dirname, '../src')],
      use: ['ts-loader', 'react-docgen-typescript-loader'],
    });

    if (Array.isArray(config.resolve.plugins)) {
      config.resolve.plugins.push(
        new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, '../tsconfig.json') })
      );
    } else {
      config.resolve.plugins = [
        new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, '../tsconfig.json') }),
      ];
    }

    config.resolve.extensions.push('.ts', '.tsx', '.js', '.md');

    return config;
  },
};
