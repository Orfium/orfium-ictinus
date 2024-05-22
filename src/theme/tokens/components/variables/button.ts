const button = {
  compact: {
    size: {
      value: '{sizing.7}',
      type: 'sizing',
      description: "Sets size for iconButton ('compact' variant)",
    },
    padding: {
      value: '{spacing.0} {spacing.4} {spacing.0} {spacing.4}',
      type: 'spacing',
      description: "Sets horizontal/vertical padding for 'compact' textButton",
    },
  },
  normal: {
    size: {
      value: '{sizing.9}',
      type: 'sizing',
      description: 'Sets size for iconButtons',
    },
    padding: {
      value: '{spacing.0} {spacing.6} {spacing.0} {spacing.6}',
      type: 'spacing',
      description: "Sets horizontal/vertical padding for 'normal' textButton",
    },
  },
} as const;

export default button;
