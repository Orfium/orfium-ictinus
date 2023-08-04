import { BorderRadius } from './globals/borderRadius';
import { BorderWidth } from './globals/borderWidth';
import { BoxShadow } from './globals/boxShadow';
import { Colors } from './globals/colors';
import { Elevation } from './globals/elevation';
import { Opacity } from './globals/opacity';
import { Sizing } from './globals/sizing';
import { Spacing } from './globals/spacing';
import { Typography } from './globals/typography';
import { Overrides } from './overrides';
import { GetAAColor, GetAAColorFromSwatches, GetColor, Palette } from './palette';
import { PaletteConfig } from './palette.config';
import { SemanticBackDrop } from './tokens/semantic/backdrop';
import { SemanticBackgroundColor } from './tokens/semantic/backgroundColor';
import { SemanticBorderColor } from './tokens/semantic/borderColor';
import { SemanticColors } from './tokens/semantic/colors';
import { SemanticDisabledState } from './tokens/semantic/disabledState';
import { SemanticIcon } from './tokens/semantic/icon';
import { SemanticPalette } from './tokens/semantic/palette';
import { SemanticState } from './tokens/semantic/state';
import { SemanticTextColor } from './tokens/semantic/textColor';

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
  backdrop: SemanticBackDrop;
  backgroundColor: SemanticBackgroundColor;
  borderColor: SemanticBorderColor;
  palette: SemanticPalette;
  textColor: SemanticTextColor;

  colors: SemanticColors;
  disabledState: SemanticDisabledState;
  icon: SemanticIcon;
  state: SemanticState;
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
