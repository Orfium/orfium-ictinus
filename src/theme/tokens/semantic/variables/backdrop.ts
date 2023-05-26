const backdrop = {
  transparent: {
    value: '{colors.neutral.transparent}',
    type: 'color',
    description: 'backdrop shade, transparent variant',
  },
  light: {
    value: 'rgba(255,255,255,0.75)',
    type: 'color',
    description: 'backdrop shade, light variant ($colors.neutral.light @ 0.75 opacity)',
  },
  dark: {
    value: 'rgba(2,9,24,0.75)',
    type: 'color',
    description: 'backdrop shade, dark variant  ($colors.blue.950 @ 0.75 opacity)',
  },
} as const;

export default backdrop;
