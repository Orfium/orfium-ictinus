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
} as const;

export default progressIndicator;
