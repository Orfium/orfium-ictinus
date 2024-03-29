const link = {
  padding: {
    value: '{spacing.3}',
    type: 'spacing',
    description: 'Sets padding between a link and a link icon',
  },
  textColor: {
    primary: {
      default: {
        value: '{sem.colors.textColor.default.active}',
        type: 'color',
        description: 'Sets text color for primary default link',
      },
      hover: {
        value: '{sem.colors.textColor.default.primary}',
        type: 'color',
        description: 'Sets text color for a primary hovered link',
      },
      visited: {
        value: '{sem.colors.textColor.default.visited}',
        type: 'color',
        description: 'Sets text color for a primary visited link',
      },
    },
    inverted: {
      default: {
        value: '{sem.colors.textColor.inverted.active}',
        type: 'color',
        description: 'Sets text color for inverted default link',
      },
      hover: {
        value: '{sem.colors.textColor.inverted.primary}',
        type: 'color',
        description: 'Sets text color for a primary hovered link',
      },
      visited: {
        value: '{sem.colors.textColor.inverted.visited}',
        type: 'color',
        description: 'Sets text color for a primary visited link',
      },
    },
  },
  borderColor: {
    focused: {
      value: '{sem.colors.borderColor.interactive.upsell}',
      type: 'color',
      description: 'Sets borderColor for focused link state',
    },
    default: {
      value: '{sem.colors.borderColor.decorative.transparent}',
      type: 'color',
      description: 'Sets borderColor for all link states except for focused',
    },
  },
  borderWidth: {
    '1': {
      value: '{borderWidth.3}',
      type: 'borderWidth',
      description: 'Sets border width for all link states apart from focused',
    },
    '2': {
      value: '{borderWidth.3}',
      type: 'borderWidth',
      description: 'Sets border width for focused state',
    },
  },
  iconSize: {
    '1': {
      value: '{sem.icon.size.3}',
      type: 'sizing',
      description: 'Sets size for optional link icon (large)',
    },
    '2': {
      value: '{sem.icon.size.2}',
      type: 'sizing',
      description: 'Sets size of optional link icon (medium)',
    },
    '3': {
      value: '{sem.icon.size.1}',
      type: 'sizing',
      description: 'Sets size for optional link icon',
    },
  },
  borederWidth: {
    '1': {
      value: '{borderWidth.1}',
      type: 'borderWidth',
      description: 'Setes border width for default and active state',
    },
  },
  block: {
    '1': {
      value: '{sem.typography.normal.label01}',
      type: 'typography',
      description: "Sets text for block link ('large' variant)",
    },
    '2': {
      value: '{sem.typography.normal.label02}',
      type: 'typography',
      description: "Sets text for block link ('medium' variant)",
    },
    '3': {
      value: '{sem.typography.normal.label03}',
      type: 'typography',
      description: "Sets text for block link ('small' variant)",
    },
  },
  inline: {
    '1': {
      value: {
        fontFamily: '{fontFamily.roboto}',
        fontWeight: '{fontWeight.medium}',
        fontSize: '{fontSize.4}',
        lineHeight: '{lineHeight.5}',
        letterSpacing: '{letterSpacing.1}',
        textDecoration: '{textDecoration.link}',
      },
      type: 'typography',
      description: "Sets text for inline link ('large' variant)",
    },
    '2': {
      value: {
        textDecoration: '{textDecoration.link}',
        fontFamily: '{fontFamily.roboto}',
        fontWeight: '{fontWeight.medium}',
        fontSize: '{fontSize.3}',
        lineHeight: '{lineHeight.4}',
        letterSpacing: '{letterSpacing.2}',
      },
      type: 'typography',
      description: "Sets text for inline link ('medium' variant)",
    },
    '3': {
      value: {
        fontFamily: '{fontFamily.roboto}',
        fontWeight: '{fontWeight.medium}',
        fontSize: '{fontSize.2}',
        lineHeight: '{lineHeight.3}',
        letterSpacing: '{letterSpacing.2}',
        textDecoration: '{textDecoration.link}',
      },
      type: 'typography',
      description: "Sets text for inline link ('small' variant)",
    },
  },
} as const;

export default link;
