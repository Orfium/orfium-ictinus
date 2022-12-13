import { BorderRadius } from './borderRadius';
import { BorderWidth } from './borderWidth';
import { BoxShadow } from './boxShadow';
import { Elevation } from './elevation';
import { Opacity } from './opacity';
import { Overrides } from './overrides';
import { GetAAColor, GetAAColorFromSwatches, GetColor, Palette } from './palette';
import { PaletteConfig } from './palette.config';
import { Sizing } from './sizing';
import { Spacing } from './spacing';
import { Typography } from './typography';

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
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
  elevation: Elevation;
  colorScheme: ColorScheme;
  overrides: Overrides;
  borderRadius: BorderRadius;
  borderWidth: BorderWidth;
  boxShadow: BoxShadow;
  opacity: Opacity;
  sizing: Sizing;
  utils: {
    getColor: GetColor;
    getAAColorFromSwatches: GetAAColorFromSwatches;
    getAAColor: GetAAColor;
  };
};
