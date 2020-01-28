import { convertPointsToPixels } from 'src/theme/utils';

const defaultFontFamily = 'Lato';

export type fontItem = {
  fontStyle: string;
  fontWeight: string;
  fontSize: number;
  fontFamily: string;
};

export type Typography = {
  globalFontSize: number;
  font: {
    h1: fontItem;
    h2: fontItem;
    h3: fontItem;
    h4: fontItem;
    h5: fontItem;
    h6: fontItem;
    h7: fontItem;
  };
  fontSizes: {
    xxxLarge: number;
    xxLarge: number;
    xLarge: number;
    normal: number;
    small: number;
    xSmall: number;
    xxSmall: number;
    xxxSmall: number;
  };
  weights: {
    bold: string;
    light: string;
    regular: string;
    bolder: string;
  };
  fontFamily: string;
};

const fontSizes = {
  xxxLarge: convertPointsToPixels(32),
  xxLarge: convertPointsToPixels(20),
  xLarge: convertPointsToPixels(18),
  normal: convertPointsToPixels(16),
  small: convertPointsToPixels(15),
  xSmall: convertPointsToPixels(13),
  xxSmall: convertPointsToPixels(12),
  xxxSmall: convertPointsToPixels(11),
};

const weights = {
  bold: '700',
  light: '300',
  regular: '400',
  bolder: '900',
};

export default {
  globalFontSize: 16,
  font: {
    h1: {
      fontStyle: 'normal',
      fontWeight: weights.light,
      fontSize: fontSizes.xxxLarge,
      fontFamily: defaultFontFamily,
    },

    h2: {
      fontStyle: 'normal',
      fontWeight: weights.bold,
      fontSize: fontSizes.xxLarge,
      fontFamily: defaultFontFamily,
    },

    h3: {
      fontStyle: 'normal',
      fontWeight: weights.regular,
      fontSize: fontSizes.xxLarge,
      fontFamily: defaultFontFamily,
    },

    h4: {
      fontStyle: 'normal',
      fontWeight: weights.regular,
      fontSize: fontSizes.xLarge,
      fontFamily: defaultFontFamily,
    },

    h5: {
      fontStyle: 'normal',
      fontWeight: weights.regular,
      fontSize: fontSizes.normal,
      fontFamily: defaultFontFamily,
    },

    h6: {
      fontStyle: 'normal',
      fontWeight: weights.bolder,
      fontSize: fontSizes.small,
      fontFamily: defaultFontFamily,
    },

    h7: {
      fontStyle: 'normal',
      fontWeight: weights.regular,
      fontSize: fontSizes.xSmall,
      fontFamily: defaultFontFamily,
    },
  },
  fontSizes,
  weights,
  fontFamily: defaultFontFamily,
};
