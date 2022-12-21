const palette = {
  systemic: {
    light: {
      neutral: {
        light: {
          type: 'color',
          value: '{colors.neutral.light}',
        },
        main: {
          type: 'color',
          value: '{colors.blue.50}',
        },
        dark: {
          type: 'color',
          value: '{colors.blue.100}',
        },
      },
      tertiary: {
        light: {
          value: 'rgba(23,91,245,0)',
          type: 'color',
        },
        main: {
          type: 'color',
          value: 'rgba(23,91,245,0.07)',
        },
        dark: {
          type: 'color',
          value: 'rgba(23,91,245,0.14)',
        },
      },
      primary: {
        light: {
          type: 'color',
          value: '{colors.blue.400}',
        },
        main: {
          type: 'color',
          value: '{colors.blue.500}',
        },
        dark: {
          type: 'color',
          value: '{colors.blue.600}',
        },
      },
      secondary: {
        light: {
          type: 'color',
          value: '{colors.lightPurple.100}',
        },
        main: {
          type: 'color',
          value: '{colors.lightPurple.200}',
        },
        dark: {
          type: 'color',
          value: '{colors.lightPurple.300}',
        },
      },
      upsell: {
        light: {
          type: 'color',
          value: '{colors.magenta.300}',
        },
        main: {
          type: 'color',
          value: '{colors.magenta.500}',
        },
        dark: {
          type: 'color',
          value: '{colors.magenta.650}',
        },
      },
    },
    error: {
      light: {
        type: 'color',
        value: '{colors.red.50}',
      },
      main: {
        type: 'color',
        value: '{colors.red.100}',
      },
      dark: {
        type: 'color',
        value: '{colors.red.550}',
      },
    },
    success: {
      light: {
        type: 'color',
        value: '{colors.teal.50}',
      },
      main: {
        type: 'color',
        value: '{colors.teal.500}',
      },
      dark: {
        type: 'color',
        value: '{colors.teal.650}',
      },
    },
    warning: {
      light: {
        type: 'color',
        value: '{colors.orange.50}',
      },
      main: {
        type: 'color',
        value: '{colors.orange.500}',
      },
      dark: {
        type: 'color',
        value: '{colors.orange.650}',
      },
    },
    inverted: {
      neutral: {
        light: {
          type: 'color',
          value: '{colors.lightPurple.850}',
        },
        main: {
          type: 'color',
          value: '{colors.lightPurple.800}',
        },
        dark: {
          type: 'color',
          value: '{colors.lightPurple.750}',
        },
      },
      tertiary: {
        light: {
          value: 'rgba(23,91,245,0)',
          type: 'color',
        },
        main: {
          type: 'color',
          value: 'rgba(168,177,255,0.07)',
        },
        dark: {
          type: 'color',
          value: 'rgba(168,177,255,0.14)',
        },
      },
      primary: {
        light: {
          type: 'color',
          value: '{colors.teal.400}',
        },
        main: {
          type: 'color',
          value: '{colors.teal.300}',
        },
        dark: {
          type: 'color',
          value: '{colors.teal.500}',
        },
      },
      secondary: {
        light: {
          type: 'color',
          value: '{colors.lightPurple.800}',
        },
        main: {
          type: 'color',
          value: '{colors.lightPurple.750}',
        },
        dark: {
          type: 'color',
          value: '{colors.lightPurple.900}',
        },
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
