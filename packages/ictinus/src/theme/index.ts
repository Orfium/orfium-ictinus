// Import from @orfium/tokens package
import {
  BASE_SHADE,
  colorShades,
  dimension,
  flatColors,
  getAAColor,
  getAAColorFromSwatches,
  getColor,
  globals,
  neutralColors,
  paleColors,
  semantic,
} from '@orfium/tokens';

import overrides from './overrides';
import type { ColorScheme, SemanticTheme, TextColorTypes, Theme, ThemeConfig } from './types';

const defaultTheme = (theming: ColorScheme): Theme => {
  return {
    globals,
    colorScheme: theming,
    overrides,
    dimension,
    tokens: semantic as SemanticTheme,
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
