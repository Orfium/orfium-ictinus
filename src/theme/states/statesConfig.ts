import { colorSchemes, colorShades, flatColors } from '../palette';

type StateConfig = {
  hover: {
    backgroundColor: {
      step: number;
    };
  };
  focus: {
    border: {
      width: {
        step: number;
      };
      color: {
        name: typeof flatColors[number];
        shade: typeof colorShades[number];
      };
    };
  };
  pressed: {
    backgroundColor: {
      step: number;
    };
  };
  disabled: {
    opacity: {
      amount: number;
    };
    cursor: {
      name: string;
    };
  };
};

export const lightStatesConfig: StateConfig = {
  hover: {
    backgroundColor: {
      step: 50,
    },
  },
  focus: {
    border: {
      width: {
        step: 1,
      },
      color: {
        name: 'magenta',
        shade: 500,
      },
    },
  },
  pressed: {
    backgroundColor: {
      step: 100,
    },
  },
  disabled: {
    opacity: {
      amount: 0.5,
    },
    cursor: {
      name: 'not-allowed',
    },
  },
};

export const darkStatesConfig: StateConfig = {
  hover: {
    backgroundColor: {
      step: 50,
    },
  },
  focus: {
    border: {
      width: {
        step: 1,
      },
      color: {
        name: 'magenta',
        shade: 500,
      },
    },
  },
  pressed: {
    backgroundColor: {
      step: 100,
    },
  },
  disabled: {
    opacity: {
      amount: 0.5,
    },
    cursor: {
      name: 'not-allowed',
    },
  },
};

export const statesConfig: Record<typeof colorSchemes[number], StateConfig> = {
  light: lightStatesConfig,
  dark: darkStatesConfig,
};
