import { rem } from 'theme/utils';

const defaultFontFamily = 'Roboto';

const weights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
  black: 900,
} as const;

export type Typography = {
  globalFontSize: number;
  fontSizes: {
    10: string;
    11: string;
    12: string;
    13: string;
    14: string;
    15: string;
    16: string;
    18: string;
    20: string;
    22: string;
    24: string;
    26: string;
    28: string;
    32: string;
  };
  weights: typeof weights;
  fontFamily: string;
};

const fontSizes = {
  10: rem('10px'),
  11: rem('11px'),
  12: rem('12px'),
  13: rem('13px'),
  14: rem('14px'),
  15: rem('15px'),
  16: rem('16px'),
  18: rem('18px'),
  20: rem('20px'),
  22: rem('22px'),
  24: rem('24px'),
  26: rem('26px'),
  28: rem('28px'),
  32: rem('32px'),
};

const typography: Typography = {
  globalFontSize: 16,
  fontSizes,
  weights,
  fontFamily: defaultFontFamily,
};

export default typography;
