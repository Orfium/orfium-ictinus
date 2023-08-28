const avatar = {
  backgroundColor: {
    blue: {
      value: '{colors.blue.1}',
      type: 'color',
      description: 'Sets red background variation for avatar',
    },
    teal: {
      value: '{colors.teal.1}',
      type: 'color',
      description: 'Sets teal background variation for avatar',
    },
    purple: {
      value: '{colors.purple.1}',
      type: 'color',
      description: 'Sets purple background variation for avatar',
    },
    red: {
      value: '{colors.red.1}',
      type: 'color',
      description: 'Sets red background variation for avatar',
    },
    orange: {
      value: '{colors.orange.1}',
      type: 'color',
      description: 'Sets orange background variation for avatar',
    },
  },
  textColor: {
    blue: {
      value: '{colors.blue.5}',
      type: 'color',
      description: 'Sets red text color for blue variant',
    },
    teal: {
      value: '{colors.teal.5}',
      type: 'color',
      description: 'Sets red text color for teal variant',
    },
    purple: {
      value: '{colors.purple.5}',
      type: 'color',
      description: 'Sets red text color for purple variant',
    },
    red: {
      value: '{colors.red.5}',
      type: 'color',
      description: 'Sets red text color for red variant',
    },
    orange: {
      value: '{colors.orange.5}',
      type: 'color',
      description: 'Sets red text color for orange variant',
    },
  },
  borderColor: {
    blue: {
      value: '{colors.blue.2}',
      type: 'color',
      description: 'Sets borderColor for blue variant',
    },
    teal: {
      value: '{colors.teal.4}',
      type: 'color',
      description: 'Sets borderColor for teal variant',
    },
    purple: {
      value: '{colors.purple.2}',
      type: 'color',
      description: 'Sets borderColor for purple variant',
    },
    red: {
      value: '{colors.red.2}',
      type: 'color',
      description: 'Sets borderColor for red variant',
    },
    orange: {
      value: '{colors.orange.2}',
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
      value: '{sizing.9}',
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
} as const;

export default avatar;
