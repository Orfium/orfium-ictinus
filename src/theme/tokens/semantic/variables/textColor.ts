const textColor = {
  light: {
    primary: {
      value: '{colors.lightPurple.900}',
      type: 'color',
    },
    secondary: {
      value: '{colors.lightPurple.750}',
      type: 'color',
    },
    error: {
      value: '{colors.red.600}',
      type: 'color',
      description: 'AA compliant against white and pale red (error)',
    },
    success: {
      value: '{colors.teal.750}',
      type: 'color',
      description: 'AA compliant for small text on all backgrounds',
    },
    warning: {
      value: '{colors.orange.500}',
      type: 'color',
      description: 'Not AA compliant use for icons only',
    },
    active: {
      value: '{colors.blue.550}',
      type: 'color',
    },
    visited: {
      value: '{colors.purple.500}',
      type: 'color',
    },
  },
  inverted: {
    visited: {
      value: '{colors.purple.250}',
      type: 'color',
    },
    primary: {
      value: '{colors.neutral.light}',
      type: 'color',
    },
    secondary: {
      value: '{colors.blue.150}',
      type: 'color',
    },
    error: {
      value: '{colors.red.300}',
      type: 'color',
    },
    success: {
      value: '{colors.teal.350}',
      type: 'color',
    },
    warning: {
      value: '{colors.orange.350}',
      type: 'color',
      description: 'Not AA compliant use for icons only',
    },
    active: {
      value: '{colors.teal.500}',
      type: 'color',
    },
    activeAlt: {
      value: '{colors.blue.300}',
      type: 'color',
      description: 'Alternative color for inverted link',
    },
  },
} as const;

export default textColor;
