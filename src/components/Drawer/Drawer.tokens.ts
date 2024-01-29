import drawer from 'theme/tokens/components/variables/drawer';
import type { DotKeys } from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type DrawerTokens = DotKeys<typeof drawer>;

export const getDrawerTokens = (theme: Theme) => {
  return getComponentTokens<DrawerTokens>(drawer, theme);
};
