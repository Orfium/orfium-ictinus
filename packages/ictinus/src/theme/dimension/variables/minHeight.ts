const minHeight = {
  tableRow: {
    sm: {
      value: '{sizing.11}',
      type: 'sizing',
      description: 'Sets min.height for small table row (44px)',
    },
    md: {
      value: '{sizing.13}',
      type: 'sizing',
      description: 'Sets min. height for medium table row (52px)',
    },
    lg: {
      value: '{sizing.15}',
      type: 'sizing',
      description: 'Sets min. height for large table row (60px)',
    },
  },
} as const;

export default minHeight;
