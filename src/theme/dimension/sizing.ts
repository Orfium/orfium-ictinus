import type { DotKeys } from 'theme/tokens/utils';
import { getTokensValue } from 'theme/tokens/utils';

import sizingFigma from './variables/sizing';

export type DimensionSizingKey = DotKeys<typeof sizingFigma>;

export type DimensionSizing = {
  get: (val: DimensionSizingKey, fn?: (val: string) => unknown) => string;
};

const sizing: DimensionSizing = {
  get: getTokensValue(sizingFigma),
};

export default sizing;
