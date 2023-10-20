const progressIndicator = {
  horizontalHeight: {
    value: '{sizing.1}',
    type: 'sizing',
    description: 'Sets fixed height for horizontal progress indicator',
  },
  track: {
    value: '{colors.blue.1}',
    type: 'color',
    description: 'Sets backgroundColor for progress indicator track',
  },
  active: {
    value: '{colors.blue.3}',
    type: 'color',
    description: 'Sets backgroundColor for active indicator',
  },
  error: {
    value: '{colors.red.4}',
    type: 'color',
    description: 'Sets backgroundColor for error indicator',
  },
  borderRadius: {
    value: '{borderRadius.7}',
    type: 'borderRadius',
    description: 'Sets 100% borderRadius for progress indicator container',
  },
} as const;

export default progressIndicator;
