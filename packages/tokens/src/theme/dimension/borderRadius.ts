import type { DotKeys } from '../tokens/utils';
import { getTokensValue } from '../tokens/utils';

import borderRadiusFigma from './variables/borderRadius';

export type DimensionBorderRadiusKey = DotKeys<typeof borderRadiusFigma>;

export type DimensionBorderRadius = {
  get: (val: DimensionBorderRadiusKey, fn?: (val: string) => unknown) => string;
};

const borderRadius: DimensionBorderRadius = {
  get: getTokensValue(borderRadiusFigma),
};

export default borderRadius;
