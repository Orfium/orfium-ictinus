import borderWidthFigma from './constants/borderWidth';
import { FigmaTokenValueType, getFigmaTokensValue } from './utils';

export type BorderWidthKey = keyof typeof borderWidthFigma;

export type BorderWidth = {
  get: (val: BorderWidthKey) => string;
};

const borderWidth: BorderWidth = {
  get: getFigmaTokensValue<BorderWidthKey>(borderWidthFigma, FigmaTokenValueType.Pixels),
};

export default borderWidth;
