import { convertPointsToPixels } from 'theme/utils';

const defaultFontFamily = 'Lato';

export type Typography = {
  globalFontSize: number;
  fontSizes: {
    10: number;
    11: number;
    12: number;
    13: number;
    14: number;
    15: number;
    16: number;
    18: number;
    20: number;
    22: number;
    24: number;
    26: number;
    28: number;
    32: number;
  };
  weights: {
    bold: string;
    light: string;
    regular: string;
    black: string;
  };
  fontFamily: string;
};

const fontSizes = {
  10: convertPointsToPixels(10),
  11: convertPointsToPixels(11),
  12: convertPointsToPixels(12),
  13: convertPointsToPixels(13),
  14: convertPointsToPixels(14),
  15: convertPointsToPixels(15),
  16: convertPointsToPixels(16),
  18: convertPointsToPixels(18),
  20: convertPointsToPixels(20),
  22: convertPointsToPixels(22),
  24: convertPointsToPixels(24),
  26: convertPointsToPixels(26),
  28: convertPointsToPixels(28),
  32: convertPointsToPixels(32),
};

const weights = {
  bold: '700',
  light: '300',
  regular: '400',
  black: '900',
};

const typography: Typography = {
  globalFontSize: 16,
  fontSizes,
  weights,
  fontFamily: defaultFontFamily,
};

export default typography;
