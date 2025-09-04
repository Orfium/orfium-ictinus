const sizing = {
  icon: {
    xs: {
      value: '{sizing.3}',
      type: 'sizing',
      description: 'Sets extra small size for icon',
    },
    sm: {
      value: '{sizing.4}',
      type: 'sizing',
      description: 'Sets small size for icon',
    },
    md: {
      value: '{sizing.5}',
      type: 'sizing',
      description: 'Sets medium size for icon',
    },
    lg: {
      value: '{sizing.6}',
      type: 'sizing',
      description: 'Sets large size for icon',
    },
    xl: {
      value: '{sizing.9}',
      type: 'sizing',
      description: 'Sets extra large size for icon',
    },
  },
} as const;

export default sizing;
