const textButton = {
  padding: {
    value: '{spacing.4}',
    type: 'spacing',
    description: 'Sets button content padding',
  },
  paddingVertical: {
    value: '{spacing.4}',
    type: 'spacing',
    description: 'sets top and bottom padding in text buttons',
  },
  paddingHorizontal: {
    value: '{spacing.6}',
    type: 'spacing',
    description: 'sets both left and right padding in buttons',
  },
} as const;

export default textButton;
