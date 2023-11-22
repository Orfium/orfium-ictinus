import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  // brandImage: logo,
  brandUrl: 'https://designlab.orfium.com',
  barSelectedColor: '#175BF5',
  brandTitle: 'Ictinus Design System',
  barTextColor: 'rgb(153, 153, 153)',
  colorPrimary: '#175BF5',
  colorSecondary: '#585C6D',
});

addons.setConfig({
  theme,
});
