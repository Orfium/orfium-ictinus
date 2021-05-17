import '@babel/polyfill';

module.exports = {
  stories: [
    '../docs/guides/INTRODUCTION.stories.@(md|mdx)',
    '../docs/guides/GETTING_STARTED.stories.@(md|mdx)',
    '../docs/system/THEME.stories.@(md|mdx)',
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
  ],
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

    return config;
  },
};
