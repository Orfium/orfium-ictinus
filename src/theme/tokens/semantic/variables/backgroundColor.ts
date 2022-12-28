const backgroundColor = {
  light: {
    value: '#ffffff',
    type: 'color',
    description: 'for use as background color in pages',
  },
  neutralLight: {
    value: '#f9fafc',
    type: 'color',
    description: 'for use as background color in pages',
  },
  neutralDark: {
    value: '#f3f5f8',
    type: 'color',
    description: 'for use as background color in pages',
  },
  tintedLight: {
    value: '#f4f8ff',
    type: 'color',
    description: 'for use as background color in pages',
  },
  tintedDark: {
    value: '#e7eefe',
    type: 'color',
    description: 'for use as background color in pages',
  },
  inverted: {
    value: '#32354c',
    type: 'color',
    description: 'for use as background color in dark sections on pages',
  },
  invertedDark: {
    value: '#212332',
    type: 'color',
    description: 'for use as a background color in dark sections on pages',
  },
  transparent: {
    value: 'rgba(0,0,0,0)',
    type: 'color',
  },
  invertedAlt: {
    value: '#1d1b5f',
    type: 'color',
  },
} as const;

export default backgroundColor;
