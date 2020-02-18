import palette, { Palette } from './palette';
import typography, { Typography } from './typography';
import spacing, { Spacing } from './spacing';

export type Theme = {
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
  isDark: boolean;
};

const defaultTheme: Theme = {
  palette,
  typography,
  spacing,
  isDark: false,
};

/* Declare any static variables here e.g. $gray: #888; */
export default defaultTheme;
