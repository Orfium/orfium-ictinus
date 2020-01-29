import colors, { Colors } from './pallete';
import typography, { Typography } from './typography';
import spacing, { Spacing } from './spacing';

export type Theme = {
  colors: Colors;
  typography: Typography;
  spacing: Spacing;
};

const defaultTheme: Theme = {
  colors,
  typography,
  spacing,
};

/* Declare any static variables here e.g. $gray: #888; */
export default defaultTheme;
