const borderRadius = {
  none: {
    value: '{borderRadius.0}',
    type: 'borderRadius',
  },
  sm: {
    value: '{borderRadius.1}',
    type: 'borderRadius',
  },
  md: {
    value: '{borderRadius.2}',
    type: 'borderRadius',
  },
  lg: {
    value: '{borderRadius.3}',
    type: 'borderRadius',
  },
  xl: {
    value: '{borderRadius.4}',
    type: 'borderRadius',
  },
  circle: {
    value: '{borderRadius.7}',
    type: 'borderRadius',
    description: 'Circular border radius (100%)',
  },
} as const;

export default borderRadius;
