const textButton = {
  normal: {
    padding: {
      value: '{spacing.4}',
      type: 'spacing',
      description: 'Sets content padding for textButton',
    },
    paddingVertical: {
      value: '{spacing.4}',
      type: 'spacing',
      description: 'Sets top and bottom padding for textButton',
    },
    paddingHorizontal: {
      value: '{spacing.6}',
      type: 'spacing',
      description: 'Sets left and right padding for textButton',
    },
  },
  compact: {
    paddingHorizontal: {
      value: '{spacing.4}',
      type: 'spacing',
      description: "Sets left and right padding for textButton ('compact' variant)",
    },
  },
} as const;

export default textButton;
