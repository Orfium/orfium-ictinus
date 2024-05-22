const listItem = {
  height: {
    value: '{sizing.13}',
    type: 'sizing',
    description: 'Sets fixed height for all list items',
  },
  heightCompact: {
    value: '{sizing.10}',
    type: 'sizing',
    description: 'Sets fixed height for _block pagination list item',
  },
} as const;

export default listItem;
