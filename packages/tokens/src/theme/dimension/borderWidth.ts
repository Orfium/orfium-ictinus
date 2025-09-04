import type { DotKeys } from '../tokens/utils';
import { getTokensValue } from '../tokens/utils';

import borderWidthFigma from './variables/borderWidth';

export type DimensionBorderWidthKey = DotKeys<typeof borderWidthFigma>;

export type DimensionBorderWidth = {
  get: (val: DimensionBorderWidthKey, fn?: (val: string) => unknown) => string;
};

const borderWidth: DimensionBorderWidth = {
  get: getTokensValue(borderWidthFigma),
};

export default borderWidth;
