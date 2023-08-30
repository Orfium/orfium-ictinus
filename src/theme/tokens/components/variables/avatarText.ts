const avatarText = {
  '1': {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.medium}',
      lineHeight: '{lineHeight.1}',
      fontSize: '{fontSize.1}',
      letterSpacing: '{letterSpacing.1}',
    },
    type: 'typography',
    description: 'used for the extra small avatar size with initials',
  },
  '2': {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.medium}',
      lineHeight: '{lineHeight.3}',
      fontSize: '{fontSize.2}',
      letterSpacing: '{letterSpacing.2}',
    },
    type: 'typography',
    description: 'used for the small avatar size with initials',
  },
  '3': {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.medium}',
      lineHeight: '{lineHeight.4}',
      fontSize: '{fontSize.3}',
      letterSpacing: '{letterSpacing.2}',
    },
    type: 'typography',
    description: 'used for the medium avatar size with initials',
  },
  '4': {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.medium}',
      lineHeight: '{lineHeight.5}',
      fontSize: '{fontSize.4}',
      letterSpacing: '{letterSpacing.1}',
    },
    type: 'typography',
    description: 'used for the large avatar size with initials',
  },
  '5': {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.medium}',
      lineHeight: '{lineHeight.8}',
      fontSize: '{fontSize.8}',
      letterSpacing: '{letterSpacing.0}',
    },
    type: 'typography',
    description: 'used for the extra large avatar size with initials',
  },
  '6': {
    value: {
      fontFamily: '{fontFamily.roboto}',
      fontWeight: '{fontWeight.medium}',
      lineHeight: '{lineHeight.10}',
      fontSize: '{fontSize.10}',
      letterSpacing: '{letterSpacing.0}',
    },
    type: 'typography',
    description: 'used for the extra extra large avatar size with initials',
  },
} as const;

export default avatarText;
