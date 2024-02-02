const datePicker = {
  label: {
    value: '{sem.typography.normal.label02}',
    type: 'typography',
    description: 'Sets text style for labels in date picker',
  },
  boxShadow: {
    value: '{boxShadow.3}',
    type: 'boxShadow',
    description: "Sets box shadow for date picker's container",
  },
  date: {
    container: {
      borderRadius: {
        value: '{borderRadius.2}',
        type: 'borderRadius',
        description: "Sets border radius in date picker's container",
      },
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
    borderWidth: {
      value: '{borderWidth.1}',
      type: 'borderWidth',
      description: 'Sets borderWidth for _block date and date picker container',
    },
    backgroundColor: {
      default: {
        value: '{sem.colors.palette.tertiary.main}',
        type: 'color',
        description: 'Sets backgroundColor for _block date (default state)',
      },
      focused: {
        value: '{sem.colors.palette.tertiary.light}',
        type: 'color',
        description: 'Sets backgroundColor for _block date (default state)',
      },
      active: {
        value: '{sem.colors.palette.primary.dark}',
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
        value: '{sem.colors.textColor.default.primary}',
        type: 'color',
        description: 'Sets textColor for _block date (default state)',
      },
      weekday: {
        value: '{sem.colors.textColor.default.secondary}',
        type: 'color',
        description: 'Sets textColor for _block date (weekday)',
      },
      active: {
        value: '{sem.colors.textColor.inverted.primary}',
        type: 'color',
        description: 'Sets textColor for _block date (active state)',
      },
    },
  },
  padding: {
    value: '{spacing.7}',
    type: 'spacing',
    description: 'Sets vertical and horizontal padding in date picker',
  },
  gap: {
    value: '{spacing.4}',
    type: 'spacing',
    description: 'Sets gap for content',
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
      value: '{sem.colors.backgroundColor.default}',
      type: 'color',
      description: 'Sets container background color',
    },
    borderColor: {
      value: '{sem.colors.borderColor.decorative.default}',
      type: 'color',
      description: 'Sets container border color for date picker',
    },
  },
  presetPadding: {
    value: '{spacing.6}',
    type: 'spacing',
    description: 'Sets top and bottom padding for date picker preset options ',
  },
  dateSize: {
    value: '{sizing.9}',
    type: 'sizing',
    description: 'Sets fixed size for _block date ',
  },
  actionsContainer: {
    value: '{sizing.15}',
    type: 'sizing',
    description: 'Sets fixed height for date picker button container',
  },
  fieldWidth: {
    value: '{sizing.21}',
    type: 'sizing',
    description: 'Sets fixed width for date picker fields',
  },
} as const;

export default datePicker;
