import { filter } from '@orfium/tokens';
import type { DotKeys } from '@orfium/tokens';
import { getComponentTokens } from '@orfium/tokens';

import type { Theme } from '../../theme';

export type FilterTokens = DotKeys<typeof filter>;

export const getFilterTokens = (theme: Theme) => {
  return getComponentTokens<FilterTokens>(filter, theme);
};
