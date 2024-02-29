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
  backgroundColor: {
    default: {
      value: '{sem.colors.palette.tertiary.base}',
      type: 'color',
      description: 'Sets backgroundColor for default list item',
    },
    active: {
      type: 'color',
      value: '{sem.colors.palette.tertiary.muted}',
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
  default: {
    value: '{sem.typography.normal.body02}',
    type: 'typography',
    description: "Sets text style for default list item ('normal' size variant)",
  },
  defaultCompact: {
    value: '{sem.typography.normal.body03}',
    type: 'typography',
    description: "Sets text style for default list item ('compact' size variant)",
  },
  active: {
    value: '{sem.typography.normal.label02}',
    type: 'typography',
    description: "Sets text style for active list item ('normal' size variant)",
  },
  activeCompact: {
    value: '{sem.typography.normal.label03}',
    type: 'typography',
    description: "Sets text style for active list item ('compact' size variant)",
  },
  secondaryText: {
    value: '{sem.typography.normal.body03}',
    type: 'typography',
    description: "Sets text style for secondary copy ('help text') in list items, if shown",
  },
} as const;

export default listItem;
