const borderWidth = {
  default: {
    value: '{borderWidth.1}',
    type: 'borderWidth',
    description: "Sets 'default' border width for components",
  },
  active: {
    value: '{borderWidth.2}',
    type: 'borderWidth',
    description: "Sets 'active' border width for components ",
  },
  focused: {
    value: '{borderWidth.3}',
    type: 'borderWidth',
    description: 'Sets focused container borderWidth for component',
  },
  innerFocused: {
    value: '{borderWidth.2}',
    type: 'borderWidth',
    description: 'Alternative borderWidth for nested focused elements',
  },
} as const;

export default borderWidth;
