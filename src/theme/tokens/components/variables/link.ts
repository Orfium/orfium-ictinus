const link = {
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
