import elevation from './elevation';
import overrides from './overrides';
import { getAAColor, getAAColorFromSwatches, getColor } from './palette';
import { darkPaletteConfig, lightPaletteConfig } from './palette.config';
import spacing from './spacing';
import { ColorScheme, TextColorTypes, Theme, ThemeConfig } from './types';
import typography from './typography';
import { enhancePaletteWithShades } from './utils';

const lightPalette = enhancePaletteWithShades(lightPaletteConfig);
const darkPalette = enhancePaletteWithShades(darkPaletteConfig);

const getLightColor = getColor(lightPalette);
const getDarkColor = getColor(darkPalette);

const getLightAAColorFromSwatches = getAAColorFromSwatches(lightPalette);
const getDarkAAColorFromSwatches = getAAColorFromSwatches(darkPalette);

const getLightAAColor = getAAColor(lightPalette);
const getDarkAAColor = getAAColor(darkPalette);

const defaultTheme = (theming: ColorScheme): Theme => {
  const lightThemeSelected = theming === 'light';
  const palette = lightThemeSelected ? lightPalette : darkPalette;
  const getColor = lightThemeSelected ? getLightColor : getDarkColor;
  const getAAColorFromSwatches = lightThemeSelected
    ? getLightAAColorFromSwatches
    : getDarkAAColorFromSwatches;
  const getAAColor = lightThemeSelected ? getLightAAColor : getDarkAAColor;

  return {
    palette,
    typography,
    spacing,
    elevation,
    colorScheme: theming,
    overrides,
    utils: {
      getColor,
      getAAColorFromSwatches,
      getAAColor,
    },
  };
};

export { TextColorTypes, Theme, ThemeConfig };
export default defaultTheme;
