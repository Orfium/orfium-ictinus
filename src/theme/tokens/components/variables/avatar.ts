const avatar = {
  color: {
    red: {
      backgroundColor: {
        value: '{sem.palette.accents.red.main}',
        type: 'color',
      },
      foregroundColor: {
        value: '{sem.palette.accents.red.contrast}',
        type: 'color',
        description: 'Used for both icon and initials color in avatar',
      },
    },
    magenta: {
      backgroundColor: {
        value: '{sem.palette.accents.magenta.main}',
        type: 'color',
      },
      foregroundColor: {
        value: '{sem.palette.accents.magenta.contrast}',
        type: 'color',
        description: 'Used for both icon and initials color in avatar',
      },
    },
    purple: {
      backgroundColor: {
        value: '{sem.palette.accents.purple.main}',
        type: 'color',
      },
      foregroundColor: {
        value: '{sem.palette.accents.purple.contrast}',
        type: 'color',
        description: 'Used for both icon and initials color in avatar',
      },
    },
    blue: {
      backgroundColor: {
        value: '{sem.palette.accents.blue.main}',
        type: 'color',
      },
      foregroundColor: {
        value: '{sem.palette.accents.blue.contrast}',
        type: 'color',
        description: 'Used for both icon and initials color in avatar',
      },
    },
    darkBlue: {
      backgroundColor: {
        value: '{sem.palette.accents.darkBlue.main}',
        type: 'color',
      },
      foregroundColor: {
        value: '{sem.palette.accents.darkBlue.contrast}',
        type: 'color',
        description: 'Used for both icon and initials color in avatar',
      },
    },
    teal: {
      backgroundColor: {
        value: '{sem.palette.accents.teal.main}',
        type: 'color',
      },
      foregroundColor: {
        value: '{sem.palette.accents.teal.contrast}',
        type: 'color',
        description: 'Used for both icon and initials color in avatar',
      },
    },
    orange: {
      backgroundColor: {
        value: '{sem.palette.accents.orange.main}',
        type: 'color',
      },
      foregroundColor: {
        value: '{sem.palette.accents.orange.contrast}',
        type: 'color',
        description: 'Used for both icon and initials color in avatar',
      },
    },
    lightPurple: {
      backgroundColor: {
        value: '{sem.palette.accents.lightPurple.main}',
        type: 'color',
      },
      foregroundColor: {
        value: '{sem.palette.accents.lightPurple.contrast}',
        type: 'color',
        description: 'Used for both icon and initials color in avatar',
      },
    },
    imagePlaceholder: {
      backgroundColor: {
        value: '{sem.palette.accents.lightPurple.main}',
        type: 'color',
        description:
          "this is a placeholder for 'background-image' which cannot be defined as a token",
      },
      foregroundColor: {
        value: '{sem.palette.accents.lightPurple.contrast}',
        type: 'color',
        description:
          "this is a placeholder for 'background-image' which cannot be defined as a token",
      },
    },
    borderColor: {
      value: '{sem.borderColor.decorative.muted}',
      type: 'color',
      description: 'common border color used by all avatar versions',
    },
  },
  borderWidth: {
    value: '{borderWidth.1}',
    type: 'borderWidth',
  },
  size: {
    '1': {
      value: '{sizing.5}',
      type: 'sizing',
    },
    '2': {
      value: '{sizing.6}',
      type: 'sizing',
    },
    '3': {
      value: '{sizing.9}',
      type: 'sizing',
    },
    '4': {
      value: '{sizing.12}',
      type: 'sizing',
    },
    '5': {
      value: '{sizing.15}',
      type: 'sizing',
    },
    '6': {
      value: '{sizing.18}',
      type: 'sizing',
    },
  },
  borderRadius: {
    value: '{borderRadius.7}',
    type: 'borderRadius',
  },
} as const;

export default avatar;
