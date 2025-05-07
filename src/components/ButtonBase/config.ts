import { colorShades, flatColors } from '../../theme/palette';

export const LG = 'lg';
export const MD = 'md';
export const SM = 'sm';

export const buttonSizes = [LG, MD, SM] as const;

type ButtonConfig = {
  sizes: {
    [key in (typeof buttonSizes)[number] | 'default']: number;
  };
  fontSize: {
    [key in typeof SM | 'default']: number;
  };
  types: {
    link: {
      color: {
        name: (typeof flatColors)[number];
        shade: (typeof colorShades)[number];
      };
    };
    outlined: {
      border: {
        width: number;
      };
    };
  };
};

export const buttonConfig: ButtonConfig = {
  sizes: {
    lg: 56,
    md: 46,
    sm: 36,
    default: 46,
  },
  fontSize: {
    sm: 13,
    default: 16,
  },
  types: {
    link: {
      color: {
        name: 'blue',
        shade: 550,
      },
    },
    outlined: {
      border: {
        width: 1,
      },
    },
  },
};
