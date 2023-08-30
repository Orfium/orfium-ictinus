const boxShadow = {
  '0': {
    value: {
      x: '0px',
      y: '0px',
      blur: '0px',
      spread: '0px',
      color: '#',
      type: 'innerShadow',
    },
    type: 'boxShadow',
  },
  '1': {
    value: {
      x: '0px',
      y: '2px',
      blur: '5px',
      spread: '0px',
      color: '#10306612',
      type: 'dropShadow',
    },
    type: 'boxShadow',
  },
  '2': {
    value: {
      x: '0',
      y: '4',
      blur: '8',
      spread: '0',
      color: '#10306612',
      type: 'dropShadow',
    },
    type: 'boxShadow',
  },
  '3': {
    value: {
      x: '0px',
      y: '8px',
      blur: '16px',
      spread: '0px',
      color: '#10306612',
      type: 'dropShadow',
    },
    type: 'boxShadow',
  },
  '4': {
    value: {
      x: '0px',
      y: '16px',
      blur: '24px',
      spread: '0px',
      color: '#10306612',
      type: 'dropShadow',
    },
    type: 'boxShadow',
  },
  '5': {
    value: {
      x: '0px',
      y: '-2px',
      blur: '5px',
      spread: '0px',
      color: '#10306612',
      type: 'dropShadow',
    },
    type: 'boxShadow',
    description: 'boxShadow used for sticky/fixed components (only token where y is negative)',
  },
} as const;

export default boxShadow;
