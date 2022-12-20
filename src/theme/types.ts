import { BorderRadius } from './globals/borderRadius';
import { BorderWidth } from './globals/borderWidth';
import { BoxShadow } from './globals/boxShadow';
import { Elevation } from './globals/elevation';
import { Opacity } from './globals/opacity';
import { Sizing } from './globals/sizing';
import { Spacing } from './globals/spacing';
import { Typography } from './globals/typography';
import { Overrides } from './overrides';
import { GetAAColor, GetAAColorFromSwatches, GetColor, Palette } from './palette';
import { PaletteConfig } from './palette.config';

export type TextColorTypes = 'primary' | 'secondary' | 'light';
export type ColorScheme = 'light' | 'dark';

export type ThemeConfig = {
  palette: PaletteConfig;
  typography: Typography;
  spacing: Spacing;
  elevation: Elevation;
  overrides: Overrides;
};

export type Theme = {
  globals: {
    colors: Palette;
    typography: Typography;
    spacing: Spacing;
    elevation: Elevation;
    borderRadius: BorderRadius;
    borderWidth: BorderWidth;
    boxShadow: BoxShadow;
    opacity: Opacity;
    sizing: Sizing;
  };
  colorScheme: ColorScheme;
  overrides: Overrides;
  utils: {
    getColor: GetColor;
    getAAColorFromSwatches: GetAAColorFromSwatches;
    getAAColor: GetAAColor;
  };
};
