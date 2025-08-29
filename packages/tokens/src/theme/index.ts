import { get } from 'lodash-es';

import dimension from './dimension';
import globals from './globals';
import overrides from './overrides';
import {
  BASE_SHADE,
  colorShades,
  flatColors,
  getAAColor,
  getAAColorFromSwatches,
  getColor,
  neutralColors,
  paleColors,
} from './palette';
import tokens from './tokens';
import type { ColorScheme, TextColorTypes, Theme, ThemeConfig } from './types';

const defaultTheme = (theming: ColorScheme): Theme => {
  return {
    globals,
    colorScheme: theming,
    overrides,
    dimension,
    tokens: {
      ...get(tokens, theming || 'semantic', tokens.semantic),
    },
    utils: {
      getColor: getColor(globals.oldColors),
      getAAColorFromSwatches: getAAColorFromSwatches(globals.oldColors),
      getAAColor: getAAColor(globals.oldColors),
    },
  };
};

export {
  BASE_SHADE,
  colorShades,
  flatColors,
  neutralColors,
  paleColors,
  TextColorTypes,
  Theme,
  ThemeConfig,
};
export default defaultTheme;
