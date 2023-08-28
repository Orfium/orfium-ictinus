const menu = {
  backgroundColor: {
    value: '{sem.colors.backgroundColor.light}',
    type: 'color',
    description: 'Background color for menu container',
  },
  borderColor: {
    value: '{sem.colors.borderColor.decorative.muted}',
    type: 'color',
    description: 'Border color for menu container',
  },
  borderRadius: {
    value: '{borderRadius.2}',
    type: 'borderRadius',
    description: 'Applies to menu container',
  },
  boxShadow: {
    value: '{boxShadow.2}',
    type: 'boxShadow',
    description: 'Applies to menu container',
  },
  borderWidth: {
    value: '{borderWidth.1}',
    type: 'borderWidth',
    description: 'Sets borderWidth for menu',
  },
} as const;

export default menu;
