import '@storybook/addon-docs/register';
import { addons } from '@storybook/addons';
// import '@storybook/addon-actions/register';
// import '@storybook/addon-links/register';
import { create } from '@storybook/theming';
// import logo from "./logo.png";

const theme = create({
  base: 'light',
  // brandImage: logo,
  brandUrl: 'https://designlab.orfium.com',
  barSelectedColor: '#175BF5',
  brandTitle: 'Ictinus Design System',
  barTextColor: 'rgb(153, 153, 153)',
});

addons.setConfig({
  theme,
  viewMode: 'docs',
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
    canvas: { title: 'Sandbox' },
  },
});
