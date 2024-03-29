import sizingFigma from './constants/sizing';
import { FigmaTokenValueType, getFigmaTokensValue } from '../utils';

export type SizingKey = keyof typeof sizingFigma;

export type Sizing = {
  get: (val: SizingKey, fn?: (val: string) => unknown) => string;
};

const sizing: Sizing = {
  get: getFigmaTokensValue<SizingKey>(sizingFigma, FigmaTokenValueType.Pixels),
};

export default sizing;
