const borderRadius = {
  '0': {
    value: '0 px',
    type: 'borderRadius',
    description: 'Corner radius = 0px',
  },
  '1': {
    value: '2px',
    type: 'borderRadius',
    description: 'Corner radius = 2px',
  },
  '2': {
    value: '4px',
    type: 'borderRadius',
    description: 'Corner radius = 4px',
  },
  '3': {
    value: '8px',
    type: 'borderRadius',
    description: 'Corner radius = 8px',
  },
  '4': {
    value: '16px',
    type: 'borderRadius',
    description: 'Corner radius = 16px',
  },
  '5': {
    value: '36px',
    type: 'borderRadius',
    description: 'Corner radius = 36px',
  },
  '6': {
    value: '48px',
    type: 'borderRadius',
    description: 'Corner radius = 48px',
  },
  '7': {
    value: '9999px',
    type: 'borderRadius',
    description: 'Corner radius = 100px used for circles and pill shaped elements',
  },
} as const;

export default borderRadius;
