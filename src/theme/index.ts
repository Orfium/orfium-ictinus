import { colorShades, flatColors, mainTypes, Palette } from './palette';
import { darkPaletteConfig, lightPaletteConfig, PaletteConfig } from './palette.config';
import typography, { Typography } from './typography';
import spacing, { Spacing } from './spacing';
import elevation, { Elevation } from './elevation';
import { enhancePaletteWithShades } from './utils';

type TextColorTypes = 'primary' | 'secondary' | 'light';

export type ThemeConfig = {
  palette: PaletteConfig;
  typography: Typography;
  spacing: Spacing;
  elevation: Elevation;
  isDark: boolean;
};

type GetColor = {
  (color: typeof flatColors[number], variant: typeof colorShades[number]): string;
  (color: typeof flatColors[number], variant: typeof colorShades[number], scope: 'flat'): string;
  (color: TextColorTypes, variant: typeof colorShades[number], scope: 'text'): string;
  (color: typeof mainTypes[number], variant: typeof colorShades[number], scope: 'normal'): string;
};

export type Theme = {
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
  elevation: Elevation;
  isDark: boolean;
  utils: {
    getColor: GetColor;
  };
};

export const getColor = (palette: Palette): GetColor => (
  color: typeof flatColors[number] | TextColorTypes | typeof mainTypes[number],
  variant: typeof colorShades[number],
  scope: 'flat' | 'text' | 'normal' = 'flat'
) => {
  const endColor =
    scope === 'normal' ? palette[color][variant] : palette?.[scope]?.[color]?.[variant];

  if (!endColor) {
    throw new Error('No color found with that name');
  }

  return endColor;
};

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
    utils: {
      getColor: getColor(palette),
    },
  };
};

/* Declare any static variables here e.g. $gray: #888; */
export default defaultTheme;
