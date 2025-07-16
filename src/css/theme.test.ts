import { createGlobalTheme } from '@vanilla-extract/css';
import { darkSemanticColors, globalColors, lightSemanticColors } from '~/tokens/color';
import { space } from '~/tokens/space';
import { vars } from './vars.css';

const theme = {
  color: {
    ...globalColors,
    ...lightSemanticColors,
  },
  space,
};

const darkTheme = {
  ...globalColors,
  ...darkSemanticColors,
};

createGlobalTheme(':root', vars, { '@layer': 'ictinus-theme', ...theme });

createGlobalTheme(':root.dark', vars.color, {
  '@layer': 'ictinus-theme',
  ...darkTheme,
});
