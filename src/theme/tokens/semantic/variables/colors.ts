const colors = {
  backgroundColor: {
    default: {
      value: '{colors.neutral.1}',
      type: 'color',
      description: 'light backgroundColor variant',
    },
    transparent: {
      value: '{colors.transparent.1}',
      type: 'color',
      description: 'transparent backgroundColor variant',
    },
    alt: {
      value: '{colors.neutral.2}',
      type: 'color',
      description: 'tinted backgroundColor variant',
    },
    inverted: {
      value: '{colors.neutral.6}',
      type: 'color',
      description: 'invertedBackgroundColor default variant',
    },
    invertedAlt: {
      value: '{colors.neutral.5}',
      type: 'color',
      description: 'invertedBackgroundColor, alt variant',
    },
  },
  backdrop: {
    default: {
      value: '{colors.transparent.5}',
      type: 'color',
      description: 'backdrop shade, dark variant',
    },
  },
  palette: {
    error: {
      light: {
        type: 'color',
        value: '{colors.red.1}',
      },
      main: {
        type: 'color',
        value: '{colors.red.2}',
      },
      dark: {
        type: 'color',
        value: '{colors.red.3}',
      },
    },
    warning: {
      light: {
        type: 'color',
        value: '{colors.orange.1}',
      },
      main: {
        type: 'color',
        value: '{colors.orange.2}',
      },
      dark: {
        type: 'color',
        value: '{colors.orange.3}',
      },
    },
    primary: {
      light: {
        type: 'color',
        value: '{colors.blue.5}',
      },
      main: {
        type: 'color',
        value: '{colors.blue.6}',
      },
      dark: {
        type: 'color',
        value: '{colors.blue.7}',
      },
    },
    secondary: {
      light: {
        type: 'color',
        value: '{colors.transparent.2}',
      },
      main: {
        type: 'color',
        value: '{colors.transparent.3}',
      },
      dark: {
        type: 'color',
        value: '{colors.transparent.4}',
      },
    },
    success: {
      light: {
        type: 'color',
        value: '{colors.teal.1}',
      },
      main: {
        type: 'color',
        value: '{colors.teal.2}',
      },
      dark: {
        type: 'color',
        value: '{colors.teal.3}',
      },
    },
    tertiary: {
      light: {
        value: '{colors.transparent.2}',
        type: 'color',
      },
      main: {
        value: '{colors.transparent.1}',
        type: 'color',
      },
      dark: {
        value: '{colors.transparent.3}',
        type: 'color',
      },
    },
    upsell: {
      light: {
        value: '{colors.purple.1}',
        type: 'color',
      },
      main: {
        value: '{colors.purple.2}',
        type: 'color',
      },
      dark: {
        value: '{colors.purple.3}',
        type: 'color',
      },
    },
    primaryAlt: {
      light: {
        value: '{colors.blue.1}',
        type: 'color',
      },
      main: {
        value: '{colors.blue.2}',
        type: 'color',
      },
      dark: {
        value: '{colors.blue.3}',
        type: 'color',
      },
    },
  },
  textColor: {
    default: {
      primary: {
        value: '{colors.neutral.6}',
        type: 'color',
        description: 'Sets color for primary text',
      },
      secondary: {
        value: '{colors.neutral.4}',
        type: 'color',
        description: 'Sets color for secondary text',
      },
      error: {
        value: '{colors.red.7}',
        type: 'color',
        description: 'Sets color for error text',
      },
      active: {
        value: '{colors.blue.7}',
        type: 'color',
        description: 'Sets color for active text',
      },
      visited: {
        value: '{colors.purple.7}',
        type: 'color',
        description: 'Sets color for visited text (link)',
      },
      warning: {
        value: '{colors.orange.7}',
        type: 'color',
        description: 'Sets color for warning text',
      },
      success: {
        value: '{colors.teal.7}',
        type: 'color',
        description: 'Sets color for success text',
      },
    },
    inverted: {
      visited: {
        value: '{colors.purple.4}',
        type: 'color',
        description: 'Sets color for visited text (link)',
      },
      primary: {
        value: '{colors.neutral.1}',
        type: 'color',
        description: 'Sets color for inverted primary text',
      },
      secondary: {
        value: '{colors.neutral.3}',
        type: 'color',
        description: 'Sets color for inverted secondary text',
      },
      error: {
        value: '{colors.red.4}',
        type: 'color',
        description: 'Sets color for inverted error text',
      },
      active: {
        value: '{colors.blue.4}',
        type: 'color',
        description: 'Sets color for inverted active text',
      },
      warning: {
        value: '{colors.orange.4}',
        type: 'color',
      },
      success: {
        value: '{colors.teal.4}',
        type: 'color',
        description: 'Sets color for inverted success text',
      },
    },
  },
  borderColor: {
    decorative: {
      transparent: {
        value: '{colors.transparent.1}',
        type: 'color',
        description: 'transparent borderColor variant',
      },
      default: {
        value: '{colors.transparent.5}',
        type: 'color',
        description: 'Default decorative borderColor',
      },
      inverted: {
        value: '{colors.transparent.10}',
        type: 'color',
        description: 'Inverted decorative borderColor',
      },
    },
    interactive: {
      default: {
        value: '{colors.blue.2}',
        type: 'color',
        description: 'Used in default component state',
      },
      active: {
        value: '{colors.blue.5}',
        type: 'color',
        description: 'Used in active component state',
      },
      error: {
        value: '{colors.red.5}',
        type: 'color',
        description: 'Sets borderColor for error',
      },
      upsell: {
        value: '{colors.purple.5}',
        type: 'color',
        description: 'Sets borderColor for upsell',
      },
      warning: {
        value: '{colors.orange.5}',
        type: 'color',
        description: 'Sets borderColor for warning',
      },
      success: {
        value: '{colors.teal.5}',
        type: 'color',
        description: 'Sets borderColor for success',
      },
    },
  },
  indicators: {
    brand: {
      value: '{colors.blue.5}',
      type: 'color',
    },
    success: {
      value: '{colors.teal.5}',
      type: 'color',
    },
    pending: {
      value: '{colors.purple.4}',
      type: 'color',
    },
    warning: {
      value: '{colors.orange.4}',
      type: 'color',
    },
    error: {
      value: '{colors.red.5}',
      type: 'color',
    },
    inactive: {
      value: '{colors.neutral.3}',
      type: 'color',
    },
  },
} as const;

export default colors;
