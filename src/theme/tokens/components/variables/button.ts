const button = {
  primary: {
    backgroundColor: {
      default: {
        value: '{sem.colors.palette.primary.base}',
        type: 'color',
        description: 'Sets backgroundColor for primary default button',
      },
      hover: {
        value: '{sem.colors.palette.primary.muted}',
        type: 'color',
        description: 'Sets backgroundColor for primary hovered button',
      },
      active: {
        value: '{sem.colors.palette.primary.contrast}',
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
        value: '{sem.colors.palette.secondary.base}',
        type: 'color',
        description: 'Sets backgroundColor for secondary default button',
      },
      hover: {
        value: '{sem.colors.palette.secondary.muted}',
        type: 'color',
        description: 'Sets backgroundColor for secondary hovered button',
      },
      active: {
        value: '{sem.colors.palette.secondary.contrast}',
        type: 'color',
        description: 'Sets backgroundColor for secondary active button',
      },
    },
    textColor: {
      type: 'color',
      value: '{sem.colors.textColor.default.active}',
      description: 'Sets text and icon color for secondary button',
    },
  },
  tertiary: {
    backgroundColor: {
      default: {
        type: 'color',
        value: '{sem.colors.palette.tertiary.base}',
        description: 'Sets backgroundColor for tertiary default button',
      },
      hover: {
        value: '{sem.colors.palette.tertiary.muted}',
        type: 'color',
        description: 'Sets backgroundColor for tertiary hovered button',
      },
      active: {
        value: '{sem.colors.palette.tertiary.contrast}',
        type: 'color',
      },
    },
    textColor: {
      value: '{sem.colors.textColor.default.active}',
      type: 'color',
      description: 'Sets text and icon color tertiary button',
    },
  },
  danger: {
    backgroundColor: {
      default: {
        value: '{sem.colors.palette.error.base}',
        type: 'color',
        description: 'Sets backgroundColor for danger default button',
      },
      hover: {
        value: '{sem.colors.palette.error.muted}',
        type: 'color',
        description: 'Sets backgroundColor for danger hovered button',
      },
      active: {
        value: '{sem.colors.palette.error.contrast}',
        type: 'color',
        description: 'Sets backgroundColor for danger active button',
      },
    },
    textColor: {
      type: 'color',
      value: '{sem.colors.textColor.default.error}',
      description: 'Sets text and icon color for danger button',
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
    paddingHorizontal: {
      value: '{spacing.4}',
      type: 'spacing',
      description: "Sets left and right padding for textButton ('compact' variant)",
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
    gap: {
      value: '{spacing.4}',
      type: 'spacing',
      description: 'Sets content padding for textButton',
    },
    paddingVertical: {
      value: '{spacing.4}',
      type: 'spacing',
      description: 'Sets top and bottom padding for textButton',
    },
    paddingHorizontal: {
      value: '{spacing.6}',
      type: 'spacing',
      description: 'Sets left and right padding for textButton',
    },
  },
  loadingBar: {
    value: '{colors.gradient.1}',
    type: 'color',
    description: "Sets gradient for 'loading' bar in buttons",
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
} as const;

export default button;
