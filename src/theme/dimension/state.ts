import type { DotKeys } from 'theme/tokens/utils';
import { getTokensValue } from 'theme/tokens/utils';

import stateFigma from './variables/state';

export type DimensionStateKey = DotKeys<typeof stateFigma>;

export type DimensionState = {
  get: (val: DimensionStateKey, fn?: (val: string) => unknown) => string;
};

const state: DimensionState = {
  get: getTokensValue(stateFigma),
};

export default state;
