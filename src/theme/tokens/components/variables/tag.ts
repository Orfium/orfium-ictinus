const tag = {
  normal: {
    paddingHorizontal: {
      value: '{spacing.4}',
      type: 'spacing',
      description: 'Sets left & right padding for normal tags',
    },
    paddingVertical: {
      value: '{spacing.3}',
      type: 'spacing',
      description: 'Sets top & bottom padding for normal tags',
    },
    height: {
      value: '{sizing.6}',
      type: 'sizing',
      description: 'sets fixed height for tag',
    },
  },
  paddingContent: {
    value: '{spacing.3}',
    type: 'spacing',
    description: 'Sets content padding for tags',
  },
  small: {
    paddingHorizontal: {
      value: '{spacing.3}',
      type: 'spacing',
      description: 'Sets left and right padding for small tags',
    },
    paddingVertical: {
      value: '{spacing.0}',
      type: 'spacing',
      description: 'Sets top and bottom padding for small tags',
    },
    height: {
      value: '{sizing.5}',
      type: 'sizing',
      description: 'sets fixed height for small tag',
    },
  },
  borderRadius: {
    normal: {
      value: '{borderRadius.2}',
      type: 'borderRadius',
      description: 'Sets border radius for normal sized tags',
    },
    small: {
      value: '{borderRadius.1}',
      type: 'borderRadius',
      description: 'Sets border radius for condensed tags',
    },
  },
  label: {
    normal: {
      value: '{sem.typography.normal.label02}',
      type: 'typography',
      description: 'Sets text for normal tag labels',
    },
    small: {
      value: '{sem.typography.normal.label03}',
      type: 'typography',
      description: 'Sets text for small tag labels',
    },
  },
  backgroundColor: {
    readOnly: {
      blue: {
        value: '{colors.blue.1}',
        type: 'color',
        description: 'Sets backgroundColor for tag variant',
      },
      neutral: {
        value: '{colors.tinted.1}',
        type: 'color',
        description: 'Sets backgroundColor for tag variant',
      },
      purple: {
        value: '{colors.purple.1}',
        type: 'color',
        description: 'Sets backgroundColor for tag variant',
      },
      red: {
        value: '{colors.red.1}',
        type: 'color',
        description: 'Sets backgroundColor for tag variant',
      },
      teal: {
        value: '{colors.teal.1}',
        type: 'color',
        description: 'Sets backgroundColor for tag variant',
      },
    },
    interactive: {
      default: {
        value: '{sem.colors.palette.secondary.lightest}',
        type: 'color',
        description: 'Sets default backgroundColor for interactive tag variant',
      },
      focused: {
        value: '{sem.colors.palette.secondary.light}',
        type: 'color',
        description: 'Sets focused backgroundColor for interactive tag variant',
      },
    },
  },
  textColor: {
    blue: {
      value: '{colors.blue.5}',
      type: 'color',
      description: 'Sets textColor for tag',
    },
    neutral: {
      value: '{colors.blue.5}',
      type: 'color',
      description: 'Sets textColor for tag',
    },
    purple: {
      value: '{colors.purple.5}',
      type: 'color',
      description: 'Sets textColor for tag',
    },
    red: {
      value: '{colors.red.5}',
      type: 'color',
      description: 'Sets textColor for tag',
    },
    teal: {
      value: '{colors.teal.5}',
      type: 'color',
      description: 'Sets textColor for tag',
    },
  },
  borderWidth: {
    value: '{borderWidth.1}',
    type: 'borderWidth',
    description: 'Sets border width for tags',
  },
  borderColor: {
    readOnly: {
      blue: {
        value: '{colors.blue.2}',
        type: 'color',
        description: 'Sets borderColor for white and blue read-only tag variants',
      },
      neutral: {
        value: '{colors.blue.2}',
        type: 'color',
        description: 'Sets borderColor for white and neutral read-only tag variants',
      },
      purple: {
        value: '{colors.purple.2}',
        type: 'color',
        description: 'Sets borderColor for tag variant',
      },
      red: {
        value: '{colors.red.2}',
        type: 'color',
        description: 'Sets borderColor for tag variant',
      },
      teal: {
        value: '{colors.teal.4}',
        type: 'color',
        description: 'Sets borderColor for tag variant',
      },
    },
    interactive: {
      default: {
        value: '{sem.colors.borderColor.interactive.default}',
        type: 'color',
        description: 'Sets default borderColor for tag variant',
      },
      focused: {
        value: '{sem.colors.borderColor.interactive.active}',
        type: 'color',
        description: 'Sets default borderColor for tag variant',
      },
    },
  },
} as const;

export default tag;
