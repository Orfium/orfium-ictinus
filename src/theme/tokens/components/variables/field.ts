const field = {
  hintPadding: {
    value: '{spacing.4}',
    type: 'spacing',
    description: 'sets vertical padding between an input field container and its hint (if used)',
  },
  placeholder: {
    value: '{sem.typography.body02}',
    type: 'typography',
    description: 'Sets text for input field placeholder label',
  },
  input: {
    value: '{sem.typography.body02}',
    type: 'typography',
    description: 'Sets text for field input',
  },
  label: {
    value: '{sem.typography.label03}',
    type: 'typography',
    description: 'Sets text for input field label',
  },
  hint: {
    value: '{sem.typography.body03}',
    type: 'typography',
    errorHintColor: {
      value: '{sem.textColor.main.error}',
      type: 'color',
      description: 'Sets textColor for a field error hint',
    },
    hintColor: {
      value: '{sem.textColor.main.secondary}',
      type: 'color',
      description: 'Sets text color for a field hint',
    },
    description: 'Sets text for input field hint',
  },
  backgroundColor: {
    default: {
      value: '{sem.palette.systemic.tertiary.light}',
      type: 'color',
      description: 'Sets backgroundColor for default input field container',
    },
    hover: {
      type: 'color',
      value: '{sem.palette.systemic.tertiary.main}',
      description: 'Sets backgroundColor for hovered input field container',
    },
    focused: {
      type: 'color',
      value: '{sem.palette.systemic.tertiary.main}',
      description: 'Sets backgroundColor for focused input field container',
    },
    error: {
      value: '{sem.palette.systemic.error.light}',
      type: 'color',
      description: 'Sets backgroundColor for error input field container',
    },
    errorHover: {
      value: '{sem.palette.systemic.error.main}',
      type: 'color',
      description: 'Sets backgroundColor for hoveredError input field container',
    },
    readOnly: {
      value: '{sem.palette.systemic.tertiary.main}',
      type: 'color',
      description: 'Sets backgroundColor for read only input field container',
    },
  },
  borderColor: {
    default: {
      type: 'color',
      value: '{sem.borderColor.interactive.default}',
      description: 'Sets borderColor for default/hovered input field container',
    },
    focused: {
      type: 'color',
      value: '{sem.borderColor.interactive.active}',
      description: 'Sets borderColor for focused input field container',
    },
    error: {
      type: 'color',
      value: '{sem.borderColor.interactive.error}',
      description: 'Sets borderColor for error input field container',
    },
    readOnly: {
      type: 'color',
      value: '{sem.borderColor.interactive.defaultAlt}',
      description: 'Sets borderColor for read only input field container',
    },
  },
  textColor: {
    inputColor: {
      value: '{sem.textColor.light.primary}',
      type: 'color',
      description: 'Sets textColor for a field input',
    },
    inputColorAlt: {
      type: 'color',
      value: '{sem.textColor.light.secondary}',
      description:
        'Sets textColor for field label, hint, text placehodler and locked field contnet ',
    },
    errorHintColor: {
      type: 'color',
      value: '{sem.textColor.light.error}',
      description: 'Sets textColor for error input field hint',
    },
    labelActive: {
      type: 'color',
      value: '{sem.textColor.light.active}',
      description: 'Sets textColor for an active field label',
    },
    labelError: {
      type: 'color',
      value: '{sem.textColor.light.error}',
      description: 'Sets textColor for an error field label',
    },
  },
  iconColor: {
    default: {
      value: '{sem.textColor.light.secondary}',
      type: 'color',
      description: 'Sets color for a field icon/suffix (if used)',
    },
    errorIcon: {
      value: '{sem.textColor.light.error}',
      type: 'color',
      description: 'Sets color for an error input field icon',
    },
    textAreaIconColor: {
      value: '{sem.palette.accents.lightPurple.main}',
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
    value: '{spacing.5}',
    type: 'spacing',
    description: 'Sets right padding between content and addOn',
  },
  container: {
    value: '{sizing.13}',
    type: 'sizing',
    description: 'Sets fixed height for field content container',
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
} as const;

export default field;
