const textDecoration = {
  link: {
    value: 'underline',
    type: 'textDecoration',
    description: 'underline that appears on link while hovering',
  },
  none: {
    value: 'none',
    type: 'textDecoration',
  },
} as const;

export default textDecoration;
