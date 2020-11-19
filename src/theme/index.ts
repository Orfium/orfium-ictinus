import { colorShades, flatColors, Palette } from './palette';
import { darkPaletteConfig, lightPaletteConfig, PaletteConfig } from './palette.config';
import typography, { Typography } from './typography';
import spacing, { Spacing } from './spacing';
import { enhancePaletteWithShades } from './utils';

export type ThemeConfig = {
  palette: PaletteConfig;
  typography: Typography;
  spacing: Spacing;
  isDark: boolean;
};

export type Theme = {
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
  isDark: boolean;
  getColor: (color: typeof flatColors[number], variant: typeof colorShades[number]) => string;
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
    isDark: false,
    getColor: (color, variant) => {
      if (!palette.flat[color][variant]) {
        throw new Error('No color found with that name');
      }

      return palette.flat[color][variant];
    },
  };
};

/* Declare any static variables here e.g. $gray: #888; */
export default defaultTheme;
