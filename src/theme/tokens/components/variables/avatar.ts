const avatar = {
  size: {
    '1': {
      value: '{sizing.5}',
      type: 'sizing',
      description: 'Sets avatar size 1',
    },
    '2': {
      value: '{sizing.6}',
      type: 'sizing',
      description: 'Sets avatar size 2',
    },
    '3': {
      value: '{sizing.8}',
      type: 'sizing',
      description: 'Sets avatar size 3',
    },
    '4': {
      value: '{sizing.12}',
      type: 'sizing',
      description: 'Sets avatar size 4',
    },
    '5': {
      value: '{sizing.15}',
      type: 'sizing',
      description: 'Sets avatar size 5',
    },
    '6': {
      value: '{sizing.18}',
      type: 'sizing',
      description: 'Sets avatar size 6',
    },
  },
  label: {
    '1': {
      value: {
        fontFamily: '{fontFamily.roboto}',
        fontWeight: '{fontWeight.medium}',
        fontSize: '{fontSize.1}',
        lineHeight: '{lineHeight.1}',
        letterSpacing: '{letterSpacing.1}',
      },
      type: 'typography',
      description: 'Sets text style for avatar size 1',
    },
    '2': {
      value: {
        fontFamily: '{fontFamily.roboto}',
        fontWeight: '{fontWeight.medium}',
        fontSize: '{fontSize.2}',
        lineHeight: '{lineHeight.3}',
        letterSpacing: '{letterSpacing.2}',
      },
      type: 'typography',
      description: 'Sets text style for avatar size 2',
    },
    '3': {
      value: {
        fontFamily: '{fontFamily.roboto}',
        fontWeight: '{fontWeight.medium}',
        fontSize: '{fontSize.3}',
        lineHeight: '{lineHeight.4}',
        letterSpacing: '{letterSpacing.2}',
      },
      type: 'typography',
      description: 'Sets text style for avatar size 3',
    },
    '4': {
      value: {
        fontFamily: '{fontFamily.roboto}',
        fontWeight: '{fontWeight.medium}',
        fontSize: '{fontSize.4}',
        lineHeight: '{lineHeight.5}',
        letterSpacing: '{letterSpacing.1}',
      },
      type: 'typography',
      description: 'Sets text style for avatar size 4',
    },
    '5': {
      value: {
        fontFamily: '{fontFamily.roboto}',
        fontWeight: '{fontWeight.medium}',
        fontSize: '{fontSize.8}',
        lineHeight: '{lineHeight.8}',
        letterSpacing: '{letterSpacing.0}',
      },
      type: 'typography',
      description: 'Sets text style for avatar size 5',
    },
    '6': {
      value: {
        fontFamily: '{fontFamily.roboto}',
        fontWeight: '{fontWeight.medium}',
        fontSize: '{fontSize.10}',
        lineHeight: '{lineHeight.10}',
        letterSpacing: '{letterSpacing.0}',
      },
      type: 'typography',
      description: 'Sets text style for avatar size 6',
    },
  },
} as const;

export default avatar;
