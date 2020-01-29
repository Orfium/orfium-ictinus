import { convertPointstoPixels } from 'theme/utils';

const defaultFontFamily = '"Lato"';

const typography: Typography = {
  globalFontSize: 16,
  font800: convertPointstoPixels(32),
  font500: convertPointstoPixels(20),
  font400: convertPointstoPixels(18),
  font350: convertPointstoPixels(16),
  font300: convertPointstoPixels(15),
  font200: convertPointstoPixels(13),
  font150: convertPointstoPixels(12),
  font100: convertPointstoPixels(11),
  weights: {
    bold: '600',
    light: '400',
    regular: '400',
    bolder: '400',
  },
  fontFamily: defaultFontFamily,
};

export type Typography = {};

export default typography;
