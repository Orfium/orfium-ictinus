const state = {
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
  loading: {
    gradient: {
      value: '{colors.gradient.1}',
      type: 'color',
      description: 'Alt loading state gradient',
    },
  },
} as const;

export default state;
