const listItem = {
  iconColor: {
    type: 'color',
    value: '{sem.colors.textColor.default.secondary}',
    description: 'Sets color for list item icons',
  },
  iconSize: {
    value: '{sem.icon.size.3}',
    type: 'sizing',
    description: 'Sets fixed size for list item icon',
  },
  height: {
    value: '{sizing.13}',
    type: 'sizing',
    description: 'Sets fixed height for all list items',
  },
  heightCompact: {
    value: '{sizing.10}',
    type: 'sizing',
    description: 'Sets fixed height for _block pagination list item',
  },
  padding: {
    value: '{spacing.5}',
    type: 'spacing',
    description: 'sets padding between avatar and list item text',
  },
  paddingHorizontal: {
    value: '{spacing.5}',
    type: 'spacing',
    description: 'Left and right padding for list items',
  },
  default: {
    value: '{sem.typography.normal.body02}',
    type: 'typography',
    backgroundColor: {
      value: 'neutral.light}',
      type: 'color',
    },
    textColor: {
      value: '{sem.colors.textColor.primary.primary}',
      type: 'color',
    },
    iconColor: {
      value: '{sem.colors.textColor.primary.secondary}',
      type: 'color',
    },
    secondaryTextColor: {
      value: '{sem.colors.textColor.primary.secondary}',
      type: 'color',
      description: "Use for 'loading' and 'No results found' states",
    },
    description: 'Sets text for default list item copy',
  },
  defaultCompact: {
    value: '{sem.typography.normal.body03}',
    type: 'typography',
    backgroundColor: {
      value: 'neutral.light}',
      type: 'color',
    },
    textColor: {
      value: '{sem.colors.textColor.primary.primary}',
      type: 'color',
    },
    iconColor: {
      value: '{sem.colors.textColor.primary.secondary}',
      type: 'color',
    },
    secondaryTextColor: {
      value: '{sem.colors.textColor.primary.secondary}',
      type: 'color',
      description: "Use for 'loading' and 'No results found' states",
    },
    description: "Sets text for default list item copy ('compact' variant)",
  },
  active: {
    value: '{sem.typography.normal.label02}',
    type: 'typography',
    backgroundColor: {
      value: '{sem.interaction.white.selected}',
      type: 'color',
    },
    textColor: {
      value: '{sem.colors.textColor.primary.primary}',
      type: 'color',
    },
    iconColor: {
      value: '{sem.colors.textColor.primary.secondary}',
      type: 'color',
    },
    description: 'Sets text for active list item copy',
  },
  activeCompact: {
    value: '{sem.typography.normal.label03}',
    type: 'typography',
    backgroundColor: {
      value: '{sem.interaction.white.selected}',
      type: 'color',
    },
    textColor: {
      value: '{sem.colors.textColor.primary.primary}',
      type: 'color',
    },
    iconColor: {
      value: '{sem.colors.textColor.primary.secondary}',
      type: 'color',
    },
    description: "Sets text for active list item copy ('compact')",
  },
  backgroundColor: {
    default: {
      value: '{sem.colors.palette.tertiary.main}',
      type: 'color',
      description: 'Sets backgroundColor for default list item',
    },
    active: {
      type: 'color',
      value: '{sem.colors.palette.tertiary.light}',
      description: 'Sets backgroundColor for active list item',
    },
  },
  textColor: {
    default: {
      type: 'color',
      value: '{sem.colors.textColor.default.primary}',
      description: 'Sets textColor for primary list item copy',
    },
    secondary: {
      type: 'color',
      value: '{sem.colors.textColor.default.secondary}',
      description:
        'Sets textColor for secondary list item copy and content variants (e.g. loading, no results)',
    },
    active: {
      type: 'color',
      value: '{sem.colors.textColor.default.active}',
      description: 'Sets textColor for active list item copy',
    },
  },
  secondaryText: {
    value: '{sem.typography.normal.body03}',
    type: 'typography',
    description: 'Sets text for secondary copy in list item',
  },
} as const;

export default listItem;
