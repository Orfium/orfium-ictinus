const drawer = {
  backgroundColor: {
    value: '{sem.colors.backgroundColor.default}',
    type: 'color',
    description: 'Sets backgroundColor for drawer container',
  },
  borderColor: {
    value: '{sem.colors.borderColor.decorative.default}',
    type: 'color',
    description: 'Sets borderColor for drawer container',
  },
  borderWidth: {
    value: '{borderWidth.1}',
    type: 'borderWidth',
    description: 'Sets borderWidth for drawer container',
  },
  boxShadow: {
    value: '{sem.boxShadow.3}',
    type: 'boxShadow',
    description: 'Sets boxShadow for drawer container',
  },
  backdropColor: {
    value: '{sem.colors.backdrop.default}',
    type: 'color',
    description: 'Sets color for content backdrop appearing behind drawer (if used)',
  },
  padding: {
    value: '{spacing.8}',
    type: 'spacing',
    description: 'Sets padding for drawer',
  },
} as const;

export default drawer;
