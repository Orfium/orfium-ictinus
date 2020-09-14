// const projectConfig = require('../webpack.config.js');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const tsConfig = require('../tsconfig');
const pathToInlineSvg = path.resolve(__dirname, '../src/components/Icon/assets');

module.exports = {
  stories: [
    '../guides/INTRODUCTION.stories.@(md|mdx)',
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
  webpack: async config => {
    // do mutation to the config
    // Edit config with care. Make sure to preserve the following config options:
    // * entry
    // * output

    console.log(path.relative(__dirname, tsConfig.compilerOptions.baseUrl));
    config.module.rules.push({
      test: /\.svg$/,
      include: pathToInlineSvg,
      issuer: /\.tsx?$/,
      use: ['@svgr/webpack'],
    });

    // modify storybook's file-loader rule to avoid conflicts with svgr
    const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
    fileLoaderRule.exclude = pathToInlineSvg;

    config.module.rules.push({
      test: /\.svg$/,
      include: pathToInlineSvg,
      issuer: /\.style.ts?$/,
      use: ['url-loader'],
    });

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
