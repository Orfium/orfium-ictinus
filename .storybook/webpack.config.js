const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({ config }) => {
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
};
