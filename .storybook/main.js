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
    // console.dir(config, { depth: null }) || config;

    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      include: [path.resolve(__dirname, '../src')],
      use: [require.resolve('ts-loader'), require.resolve('react-docgen-typescript-loader')],
    });

    config.resolve.plugins = [
      new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, '../tsconfig.json') }),
    ];

    config.resolve.extensions.push('.ts', '.tsx', '.js', '.md');

    return config;
  },
};
