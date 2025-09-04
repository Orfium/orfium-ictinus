import colorsFigma from './constants/colors';
import type { DotKeys } from '../tokens/utils';
import { getTokensValue } from '../tokens/utils/semantic';

export type ColorsKey = DotKeys<typeof colorsFigma>;

export type Colors = {
  get: (val: ColorsKey, fn?: (val: string) => unknown) => string;
};

const colors: Colors = {
  get: getTokensValue(colorsFigma),
};

export default colors;
