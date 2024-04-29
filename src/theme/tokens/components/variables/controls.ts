const controls = {
  switch: {
    height: {
      track: {
        value: '{sizing.2}',
        type: 'sizing',
        description: 'Sets the height of the track',
      },
    },
    width: {
      track: {
        value: '{sizing.9}',
        type: 'sizing',
        description: 'Sets the width of the track',
      },
    },
  },
} as const;

export default controls;
