const boxShadow = {
  '0': {
    value: {
      x: '0px',
      y: '0px',
      blur: '0px',
      spread: '0px',
      color: 'rgba(200,206,255,0.45)',
      type: 'innerShadow',
    },
    type: 'boxShadow',
  },
  '1': {
    value: {
      x: '0px',
      y: '2px',
      blur: '4px',
      spread: '0px',
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
      x: '0px',
      y: '8px',
      blur: '16px',
      spread: '0px',
      color: 'rgba(200,206,255,0.45)',
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
      color: 'rgba(200,206,255,0.45)',
      type: 'dropShadow',
    },
    type: 'boxShadow',
  },
  '5': {
    value: {
      x: '0px',
      y: '-2px',
      blur: '4px',
      spread: '0px',
      color: 'rgba(200,206,255,0.45)',
      type: 'dropShadow',
    },
    type: 'boxShadow',
    description: 'used for sticky/fixed components',
  },
} as const;

export default boxShadow;
