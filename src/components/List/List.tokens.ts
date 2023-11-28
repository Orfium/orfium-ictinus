import listItem from 'theme/tokens/components/variables/listItem';
import menu from 'theme/tokens/components/variables/menu';
import type { DotKeys } from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type ListTokens = DotKeys<typeof menu>;
export type ListItemTokens = DotKeys<typeof listItem>;

export const getListTokens = (theme: Theme) => {
  return getComponentTokens<ListTokens>(menu, theme);
};

export const getListItemTokens = (theme: Theme) => {
  return getComponentTokens<ListItemTokens>(listItem, theme);
};
