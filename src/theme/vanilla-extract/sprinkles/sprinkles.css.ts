import { defineProperties } from '@vanilla-extract/sprinkles';
import { globalVars } from '../vars.css';

// Define responsive breakpoints
export const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
    largeDesktop: { '@media': 'screen and (min-width: 1440px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    // Display
    display: [
      'none',
      'block',
      'inline',
      'inline-block',
      'flex',
      'inline-flex',
      'grid',
      'inline-grid',
    ],

    // Flexbox
    flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
    justifyContent: [
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
    ],
    alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    alignSelf: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    flex: ['1', 'auto', 'initial', 'none'],
    flexGrow: [0, 1],
    flexShrink: [0, 1],

    // Grid
    gridTemplateColumns: {
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))',
    },
    gap: globalVars.globals.spacing,
    gridGap: globalVars.globals.spacing,

    // Spacing
    padding: globalVars.globals.spacing,
    paddingTop: globalVars.globals.spacing,
    paddingBottom: globalVars.globals.spacing,
    paddingLeft: globalVars.globals.spacing,
    paddingRight: globalVars.globals.spacing,
    margin: {
      ...globalVars.globals.spacing,
      auto: 'auto',
    },
    marginTop: {
      ...globalVars.globals.spacing,
      auto: 'auto',
    },
    marginBottom: {
      ...globalVars.globals.spacing,
      auto: 'auto',
    },
    marginLeft: {
      ...globalVars.globals.spacing,
      auto: 'auto',
    },
    marginRight: {
      ...globalVars.globals.spacing,
      auto: 'auto',
    },

    // Sizing
    width: {
      ...globalVars.globals.sizing,
      auto: 'auto',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    height: {
      ...globalVars.globals.sizing,
      auto: 'auto',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    minWidth: {
      ...globalVars.globals.sizing,
      auto: 'auto',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    minHeight: {
      ...globalVars.globals.sizing,
      auto: 'auto',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    maxWidth: {
      ...globalVars.globals.sizing,
      none: 'none',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
    maxHeight: {
      ...globalVars.globals.sizing,
      none: 'none',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },

    // Position
    position: ['static', 'relative', 'absolute', 'fixed', 'sticky'],
    top: globalVars.globals.spacing,
    bottom: globalVars.globals.spacing,
    left: globalVars.globals.spacing,
    right: globalVars.globals.spacing,
    zIndex: {
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
      auto: 'auto',
    },

    // Overflow
    overflow: ['visible', 'hidden', 'scroll', 'auto'],
    overflowX: ['visible', 'hidden', 'scroll', 'auto'],
    overflowY: ['visible', 'hidden', 'scroll', 'auto'],

    // Text
    textAlign: ['left', 'center', 'right', 'justify'],
    textTransform: ['none', 'uppercase', 'lowercase', 'capitalize'],
    textDecoration: ['none', 'underline', 'line-through'],
    whiteSpace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'],
    wordBreak: ['normal', 'break-all', 'break-word'],

    // Opacity
    opacity: globalVars.globals.opacity,
  },
  shorthands: {
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

// Define border properties
export const borderProperties = defineProperties({
  properties: {
    borderWidth: globalVars.globals.borderWidth,
    borderTopWidth: globalVars.globals.borderWidth,
    borderBottomWidth: globalVars.globals.borderWidth,
    borderLeftWidth: globalVars.globals.borderWidth,
    borderRightWidth: globalVars.globals.borderWidth,
    borderRadius: globalVars.globals.borderRadius,
    borderTopLeftRadius: globalVars.globals.borderRadius,
    borderTopRightRadius: globalVars.globals.borderRadius,
    borderBottomLeftRadius: globalVars.globals.borderRadius,
    borderBottomRightRadius: globalVars.globals.borderRadius,
    borderStyle: ['solid', 'dashed', 'dotted', 'none'],
  },
});

// Define typography properties
export const typographyProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      thin: '100',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    fontFamily: {
      primary: 'Roboto, sans-serif',
      mono: '"Roboto Mono", monospace',
    },
  },
});


