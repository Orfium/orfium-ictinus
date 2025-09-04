import { search } from '@orfium/tokens';
import type { DotKeys } from '@orfium/tokens';
import { getComponentTokens } from '@orfium/tokens';

import type { Theme } from '../../theme';

export type SearchTokens = DotKeys<typeof search>;

export const getSearchTokens = (theme: Theme) => {
  return getComponentTokens<SearchTokens>(search, theme);
};
