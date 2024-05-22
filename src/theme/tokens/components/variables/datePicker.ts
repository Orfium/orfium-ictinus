const datePicker = {
  dateSize: {
    value: '{sizing.9}',
    type: 'sizing',
    description: 'Sets fixed size for _block date ',
  },
  actionsContainer: {
    value: '{sizing.15}',
    type: 'sizing',
    description: 'Sets fixed height for date picker button container',
  },
  fieldWidth: {
    value: '{sizing.21}',
    type: 'sizing',
    description: 'Sets fixed width for date picker fields',
  },
} as const;

export default datePicker;
