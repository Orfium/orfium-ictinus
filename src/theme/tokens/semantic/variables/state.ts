const state = {
  hover: {
    '1': {
      value: '{sizing.7}',
      type: 'sizing',
      description: 'Sets extra small hover size',
    },
    '2': {
      value: '{sizing.8}',
      type: 'sizing',
      description: 'Sets small hover size',
    },
    '3': {
      value: '{sizing.9}',
      type: 'sizing',
      description: 'Sets medium hover size',
    },
    '4': {
      value: '{sizing.10}',
      type: 'sizing',
      description: 'Sets lage hover size',
    },
  },
  borderRadius: {
    hover: {
      value: '{borderRadius.7}',
      type: 'borderRadius',
      description: 'Sets border radius for circular hover shape',
    },
  },
  backgroundColor: {
    hover: {
      value: '{colors.transparent.2}',
      type: 'color',
      description: 'Sets transparent overlay for interactive icon on hover',
    },
  },
} as const;

export default state;
