import listItem from 'theme/tokens/components/variables/listItem';
import menu from 'theme/tokens/components/variables/menu';
import { getComponentTokens, DotKeys } from 'theme/tokens/utils';

import { Theme } from '../../theme';

export type ListTokens = DotKeys<typeof menu>;
export type ListItemTokens = DotKeys<typeof listItem>;

export const getListTokens = (
  theme: Theme
): ((path: ListTokens, fn?: (val: string) => any) => string) => {
  return getComponentTokens(menu, theme);
};

export const getListItemsTokens = (
  theme: Theme
): ((path: ListItemTokens, fn?: (val: string) => any) => string) => {
  return getComponentTokens(listItem, theme);
};
