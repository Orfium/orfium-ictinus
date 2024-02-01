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
  backgroundColor: {
    readOnly: {
      blue: {
        value: '{sem.colors.palette.primaryAlt.light}',
        type: 'color',
        description: 'Sets backgroundColor for tag variant',
      },
      neutral: {
        value: '{sem.colors.backgroundColor.default}',
        type: 'color',
        description: 'Sets backgroundColor for tag variant',
      },
      purple: {
        value: '{sem.colors.palette.upsell.light}',
        type: 'color',
        description: 'Sets backgroundColor for tag variant',
      },
      red: {
        value: '{sem.colors.palette.error.light}',
        type: 'color',
        description: 'Sets backgroundColor for tag variant',
      },
      teal: {
        value: '{sem.colors.palette.success.light}',
        type: 'color',
        description: 'Sets backgroundColor for tag variant',
      },
      code: {
        value: '{sem.colors.palette.secondary.dark}',
        type: 'color',
        description: 'Sets backgroundColor for code tag variant',
      },
      orange: {
        value: '{sem.colors.palette.warning.light}',
        type: 'color',
      },
    },
    interactive: {
      default: {
        value: '{sem.colors.palette.secondary.main}',
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
      value: '{sem.colors.textColor.default.active}',
      type: 'color',
      description: 'Sets textColor for tag',
    },
    code: {
      value: '{sem.colors.textColor.default.primary}',
      type: 'color',
      description: 'Sets textColor for code tag',
    },
    neutral: {
      value: '{sem.colors.textColor.default.active}',
      type: 'color',
      description: 'Sets textColor for tag',
    },
    purple: {
      value: '{sem.colors.textColor.default.visited}',
      type: 'color',
      description: 'Sets textColor for tag',
    },
    red: {
      value: '{sem.colors.textColor.default.error}',
      type: 'color',
      description: 'Sets textColor for tag',
    },
    teal: {
      value: '{sem.colors.textColor.default.success}',
      type: 'color',
      description: 'Sets textColor for tag',
    },
    orange: {
      value: '{sem.colors.textColor.default.warning}',
      type: 'color',
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
        value: '{sem.colors.palette.primaryAlt.dark}',
        type: 'color',
        description: 'Sets borderColor for white and blue read-only tag variants',
      },
      neutral: {
        value: '{sem.colors.palette.secondary.dark}',
        type: 'color',
        description: 'Sets borderColor for white and neutral read-only tag variants',
      },
      purple: {
        value: '{sem.colors.palette.upsell.dark}',
        type: 'color',
        description: 'Sets borderColor for tag variant',
      },
      red: {
        value: '{sem.colors.palette.error.dark}',
        type: 'color',
        description: 'Sets borderColor for tag variant',
      },
      teal: {
        value: '{sem.colors.palette.success.dark}',
        type: 'color',
        description: 'Sets borderColor for tag variant',
      },
      orange: {
        value: '{sem.colors.palette.warning.dark}',
        type: 'color',
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
  label: {
    default: {
      normal: {
        value: '{sem.typography.normal.label02}',
        type: 'typography',
        description: "Sets text for tag label ('normal' size)",
      },
      small: {
        value: '{sem.typography.normal.label03}',
        type: 'typography',
        description: "Sets text for tag label ('small' size)",
      },
    },
    code: {
      normal: {
        value: '{sem.typography.mono.body02}',
        type: 'typography',
        description: "Sets text for code tag label ('normal' size)",
      },
      small: {
        value: '{sem.typography.mono.body03}',
        type: 'typography',
        description: "Sets text for code tag label ('small' size)",
      },
    },
  },
  iconSize: {
    value: '{sem.icon.size.2}',
    type: 'sizing',
    description: 'Sets size for tag icon (if used)',
  },
} as const;

export default tag;
