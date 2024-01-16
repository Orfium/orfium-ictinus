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
    value: '{boxShadow.3}',
    type: 'boxShadow',
    description: 'Sets boxShadow for drawer container',
  },
} as const;

export default drawer;
