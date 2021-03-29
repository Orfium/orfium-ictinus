import { rem } from 'polished';

const defaultFontFamily = 'Lato';

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
  weights: {
    bold: number;
    light: number;
    regular: number;
    black: number;
  };
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

const weights = {
  bold: 700,
  light: 300,
  regular: 400,
  //TODO: Introduce new property for weight 500 (e.g. usage of 500 in Asset.style.ts based on provided designs)
  black: 700,
};

const typography: Typography = {
  globalFontSize: 16,
  fontSizes,
  weights,
  fontFamily: defaultFontFamily,
};

export default typography;
