const borderColor = {
  decorative: {
    transparent: {
      value: 'rgba(0,0,0,0)',
      type: 'color',
    },
    light: {
      muted: {
        value: '{colors.lightPurple.150}',
        type: 'color',
      },
      contrast: {
        value: '{colors.lightPurple.350}',
        type: 'color',
      },
    },
    inverted: {
      muted: {
        value: '{colors.lightPurple.800}',
        type: 'color',
      },
      contrast: {
        value: '{colors.lightPurple.750}',
        type: 'color',
      },
    },
  },
  interactive: {
    inactive: {
      value: '{colors.blue.200}',
      type: 'color',
    },
    inactiveAlt: {
      value: '{colors.lightPurple.150}',
      type: 'color',
    },
    active: {
      value: '{colors.blue.500}',
      type: 'color',
    },
    activeAlt: {
      value: '{colors.lightPurple.350}',
      type: 'color',
    },
    focused: {
      value: '{colors.purple.500}',
      type: 'color',
    },
    error: {
      value: '{colors.red.300}',
      type: 'color',
    },
    success: {
      value: '{colors.teal.300}',
      type: 'color',
    },
    warning: {
      value: '{colors.orange.300}',
      type: 'color',
    },
  },
} as const;

export default borderColor;
