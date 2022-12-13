import boxShadowFigma from './constants/boxShadow';
import { FigmaTokenValueType, getFigmaTokensValue } from './utils';

export type BoxShadowKey = keyof typeof boxShadowFigma;

export type BoxShadow = {
  get: (val: BoxShadowKey) => string;
};

const boxShadow: BoxShadow = {
  get: getFigmaTokensValue<BoxShadowKey>(boxShadowFigma, FigmaTokenValueType.BoxShadow),
};

export default boxShadow;
