import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { layers } from './layers.css';
import { vars } from './vars.css';

import './global.css';

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
  'palette.primary': vars.color.palette.primary.base,
} as const;

const borderTokens = {
  'decorative.default': vars.color['border-color'].decorative.default,
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
    display: [
      'block',
      'flex',
      'inline-flex',
      'inline-grid',
      'grid',
      'inline-block',
      'none',
      'contents',
    ] as const,
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    width: { ...vars.sizing, full: '100%' },
    height: { ...vars.sizing, full: '100%' },
    flexDirection: ['column', 'row', 'column-reverse', 'row-reverse'],
    position: ['absolute', 'fixed', 'relative', 'sticky'],
    borderWidth: vars['border-width'],
    borderColor: borderTokens,
    borderStyle: ['solid', 'dashed'],
    borderRadius: vars['border-radius'],
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
