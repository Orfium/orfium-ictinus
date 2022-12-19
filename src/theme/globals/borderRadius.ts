import { FigmaTokenValueType, getFigmaTokensValue } from '../utils';
import borderRadiusFigma from './constants/borderRadius';

export type BorderRadiusKey = keyof typeof borderRadiusFigma;

export type BorderRadius = {
  get: (val: BorderRadiusKey) => string;
};

const borderRadius: BorderRadius = {
  get: getFigmaTokensValue<BorderRadiusKey>(borderRadiusFigma, FigmaTokenValueType.Pixels),
};

export default borderRadius;
