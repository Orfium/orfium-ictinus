import type {
  BorderRadius,
  BorderWidth,
  Colors,
  DimensionBorderRadius,
  DimensionBorderWidth,
  DimensionMinHeight,
  DimensionOpacity,
  DimensionSizing,
  DimensionSpacing,
  DimensionState,
  Elevation,
  GetAAColor,
  GetAAColorFromSwatches,
  GetColor,
  Opacity,
  Palette,
  PaletteConfig,
  SemanticBoxShadow,
  SemanticColors,
  SemanticDisabledState,
  SemanticState,
  SemanticTypography,
  Sizing,
  Spacing,
  Typography,
} from '@orfium/tokens';

import type { Overrides } from './overrides';

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
  colors: SemanticColors;
  disabledState: SemanticDisabledState;
  state: SemanticState;
  typography: SemanticTypography;
  boxShadow: SemanticBoxShadow;
};

export type Dimension = {
  borderRadius: DimensionBorderRadius;
  borderWidth: DimensionBorderWidth;
  minHeight: DimensionMinHeight;
  opacity: DimensionOpacity;
  sizing: DimensionSizing;
  spacing: DimensionSpacing;
  state: DimensionState;
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
    opacity: Opacity;
    sizing: Sizing;
  };
  dimension: Dimension;
  tokens: Tokens;
  colorScheme: ColorScheme;
  overrides: Overrides;
  utils: {
    /**
     * @deprecated deprecated since v5.0.0. Use `theme.globals.colors.get('')` instead.
     */
    getColor: GetColor;
    /**
     * @deprecated deprecated since v5.0.0. Use `theme.globals.colors.get('')` instead.
     */
    getAAColorFromSwatches: GetAAColorFromSwatches;
    /**
     * @deprecated deprecated since v5.0.0. Use `theme.globals.colors.get('')` instead.
     */
    getAAColor: GetAAColor;
  };
};
