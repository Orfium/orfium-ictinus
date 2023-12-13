import filter from 'theme/tokens/components/variables/filter';
import type { DotKeys } from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type FilterTokens = DotKeys<typeof filter>;

export const getFilterTokens = (theme: Theme) => {
  return getComponentTokens<FilterTokens>(filter, theme);
};
