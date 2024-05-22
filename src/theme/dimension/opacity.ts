import type { DotKeys } from 'theme/tokens/utils';
import { FigmaTokenValueType, getFigmaTokensValue } from 'theme/utils';

import opacityFigma from './variables/opacity';

export type DimensionOpacityKey = DotKeys<typeof opacityFigma>;

export type DimensionOpacity = {
  get: (val: DimensionOpacityKey, fn?: (val: string) => unknown) => string;
};

const opacity: DimensionOpacity = {
  get: getFigmaTokensValue<DimensionOpacityKey>(opacityFigma, FigmaTokenValueType.String),
};

export default opacity;
