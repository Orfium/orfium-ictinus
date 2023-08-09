const button = {
  primary: {
    backgroundColor: {
      default: {
        value: '{sem.colors.palette.primary.main}',
        type: 'color',
        description: 'Sets backgroundColor for primary default button',
      },
      hover: {
        value: '{sem.colors.palette.primary.dark}',
        type: 'color',
        description: 'Sets backgroundColor for primary hovered button',
      },
      active: {
        value: '{sem.colors.palette.primary.darkest}',
        type: 'color',
        description: 'Sets backgroundColor for primary active (pressed) button',
      },
    },
    textColor: {
      type: 'color',
      value: '{sem.colors.textColor.inverted.primary}',
      description: 'Sets text and icon color for primary button',
    },
  },
  secondary: {
    backgroundColor: {
      default: {
        value: '{sem.colors.palette.secondary.main}',
        type: 'color',
        description: 'Sets backgroundColor for secondary default button',
      },
      hover: {
        value: '{sem.colors.palette.secondary.dark}',
        type: 'color',
        description: 'Sets backgroundColor for secondary hovered button',
      },
      active: {
        value: '{sem.colors.palette.secondary.darkest}',
        type: 'color',
        description: 'Sets backgroundColor for secondary active button',
      },
    },
    textColor: {
      type: 'color',
      value: '{sem.colors.textColor.light.active}',
      description: 'Sets text and icon color for secondary button',
    },
  },
  tertiary: {
    backgroundColor: {
      default: {
        type: 'color',
        value: '{sem.colors.palette.tertiary.lightest}',
        description: 'Sets backgroundColor for tertiary default button',
      },
      hover: {
        value: '{sem.colors.palette.tertiary.light}',
        type: 'color',
        description: 'Sets backgroundColor for tertiary hovered button',
      },
      active: {
        value: '{sem.colors.palette.tertiary.main}',
        type: 'color',
        description: 'Sets backgroundColor for tertiary active button',
      },
    },
    textColor: {
      value: '{sem.colors.textColor.light.active}',
      type: 'color',
      description: 'Sets text and icon color tertiary button',
    },
  },
  invertedAlt: {
    backgroundColor: {
      default: {
        type: 'color',
        value: '{sem.colors.palette.tertiary.lightest}',
        description: 'Sets backgroundColor for invertedAlt default button',
      },
      hover: {
        value: '{sem.colors.palette.tertiary.light}',
        type: 'color',
        description: 'Sets backgroundColor for invertedAlt hovered button',
      },
      active: {
        value: '{sem.colors.palette.tertiary.main}',
        type: 'color',
        description: 'Sets backgroundColor for invertedAlt active button',
      },
    },
    textColor: {
      value: '{sem.colors.textColor.inverted.active}',
      type: 'color',
      description: 'Sets text and icon color for invertedAlt button',
    },
  },
  danger: {
    backgroundColor: {
      default: {
        value: '{sem.colors.palette.error.lightest}',
        type: 'color',
        description: 'Sets backgroundColor for danger default button',
      },
      hover: {
        value: '{sem.colors.palette.error.light}',
        type: 'color',
        description: 'Sets backgroundColor for danger hovered button',
      },
      active: {
        value: '{sem.colors.palette.error.main}',
        type: 'color',
        description: 'Sets backgroundColor for danger active button',
      },
    },
    textColor: {
      type: 'color',
      value: '{sem.colors.textColor.light.error}',
      description: 'Sets text and icon color for danger button',
    },
  },
  inverted: {
    backgroundColor: {
      default: {
        value: '{sem.colors.palette.inverted.main}',
        type: 'color',
        description: 'Sets backgroundColor for inverted default button',
      },
      hover: {
        value: '{sem.colors.palette.inverted.dark}',
        type: 'color',
        description: 'Sets backgroundColor for inverted hovered button',
      },
      active: {
        value: '{sem.colors.palette.inverted.darkest}',
        type: 'color',
        description: 'Sets backgroundColor for inverted active (pressed) button',
      },
    },
    textColor: {
      type: 'color',
      value: '{sem.colors.textColor.light.primary}',
      description: 'Sets text and icon color for inverted button',
    },
  },
  borderRadius: {
    square: {
      value: '{borderRadius.2}',
      type: 'borderRadius',
      description:
        "Sets borderRadius for textbutton, iconButton ('square' variant) and dropdown button wrapper",
    },
    rounded: {
      value: '{borderRadius.5}',
      type: 'borderRadius',
      description: "Sets border Radius for iconButton ('round' variant)",
    },
    dropdownNested: {
      value: '{borderRadius.0}',
      type: 'borderRadius',
      description:
        "Sets border radius for nested 'textButton' and 'iconButton' components within a dropdownButton",
    },
  },
  text: {
    normal: {
      value: '{sem.typography.normal.label02}',
      type: 'typography',
      description: 'Sets text for text button',
    },
    compact: {
      value: '{sem.typography.normal.label03}',
      type: 'typography',
      description: "Sets text for text button ('compact' variant)",
    },
  },
  compact: {
    iconSize: {
      value: '{sem.icon.size.2}',
      type: 'sizing',
      description: "Sets size for iconButton ('compact' variant)",
    },
    size: {
      value: '{sizing.7}',
      type: 'sizing',
      description: "Sets size for iconButton ('compact' variant)",
    },
  },
  normal: {
    iconSize: {
      value: '{sem.icon.size.3}',
      type: 'sizing',
      description: 'Sets size for iconButton icon',
    },
    size: {
      value: '{sizing.9}',
      type: 'sizing',
      description: 'Sets size for iconButtons',
    },
  },
  loadingBar: {
    value: '{colors.gradient.1}',
    type: 'color',
    description: "Sets gradient for 'loading' bar in buttons",
  },
} as const;

export default button;
