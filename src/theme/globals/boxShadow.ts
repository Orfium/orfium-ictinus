import { FigmaTokenValueType, getFigmaTokensValue } from '../utils';
import boxShadowFigma from './constants/boxShadow';

export type BoxShadowKey = keyof typeof boxShadowFigma;

export type BoxShadow = {
  get: (val: BoxShadowKey, fn?: (val: string) => unknown) => string;
};

const boxShadow: BoxShadow = {
  get: getFigmaTokensValue<BoxShadowKey>(boxShadowFigma, FigmaTokenValueType.BoxShadow),
};

export default boxShadow;