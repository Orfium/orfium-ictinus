import borderRadiusFigma from './constants/borderRadius';
import { FigmaTokenValueType, getFigmaTokensValue } from '../utils';

export type BorderRadiusKey = keyof typeof borderRadiusFigma;

export type BorderRadius = {
  get: (val: BorderRadiusKey, fn?: (val: string) => unknown) => string;
};

const borderRadius: BorderRadius = {
  get: getFigmaTokensValue<BorderRadiusKey>(borderRadiusFigma, FigmaTokenValueType.Pixels),
};

export default borderRadius;
