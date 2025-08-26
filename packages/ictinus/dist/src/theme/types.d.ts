import { DimensionBorderRadius } from './dimension/borderRadius';
import { DimensionBorderWidth } from './dimension/borderWidth';
import { DimensionMinHeight } from './dimension/minHeight';
import { DimensionOpacity } from './dimension/opacity';
import { DimensionSizing } from './dimension/sizing';
import { DimensionSpacing } from './dimension/spacing';
import { DimensionState } from './dimension/state';
import { BorderRadius } from './globals/borderRadius';
import { BorderWidth } from './globals/borderWidth';
import { Colors } from './globals/colors';
import { Elevation } from './globals/elevation';
import { Opacity } from './globals/opacity';
import { Sizing } from './globals/sizing';
import { Spacing } from './globals/spacing';
import { Typography } from './globals/typography';
import { Overrides } from './overrides';
import { GetAAColor, GetAAColorFromSwatches, GetColor, Palette } from './palette';
import { PaletteConfig } from './palette.config';
import { SemanticBoxShadow } from './tokens/semantic/boxShadow';
import { SemanticColors } from './tokens/semantic/colors';
import { SemanticDisabledState } from './tokens/semantic/disabledState';
import { SemanticState } from './tokens/semantic/state';
import { SemanticTypography } from './tokens/semantic/typography';
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
