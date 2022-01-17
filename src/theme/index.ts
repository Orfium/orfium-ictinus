import elevation from './elevation';
import overrides from './overrides';
import { getAAColor, getAAColorFromSwatches, getColor } from './palette';
import { darkPaletteConfig, lightPaletteConfig } from './palette.config';
import spacing from './spacing';
import { TextColorTypes, Theme } from './types';
import typography from './typography';
import { enhancePaletteWithShades } from './utils';

const defaultTheme = (theming: 'dark' | 'light'): Theme => {
  const palette =
    theming === 'light'
      ? enhancePaletteWithShades(lightPaletteConfig)
      : enhancePaletteWithShades(darkPaletteConfig);

  return {
    palette,
    typography,
    spacing,
    elevation,
    isDark: false,
    overrides,
    utils: {
      getColor: getColor(palette),
      getAAColorFromSwatches: getAAColorFromSwatches(palette),
      getAAColor: getAAColor(palette),
    },
  };
};

export { TextColorTypes, Theme };
export default defaultTheme;
