import { colorShades, flatColors } from '../../theme/palette';

export const MD = 'md';
export const SM = 'sm';

export const MD_HEIGHT = 46;
export const SM_HEIGHT = 36;

export const MIN_WIDTH = 266;


export const textInputSizes = [MD, SM] as const;
export const textInputStates = ['default', 'pressed', 'error'] as const;

type TextInputConfig = {
  types: {
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
};

export const textInputConfig: TextInputConfig = {
  types: {
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
};
