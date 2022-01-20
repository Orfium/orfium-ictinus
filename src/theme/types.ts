import { Elevation } from './elevation';
import { Overrides } from './overrides';
import { GetAAColor, GetAAColorFromSwatches, GetColor, Palette } from './palette';
import { PaletteConfig } from './palette.config';
import { Spacing } from './spacing';
import { Typography } from './typography';

export type TextColorTypes = 'primary' | 'secondary' | 'light';

export type ThemeConfig = {
  palette: PaletteConfig;
  typography: Typography;
  spacing: Spacing;
  elevation: Elevation;
  overrides: Overrides;
  isDark: boolean;
};

export type Theme = {
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
  elevation: Elevation;
  isDark: boolean;
  overrides: Overrides;
  utils: {
    getColor: GetColor;
    getAAColorFromSwatches: GetAAColorFromSwatches;
    getAAColor: GetAAColor;
  };
};
