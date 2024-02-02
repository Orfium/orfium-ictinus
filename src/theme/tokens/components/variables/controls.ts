const controls = {
  checkbox: {
    padding: {
      value: '{spacing.5}',
      type: 'spacing',
      description: 'Spacing between checkbox container and checkbox label (if shown)',
    },
    backgroundColor: {
      default: {
        type: 'color',
        value: '{sem.colors.backgroundColor.transparent}',
        description: "Sets background color for checkbox's default state",
      },
      pressed: {
        value: '{sem.colors.palette.primary.main}',
        type: 'color',
        description: 'Sets background color for an pressed checkbox',
      },
    },
    borderColor: {
      default: {
        type: 'color',
        value: '{sem.colors.borderColor.interactive.default}',
        description: 'Sets borderColor for an default checkbox state',
      },
      pressed: {
        type: 'color',
        value: '{sem.colors.borderColor.decorative.transparent}',
        description: 'Sets borderColor for an pressed checkbox',
      },
    },
    iconColor: {
      pressed: {
        value: '{sem.colors.textColor.inverted.primary}',
        type: 'color',
        description: "Sets color for the 'check' icon that appears when a checkbox is pressed",
      },
    },
    borderRadius: {
      value: '{borderRadius.2}',
      type: 'borderRadius',
      description: 'Sets borderRadius for the checkbox container',
    },
    borderWidth: {
      value: '{borderWidth.2}',
      type: 'borderWidth',
      description: 'Sets border width for checkbox',
    },
    size: {
      value: '{sizing.5}',
      type: 'sizing',
      description: 'Sets the size of checkbox',
    },
  },
  radio: {
    padding: {
      value: '{spacing.5}',
      type: 'spacing',
      description: 'Spacing between radio button container and radio button label(if shown)',
    },
    backgroundColor: {
      default: {
        type: 'color',
        value: '{sem.colors.backgroundColor.transparent}',
        description: 'Sets backgroundColor for default radio button state',
      },
      active: {
        type: 'color',
        value: '{sem.colors.palette.primary.main}',
        description: 'Sets backgroundColor for a pressed radio button',
      },
    },
    borderColor: {
      default: {
        type: 'color',
        value: '{sem.colors.borderColor.interactive.default}',
        description: 'Sets borderColor for default radio button state',
      },
      active: {
        type: 'color',
        value: '{sem.colors.palette.primary.main}',
        description: 'Sets borderColor for an pressed radio button',
      },
    },
    borderRadius: {
      value: '{borderRadius.7}',
      type: 'borderRadius',
      description: 'Sets borderRadius for the radio button container',
    },
    borderWidth: {
      value: '{borderWidth.2}',
      type: 'borderWidth',
      description: 'Sets border width for radio button',
    },
    size: {
      ring: {
        value: '{sizing.5}',
        type: 'sizing',
        description: 'Sets the size of outer ring radio button',
      },
      circle: {
        value: '{sizing.3}',
        type: 'sizing',
        description: 'Sets the size of inner circle radio button',
      },
    },
  },
  switch: {
    borderRadius: {
      value: '{borderRadius.7}',
      type: 'borderRadius',
      description: 'Sets 100% border radius for switch elements (thumb, track, hover circle)',
    },
    backgroundColor: {
      track: {
        value: '{sem.colors.palette.primaryAlt.dark}',
        type: 'color',
        description: 'Sets backgroundColor for switch track',
      },
      thumb: {
        default: {
          value: '{sem.colors.backgroundColor.default}',
          type: 'color',
          description: 'Sets backgroundColor for default switch thumb state',
        },
        active: {
          value: '{sem.colors.palette.primary.main}',
          type: 'color',
          description: 'Sets backgroundColor for active switch thumb state',
        },
      },
    },
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
    size: {
      thumb: {
        value: '{sizing.5}',
        type: 'sizing',
        description: 'Sets size for switch thumb',
      },
    },
    borderColor: {
      thumb: {
        default: {
          value: '{sem.colors.borderColor.interactive.default}',
          type: 'color',
          description: 'Sets borderColor for default switch thumb state',
        },
        active: {
          value: '{sem.colors.borderColor.interactive.active}',
          type: 'color',
          description: 'Sets borderColor for active switch thumb state',
        },
      },
    },
    padding: {
      value: '{spacing.5}',
      type: 'spacing',
      description: 'Sets spacing between switch and label',
    },
    borderWidth: {
      value: '{borderWidth.2}',
      type: 'borderWidth',
      description: 'Sets borderWidth for switch thumb',
    },
  },
  label: {
    gap: {
      value: '{spacing.2}',
      type: 'spacing',
      description: 'Sets gap for label/input in controls ',
    },
    normal: {
      value: '{sem.typography.normal.body02}',
      type: 'typography',
      description: "Sets text style for control 'normal' label ",
    },
    large: {
      value: '{sem.typography.normal.headline04}',
      type: 'typography',
      description: "Sets text style for 'large' control label",
    },
  },
  textColor: {
    label: {
      value: '{sem.colors.textColor.default.primary}',
      type: 'color',
      description: 'Sets textColor for control label',
    },
    helpText: {
      value: '{sem.colors.textColor.default.secondary}',
      type: 'color',
      description: 'Sets textColor for optional control help text',
    },
  },
  helpText: {
    value: '{sem.typography.normal.body03}',
    type: 'typography',
    description: 'Sets text style for control help text (if shown)',
  },
} as const;

export default controls;
