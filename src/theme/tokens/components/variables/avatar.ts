const avatar = {
  backgroundColor: {
    blue: {
      value: '{sem.colors.palette.primaryAlt.base}',
      type: 'color',
      description: 'Sets red background variation for avatar',
    },
    teal: {
      value: '{sem.colors.palette.success.base}',
      type: 'color',
      description: 'Sets teal background variation for avatar',
    },
    purple: {
      value: '{sem.colors.palette.upsell.base}',
      type: 'color',
      description: 'Sets purple background variation for avatar',
    },
    red: {
      value: '{sem.colors.palette.error.base}',
      type: 'color',
      description: 'Sets red background variation for avatar',
    },
    orange: {
      value: '{sem.colors.palette.warning.base}',
      type: 'color',
      description: 'Sets orange background variation for avatar',
    },
  },
  textColor: {
    blue: {
      value: '{sem.colors.textColor.default.active}',
      type: 'color',
      description: 'Sets red text color for blue variant',
    },
    teal: {
      value: '{sem.colors.textColor.default.success}',
      type: 'color',
      description: 'Sets red text color for teal variant',
    },
    purple: {
      value: '{sem.colors.textColor.default.visited}',
      type: 'color',
      description: 'Sets red text color for purple variant',
    },
    red: {
      value: '{sem.colors.textColor.default.error}',
      type: 'color',
      description: 'Sets red text color for red variant',
    },
    orange: {
      value: '{sem.colors.textColor.default.warning}',
      type: 'color',
      description: 'Sets red text color for orange variant',
    },
  },
  borderColor: {
    blue: {
      value: '{sem.colors.palette.primaryAlt.contrast}',
      type: 'color',
      description: 'Sets borderColor for blue variant',
    },
    teal: {
      value: '{sem.colors.palette.success.contrast}',
      type: 'color',
      description: 'Sets borderColor for teal variant',
    },
    purple: {
      value: '{sem.colors.palette.upsell.contrast}',
      type: 'color',
      description: 'Sets borderColor for purple variant',
    },
    red: {
      value: '{sem.colors.palette.error.contrast}',
      type: 'color',
      description: 'Sets borderColor for red variant',
    },
    orange: {
      value: '{sem.colors.palette.warning.contrast}',
      type: 'color',
      description: 'Sets borderColor for orange variant',
    },
  },
  size: {
    '1': {
      value: '{sizing.5}',
      type: 'sizing',
      description: 'Sets size for extra small avatar',
    },
    '2': {
      value: '{sizing.6}',
      type: 'sizing',
      description: 'Sets size for small avatar',
    },
    '3': {
      value: '{sizing.8}',
      type: 'sizing',
      description: 'Sets size for medium avatar',
    },
    '4': {
      value: '{sizing.12}',
      type: 'sizing',
      description: 'Sets size for large avatar',
    },
    '5': {
      value: '{sizing.15}',
      type: 'sizing',
      description: 'Sets size for extra large avatar',
    },
    '6': {
      value: '{sizing.18}',
      type: 'sizing',
      description: 'Sets size for extra extra large avatar',
    },
  },
  borderRadius: {
    value: '{borderRadius.7}',
    type: 'borderRadius',
    description: 'Sets avatar border radius',
  },
  borderWidth: {
    value: '{borderWidth.1}',
    type: 'borderWidth',
    description: "Sets avatar's border width",
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
