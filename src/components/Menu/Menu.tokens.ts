import type { Theme } from 'theme';
import menu from 'theme/tokens/components/variables/menu';
import type { DotKeys } from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

export type MenuTokens = DotKeys<typeof menu>;

export const getMenuTokens = (theme: Theme) => {
  return getComponentTokens<MenuTokens>(menu, theme);
};
