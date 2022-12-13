const opacity = {
  '0': {
    value: '0',
    type: 'opacity',
  },
  '1': {
    value: '7%',
    type: 'opacity',
  },
  '2': {
    value: '14%',
    type: 'opacity',
  },
  '3': {
    value: '21%',
    type: 'opacity',
  },
  '4': {
    value: '50%',
    type: 'opacity',
    description: 'used in disabled state',
  },
  '5': {
    value: '75%',
    type: 'opacity',
    description: 'used in backdrop overlays',
  },
} as const;

export default opacity;
