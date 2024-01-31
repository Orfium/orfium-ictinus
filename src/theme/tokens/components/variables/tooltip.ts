const tooltip = {
  padding: {
    text: {
      value: '{spacing.4}',
      type: 'spacing',
      description: 'Sets padding for text tooltip',
    },
    interactive: {
      value: '{spacing.6}',
      type: 'spacing',
      description: 'Sets padding for interactive tooltip',
    },
  },
  borderRadius: {
    value: '{borderRadius.2}',
    type: 'borderRadius',
    description: 'Sets borderRadius for a tooltip',
  },
  borderWidth: {
    default: {
      value: '{borderWidth.1}',
      type: 'borderWidth',
      description: 'Sets border width for tooltips',
    },
  },
  backgroundColor: {
    default: {
      value: '{sem.colors.backgroundColor.inverted}',
      type: 'color',
      description:
        "Sets backgroundColor for tooltip container (including direction 'triangle' indicator)",
    },
    inverted: {
      value: '{sem.colors.backgroundColor.alt}',
      type: 'color',
      description:
        "Sets backgroundColor for tooltip container with light color (including direction 'triangle' indicator)",
    },
  },
  borderColor: {
    default: {
      value: '{sem.colors.borderColor.decorative.transparent}',
      type: 'color',
      description: 'Sets borderColor for tooltip (default variant)',
    },
    inverted: {
      value: '{sem.colors.borderColor.decorative.default}',
      type: 'color',
      description: 'Sets borderColor for tooltip (inverted variant)',
    },
  },
  boxShadow: {
    value: '{boxShadow.2}',
    type: 'boxShadow',
    description: 'Sets boxShadow for inverted tooltip variant',
  },
  text: {
    value: '{sem.typography.normal.body03}',
    type: 'typography',
    description: 'Sets text for tooltip',
  },
  textColor: {
    default: {
      value: '{sem.colors.textColor.inverted.primary}',
      type: 'color',
      description: 'Sets textColor for tooltip',
    },
    inverted: {
      value: '{sem.colors.textColor.default.primary}',
      type: 'color',
      description: 'Sets textColor for tooltip',
    },
  },
} as const;

export default tooltip;
