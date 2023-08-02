const colors = {
  backgroundColor: {
    light: {
      value: '{colors.neutral.1}',
      type: 'color',
      description: 'light backgroundColor variant',
    },
    transparent: {
      value: '{colors.transparent.1}',
      type: 'color',
      description: 'transparent backgroundColor variant',
    },
    tinted: {
      value: '{colors.neutral.2}',
      type: 'color',
      description: 'tinted backgroundColor. Use as backgroundColor in pages',
    },
    inverted: {
      value: '{colors.neutral.4}',
      type: 'color',
      description: 'invertedBackgroundColor variant',
    },
  },
  backdrop: {
    transparent: {
      value: '{colors.transparent.1}',
      type: 'color',
      description: 'backdrop shade, transparent variant',
    },
    dark: {
      value: '{colors.transparent.5}',
      type: 'color',
      description: 'backdrop shade, dark variant',
    },
  },
  error: {
    lightest: {
      type: 'color',
      value: '{colors.red.1}',
    },
    light: {
      type: 'color',
      value: '{colors.red.2}',
    },
    main: {
      type: 'color',
      value: '{colors.red.3}',
    },
    dark: {
      type: 'color',
      value: '{colors.red.4}',
    },
    darkest: {
      type: 'color',
      value: '{colors.red.5}',
    },
  },
  warning: {
    lightest: {
      type: 'color',
      value: '{colors.orange.1}',
    },
    light: {
      type: 'color',
      value: '{colors.orange.2}',
    },
    main: {
      type: 'color',
      value: '{colors.orange.3}',
    },
    dark: {
      type: 'color',
      value: '{colors.orange.4}',
    },
    darkest: {
      type: 'color',
      value: '{colors.orange.5}',
    },
  },
  primary: {
    lightest: {
      type: 'color',
      value: '{colors.blue.1}',
    },
    light: {
      type: 'color',
      value: '{colors.blue.2}',
    },
    main: {
      type: 'color',
      value: '{colors.blue.3}',
    },
    dark: {
      type: 'color',
      value: '{colors.blue.4}',
    },
    darkest: {
      type: 'color',
      value: '{colors.blue.5}',
      description: 'Used to indicate active state',
    },
  },
  secondary: {
    lightest: {
      type: 'color',
      value: '{colors.tinted.1}',
    },
    light: {
      type: 'color',
      value: '{colors.tinted.2}',
    },
    main: {
      type: 'color',
      value: '{colors.tinted.3}',
    },
    dark: {
      type: 'color',
      value: '{colors.tinted.4}',
    },
    darkest: {
      type: 'color',
      value: '{colors.tinted.5}',
    },
  },
  inverted: {
    lightest: {
      type: 'color',
      value: '{colors.teal.1}',
    },
    light: {
      type: 'color',
      value: '{colors.teal.2}',
    },
    main: {
      type: 'color',
      value: '{colors.teal.3}',
    },
    dark: {
      type: 'color',
      value: '{colors.teal.4}',
    },
    darkest: {
      type: 'color',
      value: '{colors.teal.5}',
    },
  },
  tertiary: {
    lightest: {
      value: '{colors.transparent.1}',
      type: 'color',
    },
    light: {
      value: '{colors.transparent.2}',
      type: 'color',
    },
    main: {
      value: '{colors.transparent.3}',
      type: 'color',
    },
    dark: {
      type: 'color',
      value: '{colors.transparent.4}',
    },
    darkest: {
      type: 'color',
      value: '{colors.transparent.5}',
    },
  },
  upsell: {
    lightest: {
      value: '{colors.purple.1}',
      type: 'color',
    },
    light: {
      value: '{colors.purple.2}',
      type: 'color',
    },
    main: {
      value: '{colors.purple.3}',
      type: 'color',
    },
    dark: {
      type: 'color',
      value: '{colors.purple.4}',
    },
    darkest: {
      type: 'color',
      value: '{colors.purple.5}',
    },
  },
  textColor: {
    primary: {
      primary: {
        value: '{colors.neutral.4}',
        type: 'color',
        description: 'Sets color for primary text',
      },
      secondary: {
        value: '{colors.neutral.3}',
        type: 'color',
        description: 'Sets color for secondary text',
      },
      error: {
        value: '{colors.red.5}',
        type: 'color',
        description: 'Sets color for error text. AA compliant against white and error.lightest',
      },
      active: {
        value: '{colors.blue.4}',
        type: 'color',
        description: 'Sets color for active text',
      },
      visited: {
        value: '{colors.purple.5}',
        type: 'color',
        description: 'Sets color for visited text (link)',
      },
    },
    inverted: {
      visited: {
        value: '{colors.purple.2}',
        type: 'color',
        description: 'Sets color for visited text (link)',
      },
      primary: {
        value: '{colors.neutral.1}',
        type: 'color',
        description: 'Sets color for primary text',
      },
      secondary: {
        value: '{colors.blue.2}',
        type: 'color',
        description: 'Sets color for secondary text',
      },
      error: {
        value: '{colors.red.2}',
        type: 'color',
        description: 'Sets color for error text',
      },
      active: {
        value: '{colors.teal.3}',
        type: 'color',
        description: 'Sets color for active text',
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
      muted: {
        value: '{colors.tinted.3}',
        type: 'color',
        description: 'Default decorative borderColor',
      },
    },
    interactive: {
      default: {
        value: '{colors.blue.2}',
        type: 'color',
        description: 'Used in default component state',
      },
      active: {
        value: '{colors.blue.3}',
        type: 'color',
        description: 'Used in active component state',
      },
      error: {
        value: '{colors.red.3}',
        type: 'color',
        description: 'Used in error component state',
      },
      focused: {
        value: '{colors.purple.4}',
        type: 'color',
        description: 'Used in focused component state',
      },
    },
  },
} as const;

export default colors;
