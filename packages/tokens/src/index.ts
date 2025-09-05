// Export all base tokens (these export specific token values, not types)
export * from './tokens/borderRadius';
export * from './tokens/borderWidth';
export * from './tokens/color';
export * from './tokens/fontFamily';
export * from './tokens/fontSize';
export * from './tokens/fontWeight';
export * from './tokens/letterSpacing';
export * from './tokens/lineHeight';
export * from './tokens/sizing';
export * from './tokens/spacing';

// Export theme configuration and utilities
export * from './theme';
export { default as theme } from './theme';

// Export theme utilities
export * from './theme/utils';

// Export palette utilities and types
export * from './theme/palette';

// Export all dimension utilities and types
export * from './theme/dimension';
export * from './theme/dimension/borderRadius';
export * from './theme/dimension/borderWidth';
export * from './theme/dimension/minHeight';
export * from './theme/dimension/opacity';
export * from './theme/dimension/sizing';
export * from './theme/dimension/spacing';
export * from './theme/dimension/state';

// Export all globals and their types (these export different types with Key suffix)
export * from './theme/globals';
// Export the actual types with .get() methods (note: tokens/ exports different types)
export type { BorderRadius, BorderRadiusKey } from './theme/globals/borderRadius';
export * from './theme/globals/borderWidth';
export * from './theme/globals/colors';
export * from './theme/globals/elevation';
export * from './theme/globals/opacity';
export type { Sizing, SizingKey } from './theme/globals/sizing';
export type { Spacing, SpacingKey } from './theme/globals/spacing';
export * from './theme/globals/typography';

// Export default globals
export { default as globalColors } from './theme/globals/colors';

// Export theme states
export * from './theme/states';

// Export token utilities
export * from './theme/tokens/utils';

// Export all semantic tokens and types
export * from './theme/tokens/semantic';
export * from './theme/tokens/semantic/boxShadow';
export * from './theme/tokens/semantic/colors';
export * from './theme/tokens/semantic/disabledState';
export * from './theme/tokens/semantic/state';
export * from './theme/tokens/semantic/typography';

// Export semantic variables as defaults
export { default as semanticVariablesBoxShadow } from './theme/tokens/semantic/variables/boxShadow';
export { default as semanticVariablesColors } from './theme/tokens/semantic/variables/colors';
export { default as semanticVariablesTypography } from './theme/tokens/semantic/variables/typography';

// Export component token variables
export { default as avatar } from './theme/tokens/components/variables/avatar';
export { default as button } from './theme/tokens/components/variables/button';
export { default as controls } from './theme/tokens/components/variables/controls';
export { default as datePicker } from './theme/tokens/components/variables/datePicker';
export { default as field } from './theme/tokens/components/variables/field';
export { default as filter } from './theme/tokens/components/variables/filter';
export { default as link } from './theme/tokens/components/variables/link';
export { default as listItem } from './theme/tokens/components/variables/listItem';
export { default as progressIndicator } from './theme/tokens/components/variables/progressIndicator';
export { default as search } from './theme/tokens/components/variables/search';
export { default as tag } from './theme/tokens/components/variables/tag';

// Export theme utilities functions
export * from './utils/helpers';
export * from './utils/themeFunctions';
export * from './utils/types';

// Export CSS variables and tokens
export * from './css/tokens';
export { vars } from './css/vars.css';

// Export CSS utilities
export * from './css/atoms';
export * from './css/layers.css';
export * from './css/sprinkles.css';
export * from './css/utils';

// Re-export commonly used items
export { semantic as cssSemanticTokens, tokens } from './css/tokens';
export { default as semantic } from './theme/tokens/semantic';

// Export missing items
export type { PaletteConfig } from './theme/palette.config';

// Create dimensionVariables export for backward compatibility
import dimension from './theme/dimension';
import globals from './theme/globals';

// Export missing items
export { dimension, globals };

export const dimensionVariables = {
  opacity: dimension.opacity,
  sizing: dimension.sizing,
  spacing: dimension.spacing,
  state: dimension.state,
  borderWidth: dimension.borderWidth,
  borderRadius: dimension.borderRadius,
  minHeight: dimension.minHeight,
};
