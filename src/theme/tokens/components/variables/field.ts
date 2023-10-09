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
    iconColor: {
      value: '{sem.colors.textColor.default.secondary}',
      type: 'color',
      description: 'Sets color for _block addOn icon',
    },
    padding: {
      normal: {
        right: {
          value: '{spacing.5}',
          type: 'spacing',
          description: 'Sets right padding for _block addOn (normal variant)',
        },
        left: {
          value: '{spacing.4}',
          type: 'spacing',
          description: 'Sets left padding for _block addOn (normal variant)',
        },
      },
      compact: {
        right: {
          value: '{spacing.4}',
          type: 'spacing',
          description: 'Sets right padding for _block addOn (compact variant)',
        },
        left: {
          value: '{spacing.3}',
          type: 'spacing',
          description: 'Sets right padding for _block addOn (compact variant)',
        },
      },
    },
  },
  stepper: {
    backgroundColor: {
      default: {
        value: '{sem.colors.palette.tertiary.lightest}',
        type: 'color',
        description: 'Sets backgroundColor for _block increment (default state)',
      },
      focused: {
        value: '{sem.colors.palette.tertiary.light}',
        type: 'color',
        description: 'Sets backgroundColor for _block increment (focused state)',
      },
    },
  },
  hintPadding: {
    value: '{spacing.4}',
    type: 'spacing',
    description: 'sets vertical padding between an input field container and its hint (if used)',
  },
  normal: {
    input: {
      value: '{sem.typography.normal.body02}',
      type: 'typography',
      description: 'Sets text for field prefix/input/suffix/placeholder',
    },
    label: {
      value: '{sem.typography.normal.label03}',
      type: 'typography',
      description: 'Sets text for input field label',
    },
  },
  hint: {
    value: '{sem.typography.normal.body03}',
    type: 'typography',
    errorHintColor: {
      value: '{sem.colors.textColor.main.error}',
      type: 'color',
      description: 'Sets textColor for a field error hint',
    },
    hintColor: {
      value: '{sem.colors.textColor.main.secondary}',
      type: 'color',
      description: 'Sets text color for a field hint',
    },
    description: 'Sets text for input field hint',
    iconSize: {
      value: '{sem.icon.size.2}',
      type: 'sizing',
      description: 'Sets icon size for error hint icon in fields',
    },
  },
  backgroundColor: {
    default: {
      value: '{sem.colors.palette.secondary.lightest}',
      type: 'color',
      description: 'Sets backgroundColor for default input field container',
    },
    hover: {
      type: 'color',
      value: '{sem.colors.palette.secondary.light}',
      description: 'Sets backgroundColor for hovered input field container',
    },
    focused: {
      type: 'color',
      value: '{sem.colors.palette.secondary.light}',
      description: 'Sets backgroundColor for focused input field container',
    },
    error: {
      value: '{sem.colors.palette.error.lightest}',
      type: 'color',
      description: 'Sets backgroundColor for error input field container',
    },
    errorHover: {
      value: '{sem.colors.palette.error.light}',
      type: 'color',
      description: 'Sets backgroundColor for hoveredError input field container',
    },
    readOnly: {
      value: '{sem.colors.palette.secondary.light}',
      type: 'color',
      description: 'Sets backgroundColor for read only input field container',
    },
  },
  borderColor: {
    default: {
      type: 'color',
      value: '{sem.colors.borderColor.interactive.default}',
      description: 'Sets borderColor for default/hovered input field container',
    },
    focused: {
      type: 'color',
      value: '{sem.colors.borderColor.interactive.active}',
      description: 'Sets borderColor for focused input field container',
    },
    error: {
      type: 'color',
      value: '{sem.colors.borderColor.interactive.error}',
      description: 'Sets borderColor for error input field container',
    },
    readOnly: {
      type: 'color',
      value: '{sem.colors.borderColor.interactive.default}',
      description: 'Sets borderColor for read only input field container',
    },
  },
  textColor: {
    inputColor: {
      value: '{sem.colors.textColor.default.primary}',
      type: 'color',
      description: 'Sets textColor for a field input',
    },
    inputColorAlt: {
      type: 'color',
      value: '{sem.colors.textColor.default.secondary}',
      description:
        'Sets textColor for field label, hint, text placehodler and locked field contnet ',
    },
    errorHintColor: {
      type: 'color',
      value: '{sem.colors.textColor.default.error}',
      description: 'Sets textColor for error input field hint',
    },
    labelActive: {
      type: 'color',
      value: '{sem.colors.textColor.default.active}',
      description: 'Sets textColor for an active field label',
    },
    labelError: {
      type: 'color',
      value: '{sem.colors.textColor.default.error}',
      description: 'Sets textColor for an error field label',
    },
  },
  iconColor: {
    default: {
      value: '{sem.colors.textColor.default.secondary}',
      type: 'color',
      description: 'Sets color for a field icon/suffix (if used)',
    },
    errorIcon: {
      value: '{sem.colors.textColor.default.error}',
      type: 'color',
      description: 'Sets color for an error input field icon',
    },
    textAreaIconColor: {
      value: '{sem.colors.textColor.inverted.secondary}',
      type: 'color',
      description: "Sets backgroundColor for a text area field's 'resize' icon",
    },
  },
  paddingContentLeft: {
    value: '{spacing.5}',
    type: 'spacing',
    description: 'Sets left padding between content and container',
  },
  paddingContentRight: {
    value: '{spacing.0}',
    type: 'spacing',
    description: 'Sets right padding between content and addOn',
  },
  container: {
    value: '{sizing.13}',
    type: 'sizing',
    description: 'Sets fixed height for field content container',
  },
  containerCompact: {
    value: '{sizing.7}',
    type: 'sizing',
    description: 'Sets fixed height for compact field content container',
  },
  borderWidth: {
    '1': {
      value: '{borderWidth.1}',
      type: 'borderWidth',
      description: "Sets border width for slider's input field",
    },
    '2': {
      value: '{borderWidth.2}',
      type: 'borderWidth',
      description: "Sets border width for slider's input field for focused and error state",
    },
  },
  borderRadius: {
    value: '{borderRadius.2}',
    type: 'borderRadius',
    description: 'Sets field border radius',
  },
  hintGap: {
    value: '{spacing.3}',
    type: 'spacing',
    description: 'Sets spacing between icon and hint text',
  },
  paddingVertical: {
    value: '{spacing.6}',
    type: 'spacing',
    description: 'Sets top and bottom padding for text area',
  },
  compact: {
    input: {
      value: '{sem.typography.normal.body03}',
      type: 'typography',
      description: 'Sets text for input field label',
    },
  },
  hintIconSize: {
    value: '{sem.icon.size.2}',
    type: 'sizing',
    description: 'Sets icon size for field error hint icon',
  },
} as const;

export default field;
