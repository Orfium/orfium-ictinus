import type { DotKeys } from '../tokens/utils';
import { getTokensValue } from '../tokens/utils';

import minHeightFigma from './variables/minHeight';

export type DimensionMinHeightKey = DotKeys<typeof minHeightFigma>;

export type DimensionMinHeight = {
  get: (val: DimensionMinHeightKey, fn?: (val: string) => unknown) => string;
};

const minHeight: DimensionMinHeight = {
  get: getTokensValue(minHeightFigma),
};

export default minHeight;
