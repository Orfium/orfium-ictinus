import { colorShades, flatColors } from '../../theme/palette';

export const MD = 'md';
export const SM = 'sm';

export const MD_HEIGHT = 46;
export const SM_HEIGHT = 28;

export const MIN_WIDTH = 150;

export const MULTI_WIDTH = 220;

export const textInputSizes = [MD, SM] as const;
export const textInputStates = ['default', 'pressed', 'error'] as const;

type TextInputType = {
  outlined: {
    border: {
      width: number;
      color: {
        [key in typeof textInputStates[number]]: {
          name: typeof flatColors[number];
          shade: typeof colorShades[number];
        };
      };
    };
  };
};
type TextInputConfig = {
  types: {
    light: TextInputType;
    dark: TextInputType;
  };
};

export const textInputConfig: TextInputConfig = {
  types: {
    light: {
      outlined: {
        border: {
          width: 1,
          color: {
            default: {
              name: 'lightGrey',
              shade: 200,
            },
            pressed: {
              name: 'blue',
              shade: 550,
            },
            error: {
              name: 'red',
              shade: 550,
            },
          },
        },
      },
    },
    dark: {
      outlined: {
        border: {
          width: 1,
          color: {
            default: {
              name: 'darkGrey',
              shade: 500,
            },
            pressed: {
              name: 'blue',
              shade: 350,
            },
            error: {
              name: 'red',
              shade: 200,
            },
          },
        },
      },
    },
  },
};
