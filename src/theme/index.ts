import { get } from 'lodash';

import globals from './globals';
import overrides from './overrides';
import { getAAColor, getAAColorFromSwatches, getColor } from './palette';
import tokens from './tokens';
import { ColorScheme, TextColorTypes, Theme, ThemeConfig } from './types';

const defaultTheme = (theming: ColorScheme): Theme => {
  return {
    globals,
    colorScheme: theming,
    overrides,
    tokens: {
      ...get(tokens, theming, 'semantic'),
    },
    utils: {
      getColor: getColor(globals.oldColors),
      getAAColorFromSwatches: getAAColorFromSwatches(globals.oldColors),
      getAAColor: getAAColor(globals.oldColors),
    },
  };
};

export { TextColorTypes, Theme, ThemeConfig };
export default defaultTheme;
