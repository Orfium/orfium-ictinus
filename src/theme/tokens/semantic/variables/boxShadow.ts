const boxShadow = {
  '0': {
    value: {
      x: '0',
      y: '0',
      blur: '0',
      spread: '0',
      color: 'rgba(200,206,255,0.45)',
      type: 'dropShadow',
    },
    type: 'boxShadow',
    description: 'No shadow variant',
  },
  '1': {
    value: {
      x: '0',
      y: '2',
      blur: '4',
      spread: '0',
      color: 'rgba(200,206,255,0.45)',
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
      color: 'rgba(200,206,255,0.45)',
      type: 'dropShadow',
    },
    type: 'boxShadow',
  },
  '3': {
    value: {
      x: '0',
      y: '8',
      blur: '16',
      spread: '0',
      color: 'rgba(200,206,255,0.45)',
      type: 'dropShadow',
    },
    type: 'boxShadow',
  },
  '4': {
    value: {
      x: '0',
      y: '16',
      blur: '24',
      spread: '0',
      color: 'rgba(200,206,255,0.45)',
      type: 'dropShadow',
    },
    type: 'boxShadow',
  },
  '5': {
    value: {
      x: '0',
      y: '-2',
      blur: '4',
      spread: '0',
      color: 'rgba(200,206,255,0.45)',
      type: 'dropShadow',
    },
    type: 'boxShadow',
    description: 'Used for sticky/fixed components',
  },
} as const;

export default boxShadow;
