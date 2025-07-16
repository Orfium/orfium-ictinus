import { createGlobalTheme } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { borderRadius } from '~/tokens/borderRadius';
import { colors } from '~/tokens/color';
import { sizing } from '~/tokens/sizing';
import { spacing } from '~/tokens/spacing';

import './global.css';

import { layers } from './layers.css';

import { vars } from './vars.css';

const theme = {
  color: {
    neutral: colors.neutral,
    blue: colors.blue,
    transparent: colors.transparent,
    teal: colors.teal,
    purple: colors.purple,
    orange: colors.orange,
    red: colors.red,
    background: {
      default: vars.color.neutral[1],
      alt: vars.color.neutral[2],
      inverted: vars.color.neutral[6],
      invertedAlt: vars.color.neutral[5],
    },
    text: {
      default: {
        primary: vars.color.neutral[6],
        secondary: vars.color.neutral[4],
        active: vars.color.blue[7],
        error: vars.color.red[7],
        warning: vars.color.orange[7],
        success: vars.color.teal[7],
        visited: vars.color.purple[7],
      },
      inverted: {
        primary: vars.color.neutral[1],
        secondary: vars.color.neutral[3],
        active: vars.color.blue[4],
        error: vars.color.red[4],
        warning: vars.color.orange[4],
        success: vars.color.teal[4],
        visited: vars.color.purple[4],
      },
    },
  },
  spacing: {
    ...spacing,
    none: vars.spacing[0],
    '2xs': vars.spacing[2],
    xs: vars.spacing[3],
    sm: vars.spacing[4],
    md: vars.spacing[5],
    lg: vars.spacing[6],
    xl: vars.spacing[7],
    '2xl': vars.spacing[8],
    '3xl': vars.spacing[9],
    '4xl': vars.spacing[12],
  },
  sizing,
  radii: borderRadius,
};

// const darkTheme = {
//   ...globalColors,
//   ...darkSemanticColors,
// };

createGlobalTheme(':root', vars, { '@layer': 'ictinus-theme', ...theme });

// createGlobalTheme(':root.dark', vars.color, {
//   '@layer': 'ictinus-theme',
//   ...darkTheme,
// });

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const breakpointNames = Object.keys(breakpoints) as Breakpoint[];

const colorTokens = {
  'neutral.1': vars.color.neutral['1'],
  'neutral.2': vars.color.neutral['2'],
  'neutral.3': vars.color.neutral['3'],
  'neutral.4': vars.color.neutral['4'],
  primary: vars.color.text.default.primary,
  secondary: vars.color.text.default.secondary,
  active: vars.color.text.default.active,
  error: vars.color.text.default.error,
  warning: vars.color.text.default.warning,
  success: vars.color.text.default.success,
  visited: vars.color.text.default.visited,
  'inverted.primary': vars.color.text.inverted.primary,
  'inverted.secondary': vars.color.text.inverted.secondary,
  'inverted.active': vars.color.text.inverted.active,
  'inverted.error': vars.color.text.inverted.error,
  'inverted.warning': vars.color.text.inverted.warning,
  'inverted.success': vars.color.text.inverted.success,
  'inverted.visited': vars.color.text.inverted.visited,
} as const;

const backgroundTokens = {
  default: vars.color.background.default,
  alt: vars.color.background.alt,
  inverted: vars.color.background.inverted,
  invertedAlt: vars.color.background.invertedAlt,
  transparent: 'transparent',
} as const;

const sprinkleProperties = defineProperties({
  '@layer': layers.utilities,
  defaultCondition: 'xs',
  conditions: {
    xs: {},
    sm: { '@media': `(min-width: ${breakpoints.sm}px)` },
    md: { '@media': `(min-width: ${breakpoints.md}px)` },
    lg: { '@media': `(min-width: ${breakpoints.lg}px)` },
    xl: { '@media': `(min-width: ${breakpoints.xl}px)` },
  },
  properties: {
    alignItems: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'] as const,
    alignSelf: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'] as const,
    justifyContent: [
      'flex-start',
      'center',
      'flex-end',
      'space-between',
      'space-around',
      'space-evenly',
      'unset',
    ] as const,
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'] as const,
    display: ['block', 'flex', 'grid', 'inline-block', 'none', 'contents'],
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexDirection: ['column', 'row', 'column-reverse', 'row-reverse'],
    position: ['absolute', 'fixed', 'relative', 'sticky'],
    gap: vars.spacing,
    gridGap: vars.spacing,
    margin: vars.spacing,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    marginTop: vars.spacing,
    padding: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    paddingTop: vars.spacing,
    color: colorTokens,
    backgroundColor: backgroundTokens,
  },
  shorthands: {
    bg: ['backgroundColor'],
    p: ['padding'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    py: ['paddingTop', 'paddingBottom'],
    m: ['margin'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    mx: ['marginLeft', 'marginRight'],
    my: ['marginTop', 'marginBottom'],
  },
});

export const sprinkles = createSprinkles(sprinkleProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];
