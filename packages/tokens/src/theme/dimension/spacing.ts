import type { DotKeys } from '../tokens/utils';
import { getTokensValue } from '../tokens/utils';

import spacingFigma from './variables/spacing';

export type DimensionSpacingKey = DotKeys<typeof spacingFigma>;

export type DimensionSpacing = {
  get: (val: DimensionSpacingKey, fn?: (val: string) => unknown) => string;
};

const spacing: DimensionSpacing = {
  get: getTokensValue(spacingFigma),
};

export default spacing;
