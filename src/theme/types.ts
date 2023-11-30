import type { BorderRadius } from './globals/borderRadius';
import type { BorderWidth } from './globals/borderWidth';
import type { BoxShadow } from './globals/boxShadow';
import type { Colors } from './globals/colors';
import type { Elevation } from './globals/elevation';
import type { Opacity } from './globals/opacity';
import type { Sizing } from './globals/sizing';
import type { Spacing } from './globals/spacing';
import type { Typography } from './globals/typography';
import type { Overrides } from './overrides';
import type { GetAAColor, GetAAColorFromSwatches, GetColor, Palette } from './palette';
import type { PaletteConfig } from './palette.config';
import type { SemanticColors } from './tokens/semantic/colors';
import type { SemanticDisabledState } from './tokens/semantic/disabledState';
import type { SemanticIcon } from './tokens/semantic/icon';
import type { SemanticPalette } from './tokens/semantic/palette';
import type { SemanticState } from './tokens/semantic/state';
import type { SemanticTypography } from './tokens/semantic/typography';

export type TextColorTypes = 'primary' | 'secondary' | 'light';
export type ColorScheme = 'semantic' | 'dark';

export type ThemeConfig = {
  palette: PaletteConfig;
  typography: Typography;
  spacing: Spacing;
  elevation: Elevation;
  overrides: Overrides;
};

export type SemanticTheme = {
  /** @TODO remove palette when all components are revisited for v5 */
  palette: SemanticPalette;

  colors: SemanticColors;
  disabledState: SemanticDisabledState;
  icon: SemanticIcon;
  state: SemanticState;
  typography: SemanticTypography;
};

/** Will add more themes in the future (e.g.: DarkTheme) */
export type Tokens = SemanticTheme;

export type Theme = {
  globals: {
    colors: Colors;
    oldColors: Palette;
    typography: Typography;
    spacing: Spacing;
    elevation: Elevation;
    borderRadius: BorderRadius;
    borderWidth: BorderWidth;
    boxShadow: BoxShadow;
    opacity: Opacity;
    sizing: Sizing;
  };
  tokens: Tokens;
  colorScheme: ColorScheme;
  overrides: Overrides;
  utils: {
    getColor: GetColor;
    getAAColorFromSwatches: GetAAColorFromSwatches;
    getAAColor: GetAAColor;
  };
};
