const filter = {
  borderRadius: {
    value: '{borderRadius.7}',
    type: 'borderRadius',
    description: 'Sets borderRadius for filter',
  },
  height: {
    value: '{sizing.9}',
    type: 'sizing',
    description: 'Sets fixed height for filter',
  },
  copyPadding: {
    value: '{spacing.3}',
    type: 'spacing',
    description: "Sets padding between filter copy and 'triangle' icon (if used)",
  },
  addedPadding: {
    value: '{spacing.3}',
    type: 'spacing',
    description: "Sets padding between filter copy and 'triangle' and 'close' added icon",
  },
  horizontalPadding: {
    value: '{spacing.6}',
    type: 'spacing',
    description: 'Sets left and right padding for filter container',
  },
  icon: {
    value: '{sem.icon.size.2}',
    type: 'sizing',
    description: 'Sets fixed size for filter icon(s)',
  },
  backgroundColor: {
    default: {
      value: '{sem.colors.palette.secondary.base}',
      type: 'color',
      description: 'Sets backgroundColor for filter default state',
    },
    hover: {
      value: '{sem.colors.palette.secondary.muted}',
      type: 'color',
      description: 'Sets backgroundColor for hovered filter state',
    },
    active: {
      value: '{sem.colors.palette.primary.contrast}',
      type: 'color',
      description: 'Sets backgroundColor for active filter state',
    },
    populated: {
      value: '{sem.colors.palette.secondary.base}',
      type: 'color',
      description: 'Sets backgroundColor for active filter component',
    },
    populatedHovered: {
      value: '{sem.colors.palette.secondary.muted}',
      type: 'color',
      description: 'Sets backgroundColor for active hovered filter component',
    },
  },
  borderColor: {
    default: {
      value: '{sem.colors.borderColor.interactive.default}',
      type: 'color',
      description: 'Sets borderColor for filter default/hovered state',
    },
    populated: {
      value: '{sem.colors.borderColor.interactive.active}',
      type: 'color',
      description: 'Sets borderColor for populated filter states',
    },
  },
  textColor: {
    default: {
      value: '{sem.colors.textColor.default.active}',
      type: 'color',
      description: 'Sets textColor for filter copy',
    },
    active: {
      value: '{sem.colors.textColor.inverted.primary}',
      type: 'color',
      description: 'Sets textColor for active filter copy',
    },
  },
  borderWidth: {
    '1': {
      value: '{borderWidth.1}',
      type: 'borderWidth',
      description: 'Sets filter border width',
    },
  },
  text: {
    value: '{sem.typography.normal.label02}',
    type: 'typography',
    description: 'Sets text style for filter text',
  },
} as const;

export default filter;
