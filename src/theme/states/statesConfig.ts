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
};
