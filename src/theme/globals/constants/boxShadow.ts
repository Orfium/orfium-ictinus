const boxShadow = {
  '0': {
    value: {
      x: '0',
      y: '0',
      blur: '0',
      spread: '0',
      color: '#',
      type: 'innerShadow',
    },
    type: 'boxShadow',
  },
  '1': {
    value: {
      x: '0',
      y: '2',
      blur: '5',
      spread: '0',
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
      color: '#10306612',
      type: 'dropShadow',
      x: '0',
      y: '8',
      blur: '16',
      spread: '0',
    },
    type: 'boxShadow',
  },
  '4': {
    value: {
      color: '#10306612',
      type: 'dropShadow',
      x: '0',
      y: '16',
      blur: '24',
      spread: '0',
    },
    type: 'boxShadow',
  },
} as const;

export default boxShadow;
