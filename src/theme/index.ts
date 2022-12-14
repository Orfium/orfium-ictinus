import borderRadius from './borderRadius';
import borderWidth from './borderWidth';
import boxShadow from './boxShadow';
import elevation from './elevation';
import opacity from './opacity';
import overrides from './overrides';
import { getAAColor, getAAColorFromSwatches, getColor } from './palette';
import { darkPaletteConfig, lightPaletteConfig } from './palette.config';
import sizing from './sizing';
import spacing from './spacing';
import { ColorScheme, TextColorTypes, Theme, ThemeConfig } from './types';
import typography from './typography';
import { enhancePaletteWithShades } from './utils';

const defaultTheme = (theming: ColorScheme): Theme => {
  const palette =
    theming === 'light'
      ? enhancePaletteWithShades(lightPaletteConfig)
      : enhancePaletteWithShades(darkPaletteConfig);

  return {
    globals: {
      colors: palette,
      typography,
      spacing,
      elevation,
      borderRadius,
      borderWidth,
      boxShadow,
      opacity,
      sizing,
    },
    colorScheme: theming,
    overrides,
    utils: {
      getColor: getColor(palette),
      getAAColorFromSwatches: getAAColorFromSwatches(palette),
      getAAColor: getAAColor(palette),
    },
  };
};

export { TextColorTypes, Theme, ThemeConfig };
export default defaultTheme;
