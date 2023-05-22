const palette = {
  systemic: {
    error: {
      light: {
        type: 'color',
        value: '{colors.red.50}',
        description: 'Used to indicate hover state',
      },
      main: {
        type: 'color',
        value: '{colors.red.100}',
        description: 'Used to indicate inactive state',
      },
      dark: {
        type: 'color',
        value: '{colors.red.550}',
        description: 'Used to indicate active state',
      },
    },
    success: {
      light: {
        type: 'color',
        value: '{colors.teal.50}',
        description: 'Used to indicate hover state',
      },
      main: {
        type: 'color',
        value: '{colors.teal.100}',
        description: 'Used to indicate inactive state',
      },
      dark: {
        type: 'color',
        value: '{colors.teal.650}',
        description: 'Used to indicate active state',
      },
    },
    warning: {
      light: {
        type: 'color',
        value: '{colors.orange.50}',
        description: 'Used to indicate hover state',
      },
      main: {
        type: 'color',
        value: '{colors.orange.100}',
        description: 'Used to indicate inactive state',
      },
      dark: {
        type: 'color',
        value: '{colors.orange.650}',
        description: 'Used to indicate active state',
      },
    },
    transparent: {
      light: {
        value: 'rgba(23,91,245,0)',
        type: 'color',
        description: 'Used to indicate inactive state',
      },
      main: {
        type: 'color',
        value: 'rgba(23, 91, 245, 0.09)',
        description: 'Used to indicate hover state',
      },
      dark: {
        type: 'color',
        value: 'rgba(23, 91, 245, 0.18)',
        description: 'Used to indicate active state',
      },
    },
    primary: {
      light: {
        type: 'color',
        value: '{colors.blue.400}',
        description: 'used to indicate hover state',
      },
      main: {
        type: 'color',
        value: '{colors.blue.500}',
        description: 'Used to indicate inactive state',
      },
      dark: {
        type: 'color',
        value: '{colors.blue.550}',
        description: 'Used to indicate active state',
      },
    },
    secondary: {
      light: {
        type: 'color',
        value: '{colors.lightPurple.100}',
        description: 'Used to indicate hover state',
      },
      main: {
        type: 'color',
        value: '{colors.lightPurple.200}',
        description: 'Used to indicate inactive state',
      },
      dark: {
        type: 'color',
        value: '{colors.lightPurple.300}',
        description: 'Used to indicate active state',
      },
    },
    inverted: {
      light: {
        type: 'color',
        value: '{colors.teal.400}',
        description: 'Used to indicate inactive',
      },
      main: {
        type: 'color',
        value: '{colors.teal.300}',
        description: 'Used to indicate hover state',
      },
      dark: {
        type: 'color',
        value: '{colors.teal.500}',
        description: 'Used to indicate active state',
      },
    },
    tertiary: {
      light: {
        value: '{colors.neutral.light}',
        type: 'color',
        description: 'Used to indicate inactive state',
      },
      main: {
        type: 'color',
        value: '{colors.blue.50}',
        description: 'Used to indicate hover state',
      },
      dark: {
        type: 'color',
        value: '{colors.blue.100}',
        description: 'Used to indicate active state',
      },
    },
  },
  accents: {
    blue: {
      light: {
        value: '{colors.blue.100}',
        type: 'color',
      },
      main: {
        value: '{colors.blue.150}',
        type: 'color',
      },
      dark: {
        value: '{colors.blue.500}',
        type: 'color',
      },
      contrast: {
        value: '{colors.blue.550}',
        type: 'color',
        description: "AA compliant for small text on 'Light' and 'Main' values of same color ",
      },
    },
    darkBlue: {
      light: {
        value: '{colors.darkBlue.100}',
        type: 'color',
      },
      main: {
        value: '{colors.darkBlue.150}',
        type: 'color',
      },
      dark: {
        value: '{colors.darkBlue.450}',
        type: 'color',
      },
      contrast: {
        value: '{colors.darkBlue.550}',
        type: 'color',
        description: "AA compliant for small text on 'Light' and 'Main' values of same color ",
      },
    },
    purple: {
      light: {
        value: '{colors.purple.100}',
        type: 'color',
      },
      main: {
        value: '{colors.purple.150}',
        type: 'color',
      },
      dark: {
        value: '{colors.purple.500}',
        type: 'color',
      },
      contrast: {
        value: '{colors.purple.550}',
        type: 'color',
        description: "AA compliant for small text on 'Light' and 'Main' values of same color ",
      },
    },
    magenta: {
      light: {
        value: '{colors.magenta.100}',
        type: 'color',
      },
      main: {
        value: '{colors.magenta.200}',
        type: 'color',
      },
      dark: {
        value: '{colors.magenta.550}',
        type: 'color',
      },
      contrast: {
        value: '{colors.magenta.650}',
        type: 'color',
        description: "AA compliant for small text on 'Light' and 'Main' values of same color ",
      },
    },
    orange: {
      light: {
        value: '{colors.orange.100}',
        type: 'color',
      },
      main: {
        value: '{colors.orange.200}',
        type: 'color',
      },
      dark: {
        value: '{colors.orange.550}',
        type: 'color',
      },
      contrast: {
        value: '{colors.orange.700}',
        type: 'color',
        description: "AA compliant for small text on 'Light' and 'Main' values of same color ",
      },
    },
    teal: {
      light: {
        value: '{colors.teal.150}',
        type: 'color',
      },
      main: {
        value: '{colors.teal.250}',
        type: 'color',
      },
      dark: {
        value: '{colors.teal.550}',
        type: 'color',
      },
      contrast: {
        value: '{colors.teal.750}',
        type: 'color',
        description: "AA compliant for small text on 'Light' and 'Main' values of same color ",
      },
    },
    red: {
      light: {
        value: '{colors.red.100}',
        type: 'color',
      },
      main: {
        value: '{colors.red.200}',
        type: 'color',
      },
      dark: {
        value: '{colors.red.550}',
        type: 'color',
      },
      contrast: {
        value: '{colors.red.650}',
        type: 'color',
        description: "AA compliant for small text on 'Light' and 'Main' values of same color ",
      },
    },
    lightPurple: {
      light: {
        value: '{colors.lightPurple.200}',
        type: 'color',
      },
      main: {
        value: '{colors.lightPurple.400}',
        type: 'color',
      },
      dark: {
        value: '{colors.lightPurple.650}',
        type: 'color',
      },
      contrast: {
        value: '{colors.lightPurple.750}',
        type: 'color',
        description: "AA compliant for small text on 'Light' and 'Main' values of same color ",
      },
    },
  },
} as const;

export default palette;
