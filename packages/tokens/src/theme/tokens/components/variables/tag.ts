const tag = {
  normal: {
    height: {
      value: '{sizing.6}',
      type: 'sizing',
      description: 'sets fixed height for tag',
    },
  },
  small: {
    height: {
      value: '{sizing.5}',
      type: 'sizing',
      description: 'sets fixed height for small tag',
    },
  },
} as const;

export default tag;
