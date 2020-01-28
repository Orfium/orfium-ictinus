import { convertPointstoPixels } from 'src/theme/utils';

const defaultFontFamily = '"Lato"';

export type Typography = {
  globalFontSize: number;
  font: {
    800: string;
    650: string;
    600: string;
    500: string;
    350: string;
    300: string;
    250: string;
    200: string;
    150: string;
    100: string;
  };
  fontSizes: {
    800: number;
    500: number;
    400: number;
    350: number;
    300: number;
    200: number;
    150: number;
    100: number;
  };
  weights: {
    bold: string;
    light: string;
    regular: string;
    bolder: string;
  };
  fontFamily: string;
};

const typography = (): Typography => {
  const fontSizes = {
    800: convertPointstoPixels(32),
    500: convertPointstoPixels(20),
    400: convertPointstoPixels(18),
    350: convertPointstoPixels(16),
    300: convertPointstoPixels(15),
    200: convertPointstoPixels(13),
    150: convertPointstoPixels(12),
    100: convertPointstoPixels(11),
  };

  const weights = {
    bold: '700',
    light: '300',
    regular: '400',
    bolder: '900',
  };

  return {
    globalFontSize: 16,
    font: {
      800: `normal ${weights.light} ${fontSizes[800]}px ${defaultFontFamily}`,
      650: `normal ${weights.bold} ${fontSizes[500]}px ${defaultFontFamily}`,
      600: `normal ${weights.regular} ${fontSizes[500]}px ${defaultFontFamily}`,
      500: `normal ${weights.regular} ${fontSizes[400]}px ${defaultFontFamily}`,
      350: `normal ${weights.regular} ${fontSizes[350]}px ${defaultFontFamily}`,
      300: `normal ${weights.bolder} ${fontSizes[300]}px ${defaultFontFamily}`,
      250: `normal ${weights.regular} ${fontSizes[200]}px ${defaultFontFamily}`,
      200: `normal ${weights.bolder} ${fontSizes[150]}px ${defaultFontFamily}`,
      150: `normal ${weights.bold} ${fontSizes[150]}px ${defaultFontFamily}`,
      100: `normal ${weights.bold} ${fontSizes[100]}px ${defaultFontFamily}`,
    },
    fontSizes,
    weights,
    fontFamily: defaultFontFamily,
  };
};

export default typography();
