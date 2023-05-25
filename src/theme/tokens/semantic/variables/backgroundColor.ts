const backgroundColor = {
  light: {
    value: '{colors.neutral.light}',
    type: 'color',
    description: 'light backgroundColor variant',
  },
  transparent: {
    value: '{colors.neutral.transparent}',
    type: 'color',
    description: 'transparent backgroundColor variant',
  },
  tintedLight: {
    value: '#f4f8ff',
    type: 'color',
    description: 'tinted backgroundColor, lighter variant. Use as backgroundColor in pages',
  },
  tintedDark: {
    value: '#e7eefe',
    type: 'color',
    description: 'tinted backgroundColor, darker variant',
  },
  inverted: {
    value: '{colors.lightPurple.850}',
    type: 'color',
    description:
      'inverted BackgroundColor variant, for use in dark sections of a light-themed page',
  },
  invertedDark: {
    value: '{colors.lightPurple.900}',
    type: 'color',
    description: 'invertedBackgroundColor dark variant',
  },
  invertedAlt: {
    value: '{colors.darkBlue.800}',
    type: 'color',
    description: 'invertedBackgroundColor alt variant',
  },
} as const;

export default backgroundColor;
