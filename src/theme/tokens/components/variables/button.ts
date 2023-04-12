const button = {
  color: {
    primary: {
      backgroundColor: {
        inactive: {
          value: '{sem.palette.systemic.primary.main}',
          type: 'color',
          description: 'Sets backgroundColor for primary inactive button',
        },
        hover: {
          value: '{sem.palette.systemic.primary.light}',
          type: 'color',
          description: 'Sets backgroundColor for primary hovered button',
        },
        active: {
          value: '{sem.palette.systemic.primary.dark}',
          type: 'color',
          description: 'Sets backgroundColor for primary active (pressed) button',
        },
      },
      borderColor: {
        type: 'color',
        value: '{sem.borderColor.decorative.transparent}',
        description: 'Sets borderColor used for all primary button states (except focused)',
      },
      textColor: {
        type: 'color',
        value: '{sem.textColor.inverted.primary}',
        description: 'Sets color used for all icons and text in a primary button',
      },
    },
    secondary: {
      backgroundColor: {
        inactive: {
          value: '{sem.palette.systemic.secondary.main}',
          type: 'color',
          description: 'Sets backgroundColor for secondary inactive button',
        },
        hover: {
          value: '{sem.palette.systemic.secondary.light}',
          type: 'color',
          description: 'Sets backgroundColor for secondary hovered button',
        },
        active: {
          value: '{sem.palette.systemic.secondary.dark}',
          type: 'color',
          description: 'Sets backgroundColor for secondary active button',
        },
      },
      borderColor: {
        type: 'color',
        value: '{sem.borderColor.decorative.transparent}',
        description: 'Sets borderColor used for all secondary button states (except focused)',
      },
      textColor: {
        type: 'color',
        value: '{sem.textColor.light.active}',
        description: 'Sets color used for all icons and text in a secondary button',
      },
    },
    tertiary: {
      backgroundColor: {
        inactive: {
          type: 'color',
          value: '{sem.palette.systemic.tertiary.light}',
          description: 'Sets backgroundColor for tertiary inactive button',
        },
        hover: {
          value: '{sem.palette.systemic.tertiary.main}',
          type: 'color',
          description: 'Sets backgroundColor for tertiary hovered button',
        },
        active: {
          value: '{sem.palette.systemic.tertiary.dark}',
          type: 'color',
          description: 'Sets backgroundColor for tertiary active button',
        },
      },
      borderColor: {
        type: 'color',
        value: '{sem.borderColor.decorative.transparent}',
        description: 'Sets borderColor used for all tertiary button states (except focused)',
      },
      borderColorSegmented: {
        type: 'color',
        value: '{sem.borderColor.decorative.light.muted}',
        description:
          'Used on the wrapper of a segmented tertiary button group and the dividers separate the buttons',
      },
      textColor: {
        value: '{sem.textColor.light.active}',
        type: 'color',
        description: 'Sets color used for all icons and text in a tertiary button',
      },
    },
    invertedAlt: {
      borderColor: {
        type: 'color',
        value: '{sem.borderColor.decorative.transparent}',
        description: 'Sets borderColor used for all invertedAlt button states (except focused)',
      },
      backgroundColor: {
        inactive: {
          type: 'color',
          value: '{sem.palette.systemic.tertiary.light}',
          description: 'Sets backgroundColor for invertedAlt inactive button',
        },
        hover: {
          value: '{sem.palette.systemic.tertiary.main}',
          type: 'color',
          description: 'Sets backgroundColor for invertedAlt hovered button',
        },
        active: {
          value: '{sem.palette.systemic.tertiary.dark}',
          type: 'color',
          description: 'Sets backgroundColor for invertedAlt active button',
        },
      },
      textColor: {
        value: '{sem.textColor.inverted.active}',
        type: 'color',
        description: 'Sets color used for all icons and text in an invertedAlt button',
      },
    },
    danger: {
      backgroundColor: {
        inactive: {
          value: '{sem.palette.systemic.error.main}',
          type: 'color',
          description: 'Sets backgroundColor for danger inactive button',
        },
        hover: {
          value: '{sem.palette.systemic.error.light}',
          type: 'color',
          description: 'Sets backgroundColor for danger hovered button',
        },
        active: {
          value: '{sem.palette.systemic.error.main}',
          type: 'color',
          description: 'Sets backgroundColor for danger active button',
        },
      },
      textColor: {
        type: 'color',
        value: '{sem.textColor.light.error}',
        description: 'Sets color used for all icons and text in a danger button',
      },
      borderColor: {
        type: 'color',
        value: '{sem.borderColor.decorative.transparent}',
        description: 'Sets border color for all danger button states (except focused)',
      },
    },
    focusedBorderColor: {
      value: '{sem.borderColor.interactive.focused}',
      type: 'color',
      description: 'Sets focused borderColor for all buttons',
    },
    inverted: {
      backgroundColor: {
        inactive: {
          value: '{sem.palette.systemic.inverted.main}',
          type: 'color',
          description: 'Sets backgroundColor for inverted inactive button',
        },
        hover: {
          value: '{sem.palette.systemic.inverted.light}',
          type: 'color',
          description: 'Sets backgroundColor for inverted hovered button',
        },
        active: {
          value: '{sem.palette.systemic.inverted.dark}',
          type: 'color',
          description: 'Sets backgroundColor for inverted active (pressed) button',
        },
      },
      borderColor: {
        type: 'color',
        value: '{sem.borderColor.decorative.transparent}',
        description: 'Sets borderColor used for all inverted button states (except focused)',
      },
      textColor: {
        type: 'color',
        value: '{sem.textColor.light.primary}',
        description: 'Sets color used for all icons and text in an inverted button',
      },
    },
  },
  borderWidth: {
    '1': {
      value: '{borderWidth.1}',
      type: 'borderWidth',
    },
    '2': {
      value: '{borderWidth.2}',
      type: 'borderWidth',
    },
  },
  textBorderRadius: {
    value: '{borderRadius.2}',
    type: 'borderRadius',
    description: 'Sets borderRadius for text buttons and segmented button wrappers',
  },
  text: {
    value: '{sem.typography.label02}',
    type: 'typography',
  },
  iconSize: {
    value: '{sizing.5}',
    type: 'sizing',
    description: 'Sets button icon size',
  },
  wrapperBorderRadius: {
    value: '{borderRadius.0}',
    type: 'borderRadius',
    description:
      'Sets border radius for nested segmented buttons (border radius is applied to the container instead)',
  },
  iconBorderRadius: {
    value: '{borderRadius.5}',
    type: 'borderRadius',
    description: 'Sets border Radius for icon buttons',
  },
  opacity: {
    value: '{sem.disabledState}',
    type: 'opacity',
    description: 'Sets button opacity for disabled state',
  },
} as const;

export default button;
