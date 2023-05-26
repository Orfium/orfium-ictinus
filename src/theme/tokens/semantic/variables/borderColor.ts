const borderColor = {
  decorative: {
    transparent: {
      value: 'rgba(0,0,0,0)',
      type: 'color',
      description: 'transparent borderColor variant',
    },
    muted: {
      value: '{colors.lightPurple.150}',
      type: 'color',
      description: 'Default decorative borderColor',
    },
    contrast: {
      value: '{colors.lightPurple.350}',
      type: 'color',
      description: 'decorative borderColor darker variant',
    },
    inverted: {
      value: '{colors.lightPurple.800}',
      type: 'color',
      description: 'Default decorative borderColor for inverted backgroundColor',
    },
    invertedContrast: {
      value: '{colors.lightPurple.750}',
      type: 'color',
      description: 'Alternative decorative borderColor for inverted backgroundColor',
    },
  },
  interactive: {
    inactive: {
      value: '{colors.blue.200}',
      type: 'color',
      description: 'Used in inactive components',
    },
    inactiveAlt: {
      value: '{colors.lightPurple.150}',
      type: 'color',
      description: 'inactive borderColor alt variant',
    },
    active: {
      value: '{colors.blue.500}',
      type: 'color',
      description: 'Used in active components',
    },
    activeAlt: {
      value: '{colors.lightPurple.350}',
      type: 'color',
      description: 'active borderColor alt variant',
    },
    focused: {
      value: '{colors.magenta.500}',
      type: 'color',
      description: 'Used in focused components',
    },
    error: {
      value: '{colors.red.300}',
      type: 'color',
      description: 'Used to indicate error in components',
    },
    success: {
      value: '{colors.teal.300}',
      type: 'color',
      description: 'Used to indicate success in components',
    },
    warning: {
      value: '{colors.orange.300}',
      type: 'color',
      description: 'Used to indicate warning in components',
    },
  },
} as const;

export default borderColor;
