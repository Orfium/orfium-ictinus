const search = {
  paddingVertical: {
    value: '{spacing.4}',
    type: 'spacing',
    description: 'sets both top and bottom padding for search bar',
  },
  paddingVerticalInline: {
    value: '{spacing.6}',
    type: 'spacing',
    description:
      'sets both top and bottom padding for _block search bar used only menus (with larger height)',
  },
  backgroundColor: {
    default: {
      value: '{sem.colors.palette.secondary.light}',
      type: 'color',
      description: 'Sets backgroundColor for default search component',
    },
    focused: {
      value: '{sem.colors.palette.secondary.main}',
      type: 'color',
      description: 'Sets backgroundColor for focused search component',
    },
  },
  iconSize: {
    value: '{sem.icon.size.3}',
    type: 'sizing',
    description: 'Sets icon size for search',
  },
  heightInlineCompact: {
    value: '{sem.icon.size.3}',
    type: 'sizing',
    description:
      'Sets fixed size for inline search, compact variant (_block used in menus with compact list items)',
  },
  paddingHorizontalRounded: {
    value: '{spacing.6}',
    type: 'spacing',
    description: 'Sets left and right padding for rounded search variant',
  },
  paddingHorizontalSquare: {
    value: '{spacing.5}',
    type: 'spacing',
    description: 'Sets left and right padding for square search variant',
  },
  borderColor: {
    default: {
      value: '{sem.colors.borderColor.interactive.default}',
      type: 'color',
      description: 'Sets  borderColor for default search component',
    },
    active: {
      value: '{sem.colors.borderColor.interactive.active}',
      type: 'color',
      description: 'Sets  borderColor for active search component',
    },
  },
  textColor: {
    default: {
      value: '{sem.colors.textColor.default.secondary}',
      type: 'color',
      description: 'Sets textColor in default state',
    },
    focused: {
      value: '{sem.colors.textColor.default.primary}',
      type: 'color',
      description: 'Sets textColor in focused and populated state',
    },
  },
  borderRadius: {
    rounded: {
      value: '{borderRadius.7}',
      type: 'borderRadius',
      description: 'Sets rounded borderRadius for rounded search variant',
    },
    inline: {
      value: '{borderRadius.0}',
      type: 'borderRadius',
      description: 'Sets square borderRadius for inline search variant',
    },
    square: {
      value: '{borderRadius.2}',
      type: 'borderRadius',
      description: 'Sets square borderRadius for search square variant',
    },
  },
  borderWidth: {
    '1': {
      value: '{borderWidth.1}',
      type: 'borderWidth',
      description: 'Sets borderWidth for default search component',
    },
    '2': {
      value: '{borderWidth.2}',
      type: 'borderWidth',
      description: 'Sets borderWidth for active search component',
    },
  },
  text: {
    value: '{sem.typography.normal.body02}',
    type: 'typography',
    description: 'Sets text for search component',
  },
} as const;

export default search;
