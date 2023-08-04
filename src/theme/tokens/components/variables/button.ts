const button = {
  primary: {
    backgroundColor: {
      default: {
        value: '{sem.colors.primary.main}',
        type: 'color',
        description: 'Sets backgroundColor for primary default button',
      },
      hover: {
        value: '{sem.colors.primary.dark}',
        type: 'color',
        description: 'Sets backgroundColor for primary hovered button',
      },
      active: {
        value: '{sem.colors.primary.darkest}',
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
        value: '{sem.colors.secondary.main}',
        type: 'color',
        description: 'Sets backgroundColor for secondary default button',
      },
      hover: {
        value: '{sem.colors.secondary.dark}',
        type: 'color',
        description: 'Sets backgroundColor for secondary hovered button',
      },
      active: {
        value: '{sem.colors.secondary.darkest}',
        type: 'color',
        description: 'Sets backgroundColor for secondary active button',
      },
    },
    textColor: {
      type: 'color',
      value: '{sem.colors.textColor.primary.active}',
      description: 'Sets text and icon color for secondary button',
    },
  },
  tertiary: {
    backgroundColor: {
      default: {
        type: 'color',
        value: '{sem.colors.tertiary.lightest}',
        description: 'Sets backgroundColor for tertiary default button',
      },
      hover: {
        value: '{sem.colors.tertiary.light}',
        type: 'color',
        description: 'Sets backgroundColor for tertiary hovered button',
      },
      active: {
        value: '{sem.colors.tertiary.main}',
        type: 'color',
        description: 'Sets backgroundColor for tertiary active button',
      },
    },
    textColor: {
      value: '{sem.colors.textColor.primary.active}',
      type: 'color',
      description: 'Sets text and icon color tertiary button',
    },
  },
  invertedAlt: {
    backgroundColor: {
      default: {
        type: 'color',
        value: '{sem.colors.tertiary.lightest}',
        description: 'Sets backgroundColor for invertedAlt default button',
      },
      hover: {
        value: '{sem.colors.tertiary.light}',
        type: 'color',
        description: 'Sets backgroundColor for invertedAlt hovered button',
      },
      active: {
        value: '{sem.colors.tertiary.main}',
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
        value: '{sem.colors.error.lightest}',
        type: 'color',
        description: 'Sets backgroundColor for danger default button',
      },
      hover: {
        value: '{sem.colors.error.light}',
        type: 'color',
        description: 'Sets backgroundColor for danger hovered button',
      },
      active: {
        value: '{sem.colors.error.main}',
        type: 'color',
        description: 'Sets backgroundColor for danger active button',
      },
    },
    textColor: {
      type: 'color',
      value: '{sem.colors.textColor.primary.error}',
      description: 'Sets text and icon color for danger button',
    },
  },
  inverted: {
    backgroundColor: {
      default: {
        value: '{sem.colors.inverted.main}',
        type: 'color',
        description: 'Sets backgroundColor for inverted default button',
      },
      hover: {
        value: '{sem.colors.inverted.dark}',
        type: 'color',
        description: 'Sets backgroundColor for inverted hovered button',
      },
      active: {
        value: '{sem.colors.inverted.darkest}',
        type: 'color',
        description: 'Sets backgroundColor for inverted active (pressed) button',
      },
    },
    textColor: {
      type: 'color',
      value: '{sem.colors.textColor.primary.primary}',
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
