import globals from './globals';
import overrides from './overrides';
import { getAAColor, getAAColorFromSwatches, getColor } from './palette';
import { ColorScheme, TextColorTypes, Theme, ThemeConfig } from './types';

const defaultTheme = (theming: ColorScheme): Theme => {
  return {
    globals,
    colorScheme: theming,
    overrides,
    utils: {
      getColor: getColor(globals.colors),
      getAAColorFromSwatches: getAAColorFromSwatches(globals.colors),
      getAAColor: getAAColor(globals.colors),
    },
  };
};

export { TextColorTypes, Theme, ThemeConfig };
export default defaultTheme;
