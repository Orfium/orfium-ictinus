const progressIndicator = {
  height: {
    progressBar: {
      value: '{sizing.1}',
      type: 'sizing',
      description: 'Sets fxed height for progress bar',
    },
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
  width: {
    progressBar: {
      value: '{sizing.21}',
      type: 'sizing',
      description: 'Sets minimium width for progress bar',
    },
  },
  sizing: {
    circular: {
      value: '{sizing.4}',
      type: 'sizing',
      description: 'Sets minimum size for circular progress indicator',
    },
  },
  borderWidth: {
    circular: {
      small: {
        value: '1.5px',
        type: 'borderWidth',
        description: 'Sets minimum border width for circular progress indicator',
      },
    },
  },
} as const;

export default progressIndicator;
