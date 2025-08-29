import listItem from 'theme/tokens/components/variables/listItem';
import type { DotKeys } from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type ListItemTokens = DotKeys<typeof listItem>;

export const getListItemTokens = (theme: Theme) => {
  return getComponentTokens<ListItemTokens>(listItem, theme);
};
