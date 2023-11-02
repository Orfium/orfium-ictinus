const breadcrumb = {
  padding: {
    type: 'spacing',
    value: '{spacing.4}',
    description: 'Sets breadcrumb content padding',
  },
  defaultText: {
    value: '{sem.typography.normal.body02}',
    type: 'typography',
    description: 'Sets text for default breadcrumb link',
  },
  defaultColor: {
    type: 'color',
    value: '{sem.colors.textColor.default.secondary}',
    description: 'Sets text for default breadcrumb link and breadcrumb icon',
  },
  iconSize: {
    value: '{sem.icon.size.3}',
    type: 'sizing',
    description: 'Sets icon size for breadcrumb icons',
  },
} as const;

export default breadcrumb;
