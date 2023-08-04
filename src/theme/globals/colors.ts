import colorsFigma from './constants/colors';
import { DotKeys, getTokensValue } from '../tokens/utils';

export type ColorsKey = DotKeys<typeof colorsFigma>;

export type Colors = {
  get: (val: ColorsKey, fn?: (val: string) => unknown) => string;
};

const colors: Colors = {
  get: getTokensValue(colorsFigma),
};

export default colors;
