import { link } from '@orfium/tokens';
import type { DotKeys } from '@orfium/tokens';
import { getComponentTokens } from '@orfium/tokens';

import type { Theme } from '../../theme';

export type LinkTokens = DotKeys<typeof link>;

export const getLinkTokens = (theme: Theme) => {
  return getComponentTokens<LinkTokens>(link, theme);
};
