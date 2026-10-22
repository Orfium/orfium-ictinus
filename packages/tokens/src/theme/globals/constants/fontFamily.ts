const fontFamily = {
  roboto: {
    value: 'Roboto, system-ui, sans-serif',
    type: 'fontFamilies',
  },
  robotoMono: {
    value: 'Roboto Mono, ui-monospace, monospace',
    type: 'fontFamilies',
    description: 'alternative font family used for numerical table cells',
  },
} as const;

export default fontFamily;
