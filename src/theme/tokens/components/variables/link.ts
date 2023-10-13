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
      value: '{sem.colors.borderColor.interactive.focused}',
      type: 'color',
      description: 'Sets borderColor for focused link state',
    },
    default: {
      value: '{sem.colors.borderColor.decorative.transparent}',
      type: 'color',
      description: 'Sets borderColor for all link states except for focused',
    },
  },
  block: {
    '1': {
      value: '{sem.typography.normal.label01}',
      type: 'typography',
      description: 'Sets text for large default standalone link',
    },
    '2': {
      value: '{sem.typography.normal.label02}',
      type: 'typography',
      description: 'Sets text for medium default standalone link',
    },
    '3': {
      value: '{sem.typography.normal.label03}',
      type: 'typography',
      description: 'Sets text for small default standalone link',
    },
  },
  inline: {
    '1': {
      value: {
        fontFamily: '{fontFamily.roboto}',
        fontWeight: '{fontWeight.medium}',
        lineHeight: '{lineHeight.5}',
        fontSize: '{fontSize.4}',
        letterSpacing: '{letterSpacing.1}',
        textDecoration: '{textDecoration.link}',
      },
      type: 'typography',
      description:
        'Sets text for a large inline link and all large standalone link states (except for default)',
    },
    '2': {
      value: {
        fontFamily: '{fontFamily.roboto}',
        fontWeight: '{fontWeight.medium}',
        lineHeight: '{lineHeight.4}',
        fontSize: '{fontSize.3}',
        letterSpacing: '{letterSpacing.2}',
        textDecoration: '{textDecoration.link}',
      },
      type: 'typography',
      description:
        'Sets text for a medium inline link and all large standalone link states (except for default)',
    },
    '3': {
      value: {
        fontFamily: '{fontFamily.roboto}',
        fontWeight: '{fontWeight.medium}',
        lineHeight: '{lineHeight.3}',
        fontSize: '{fontSize.2}',
        letterSpacing: '{letterSpacing.2}',
        textDecoration: '{textDecoration.link}',
      },
      type: 'typography',
      description:
        'Sets text for a small inline link and all large standalone link states (except for default)',
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
    value: '{sem.icon.size.1}',
    type: 'sizing',
    description: 'Sets size for optional link icon',
  },
} as const;

export default link;
