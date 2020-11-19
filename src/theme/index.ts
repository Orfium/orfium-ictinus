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

export function getColor(
  color: typeof flatColors[number],
  variant: typeof colorShades[number]
): string;
export function getColor(
  color: typeof flatColors[number],
  variant: typeof colorShades[number],
  scope: 'flat'
): string;
export function getColor(color: Types, variant: typeof colorShades[number], scope: 'text'): string;
export function getColor(
  color: typeof flatColors[number] | Types,
  variant: typeof colorShades[number],
  scope: 'flat' | 'text' = 'flat'
) {
  if (!enhancePaletteWithShades(lightPaletteConfig)[scope][color][variant]) {
    throw new Error('No color found with that name');
  }

  return enhancePaletteWithShades(lightPaletteConfig)[scope][color][variant];
}

export type Theme = {
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
  isDark: boolean;
};

type Types = 'primary' | 'secondary' | 'light';

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
  };
};

/* Declare any static variables here e.g. $gray: #888; */
export default defaultTheme;
