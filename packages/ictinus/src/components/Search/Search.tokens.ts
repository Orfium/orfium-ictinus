import search from 'theme/tokens/components/variables/search';
import type { DotKeys } from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type SearchTokens = DotKeys<typeof search>;

export const getSearchTokens = (theme: Theme) => {
  return getComponentTokens<SearchTokens>(search, theme);
};
