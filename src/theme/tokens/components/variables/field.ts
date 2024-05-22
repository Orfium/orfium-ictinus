const field = {
  addOn: {
    height: {
      normal: {
        value: '{sizing.13}',
        type: 'sizing',
        description: 'Sets fixed height for _block addOn (normal variant)',
      },
      compact: {
        value: '{sizing.7}',
        type: 'sizing',
        description: 'Sets fixed height for _block addOn (compact variant)',
      },
    },
    padding: {
      normal: {
        value: '{spacing.0} {spacing.5} {spacing.0} {spacing.4}',
        type: 'spacing',
        description: "Sets horizontal/vertical padding for 'normal' field--addOn",
      },
      compact: {
        value: '{spacing.0} {spacing.4} {spacing.0} {spacing.3}',
        type: 'spacing',
        description: "Sets horizontal/vertical padding for 'compact' field--addOn",
      },
      textArea: {
        value: '{spacing.6} {spacing.5} {spacing.6} {spacing.5}',
        type: 'spacing',
        description: 'Sets horizontal/vertical padding for text area',
      },
    },
  },
  container: {
    normal: {
      value: '{sizing.13}',
      type: 'sizing',
      description: 'Sets fixed height for field content container',
    },
    compact: {
      value: '{sizing.7}',
      type: 'sizing',
      description: 'Sets fixed height for compact field content container',
    },
  },
  minWidth: {
    small: {
      normal: {
        value: '140px',
        type: 'sizing',
        description: "Sets 'small' minimum width for base field (normal size)",
      },
      compact: {
        value: '70px',
        type: 'sizing',
        description: "Sets 'small' minimum width for base field (compact size)",
      },
    },
    large: {
      normal: {
        value: '240px',
        type: 'sizing',
        description: "Sets 'large' minimum width for base field (normal size)",
      },
    },
    medium: {
      normal: {
        value: '160px',
        type: 'sizing',
        description: "Sets 'medium' minimum width for base field (normal size)",
      },
      compact: {
        value: '90px',
        type: 'sizing',
        description: "Sets 'medium' minimum width for base field (compact size)",
      },
    },
    extraLarge: {
      normal: {
        value: '260px',
        type: 'sizing',
        description: "Sets 'large' minimum width for base field (normal size)",
      },
    },
  },
  content: {
    padding: {
      value: '{spacing.0} {spacing.0} {spacing.0} {spacing.5}',
      type: 'spacing',
      description: 'Sets horizontal/vertical padding for field content',
    },
  },
} as const;

export default field;
