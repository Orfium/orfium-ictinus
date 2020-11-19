import { Palette } from './palette';
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
};

const defaultTheme = (theming: 'dark' | 'light'): Theme => ({
  palette:
    theming === 'light'
      ? enhancePaletteWithShades(lightPaletteConfig)
      : enhancePaletteWithShades(darkPaletteConfig),
  typography,
  spacing,
  isDark: false,
});

/* Declare any static variables here e.g. $gray: #888; */
export default defaultTheme;
