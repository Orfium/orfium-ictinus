// const projectConfig = require('../webpack.config.js');
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const tsConfig = require('../tsconfig');
const pathToInlineSvg = path.resolve(__dirname, '../src/components/Icon/assets');
const util = require('util');

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
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource/register',
    '@storybook/addon-docs',
  ],
  webpackFinal: async config => {
    // do mutation to the config
    // Edit config with care. Make sure to preserve the following config options:
    // * entry
    // * output

    // console.log(path.relative(__dirname, tsConfig.compilerOptions.baseUrl));
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   include: pathToInlineSvg,
    //   issuer: /\.tsx?$/,
    //   use: ['@svgr/webpack'],
    // });

    // // modify storybook's file-loader rule to avoid conflicts with svgr
    // const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
    // fileLoaderRule.exclude = pathToInlineSvg;

    // config.module.rules = config.module.rules.map(rule => {
    //   if (
    //     String(rule.test) ===
    //     String(/\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/)
    //   ) {
    //     return {
    //       ...rule,
    //       test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
    //     };
    //   }
    //
    //   return rule;
    // });
    // use svgr for svg files
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   include: pathToInlineSvg,
    //   issuer: /\.style.ts?$/,
    //   use: ['svg-url-loader'],
    // });
    //
    // config.module.rules[0].use[0].options.plugins = [
    //   ...config.module.rules[0].use[0].options.plugins,
    //   [
    //     require.resolve('babel-plugin-named-asset-import'),
    //     {
    //       loaderMap: {
    //         svg: {
    //           ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
    //         },
    //       },
    //     },
    //   ],
    // ];

    // console.log({ rules: config.module });
    // console.log(util.inspect(config.module, false, null, true /* enable colors */));
    // debugger;

    // config.module.rules.push({
    //   test: /\.svg$/,
    //   include: pathToInlineSvg,
    //   // issuer: /\.style.ts?$/,
    //   use: ['svg-url-loader'],
    // });

    // config.module.rules.push({
    //   test: /\.(ts|tsx)$/,
    //   include: [path.resolve(__dirname, '../src')],
    //   use: [
    //     'ts-loader',
    //     {
    //       loader: require.resolve('react-docgen-typescript-loader'),
    //       options: {
    //         // Provide the path to your tsconfig.json so that your stories can
    //         // display types from outside each individual story.
    //         tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
    //         shouldExtractLiteralValuesFromEnum: true,
    //       },
    //     },
    //   ],
    // });

    // config.resolve.extensions.push('.ts', '.tsx', '.js', '.md', '.mdx');

    // resolve the src directory so that we can import directly from it
    // https://webpack.js.org/configuration/resolve/#resolvemodules
    // path.relative(__dirname, tsConfig.compilerOptions.baseUrl) === path.relative('...../ictinus/.storybook, './src')
    // config.resolve.modules.push(path.relative(__dirname, tsConfig.compilerOptions.baseUrl));

    return config;
  },
};
