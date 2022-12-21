const backdrop = {
  light: {
    value: 'rgba(255,255,255,0.75)',
    type: 'color',
    description: 'The shade overlay that appears behind a modal on a given screen',
  },
  dark: {
    value: 'rgba(2,9,24,0.75)',
    type: 'color',
    description: 'The shade overlay that appears behind a modal on a given screen',
  },
} as const;

export default backdrop;
