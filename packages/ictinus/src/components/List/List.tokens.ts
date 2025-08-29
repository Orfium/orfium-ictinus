import { listItem } from '@orfium/tokens';
import type { DotKeys } from '@orfium/tokens';
import { getComponentTokens } from '@orfium/tokens';

import type { Theme } from '../../theme';

export type ListItemTokens = DotKeys<typeof listItem>;

export const getListItemTokens = (theme: Theme) => {
  return getComponentTokens<ListItemTokens>(listItem, theme);
};
