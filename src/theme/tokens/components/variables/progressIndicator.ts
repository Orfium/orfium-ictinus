const progressIndicator = {
  height: {
    linear: {
      value: '{sizing.1}',
      type: 'sizing',
      description: 'Sets fxed height for normal linear progress indicator',
    },
    linearBlock: {
      value: '{sizing.2}',
      type: 'sizing',
      description: 'Sets fxed height for normal linearBlock progress indicator',
    },
  },
  backgroundColor: {
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
  },
  borderRadius: {
    value: '{borderRadius.7}',
    type: 'borderRadius',
    description: 'Sets 100% borderRadius for progress indicator container',
  },
  borderRadiusBlock: {
    value: '{borderRadius.0}',
    type: 'borderRadius',
    description: 'Sets 100% borderRadius for block progress indicator container',
  },
  sizing: {
    circular: {
      value: '{sizing.4}',
      type: 'sizing',
      description: 'Sets fixed size for circular progress indicator',
    },
  },
  borderWidth: {
    circular: {
      value: '1.5px',
      type: 'borderWidth',
      description: 'Sets fixed border width for circular progress indicator',
    },
  },
} as const;

export default progressIndicator;
