import { borderRadius } from '../tokens/borderRadius';
import { borderWidth } from '../tokens/borderWidth';
import { colors } from '../tokens/color';
import { fontFamily } from '../tokens/fontFamily';
import { fontSize } from '../tokens/fontSize';
import { fontWeight } from '../tokens/fontWeight';
import { letterSpacing } from '../tokens/letterSpacing';
import { lineHeight } from '../tokens/lineHeight';
import { sizing } from '../tokens/sizing';
import { spacing } from '../tokens/spacing';

export const tokens = {
  color: colors,
  font: fontFamily,
  spacing: {
    ...spacing,
    none: spacing[0],
    '2xs': spacing[2],
    xs: spacing[3],
    sm: spacing[4],
    md: spacing[5],
    lg: spacing[6],
    xl: spacing[7],
    '2xl': spacing[8],
    '3xl': spacing[9],
    '4xl': spacing[12],
  },
  sizing,
  'border-radius': borderRadius,
  'border-width': borderWidth,
  'font-size': fontSize,
  weight: fontWeight,
  'line-height': lineHeight,
  'letter-spacing': letterSpacing,
} as const;

// This acts as contract, alternatively we can map the tokens directly here
export const semantic = {
  color: {
    background: {
      default: colors.neutral[1],
      alt: colors.neutral[2],
      inverted: colors.neutral[6],
      invertedAlt: colors.neutral[5],
    },
    backdrop: {
      default: colors.transparent[5],
      alt: colors.transparent[1],
    },
    text: {
      default: {
        primary: colors.neutral[6],
        secondary: colors.neutral[4],
        active: colors.blue[7],
        error: colors.red[7],
        warning: colors.orange[7],
        success: colors.teal[7],
        visited: colors.purple[7],
      },
      inverted: {
        primary: colors.neutral[1],
        secondary: colors.neutral[3],
        active: colors.blue[4],
        error: colors.red[4],
        warning: colors.orange[4],
        success: colors.teal[4],
        visited: colors.purple[4],
      },
    },
    'border-color': {
      decorative: {
        transparent: colors.transparent[1],
        default: colors.transparent[5],
        inverted: colors.transparent[10],
      },
      interactive: {
        default: '',
        active: '',
        error: '',
        upsell: '',
        warning: '',
        success: '',
        focused: '',
      },
    },
    indicators: {
      brand: '',
      success: '',
      pending: '',
      warning: '',
      error: '',
      inactive: '',
    },
    palette: {
      error: {
        muted: '',
        base: '',
        contrast: '',
      },
      warning: {
        muted: '',
        base: '',
        contrast: '',
      },
      primary: {
        muted: colors.blue[5],
        base: colors.blue[6],
        contrast: colors.blue[7],
      },
      secondary: {
        muted: '',
        base: '',
        contrast: '',
      },
      success: {
        muted: '',
        base: '',
        contrast: '',
      },
      tertiary: {
        muted: '',
        base: '',
        contrast: '',
      },
      upsell: {
        muted: '',
        base: '',
        contrast: '',
      },
      'primary-alt': {
        muted: '',
        base: '',
        contrast: '',
      },
    },
  },
  'box-shadow': {
    '0': '',
    '1': '',
    '2': '',
    '3': '',
    '4': '',
    '5': '',
  },
} as const;
