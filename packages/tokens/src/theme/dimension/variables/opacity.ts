const opacity = {
  disabled: {
    value: '50%',
    type: 'opacity',
    description: "'Disabled' state",
  },
  enabled: {
    value: '100%',
    type: 'opacity',
    description: "'enabled' state",
  },
  hidden: {
    value: '0%',
    type: 'opacity',
    description: "'hidden' state",
  },
} as const;

export default opacity;
