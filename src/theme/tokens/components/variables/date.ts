const date = {
  label: {
    value: '{sem.typography.normal.label02}',
    type: 'typography',
  },
  secondaryText: {
    value: '{sem.typography.normal.body03}',
    type: 'typography',
    description: 'Sets secondary text for date picker',
  },
  verticalPadding: {
    value: '{spacing.7}',
    type: 'spacing',
    description: 'Applies within date picker menu',
  },
  horizontalPadding: {
    value: '{spacing.7}',
    type: 'spacing',
    description: 'Applies within date picker menu',
  },
  rowPadding: {
    value: '{spacing.5}',
    type: 'spacing',
    description: 'Sets padding for date picker day rows',
  },
  actionsSpacing: {
    value: '{spacing.4}',
    type: 'spacing',
    description: 'Sets spacing between actions in date picker',
  },
  rightButtonPadding: {
    value: '{spacing.8}',
    type: 'spacing',
    description: 'Sets right padding for CTA container',
  },
  container: {
    backgroundColor: {
      default: {
        value: '{sem.colors.backgroundColor.light}',
        type: 'color',
        description: 'Sets container background color',
      },
      alt: {
        value: '{sem.colors.backgroundColor.light}',
        type: 'color',
        description: 'Sets background color for input field and actions container',
      },
    },
    borderColor: {
      value: '{sem.colors.borderColor.decorative.muted}',
      type: 'color',
      description: 'Sets container border color for date picker',
    },
    borderRadius: {
      value: '{borderRadius.2}',
      type: 'borderRadius',
      description: "Sets border radius in date picker's container",
    },
    borderWidth: {
      value: '{borderWidth.1}',
      type: 'borderWidth',
      description: 'Sets border width for date picker container',
    },
  },
  boxShadow: {
    value: '{boxShadow.3}',
    type: 'boxShadow',
    description: "Sets box shadow for date picker's container",
  },
  presetPadding: {
    value: '{spacing.5}',
    type: 'spacing',
    description: 'Sets top and bottom padding for date picker preset options ',
  },
  size: {
    value: '{sizing.9}',
    type: 'sizing',
    description: 'Sets fixed size for _block date ',
  },
  backgroundColor: {
    default: {
      value: '{sem.colors.palette.secondary.lightest}',
      type: 'color',
      description: 'Sets backgroundColor for _block date (default state)',
    },
    focused: {
      value: '{sem.colors.palette.secondary.light}',
      type: 'color',
      description: 'Sets backgroundColor for _block date (default state)',
    },
    active: {
      value: '{sem.colors.palette.primary.main}',
      type: 'color',
      description: 'Sets backgroundColor for _block date (active state)',
    },
  },
  borderColor: {
    default: {
      value: '{sem.colors.borderColor.decorative.transparent}',
      type: 'color',
      description: 'Sets borderColor for _block date (default state)',
    },
    present: {
      value: '{sem.colors.borderColor.interactive.active}',
      type: 'color',
      description: 'Sets borderColor for _block date (present date)',
    },
  },
  textColor: {
    default: {
      value: '{sem.colors.textColor.light.primary}',
      type: 'color',
      description: 'Sets textColor for _block date (default state)',
    },
    weekday: {
      value: '{sem.colors.textColor.light.secondary}',
      type: 'color',
      description: 'Sets textColor for _block date (weekday)',
    },
    active: {
      value: '{sem.colors.textColor.inverted.primary}',
      type: 'color',
      description: 'Sets textColor for _block date (active state)',
    },
  },
  borderWidth: {
    value: '{borderWidth.1}',
    type: 'borderWidth',
    description: 'Sets borderWidth for _block date',
  },
  borderRadius: {
    '1': {
      value: '{borderRadius.0}',
      type: 'borderRadius',
      description: 'Sets borderWidth for _block date (weekday/range)',
    },
    '2': {
      value: '{borderRadius.7}',
      type: 'borderRadius',
      description: 'Sets borderRadius to 100% for _block date (present/active)',
    },
  },
} as const;

export default date;
