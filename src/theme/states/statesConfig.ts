import { colorShades, flatColors } from '../palette';

type StatesConfig = {
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

export const statesConfig: StatesConfig = {
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
