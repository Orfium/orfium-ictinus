import link from 'theme/tokens/components/variables/link';
import type { DotKeys } from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type LinkTokens = DotKeys<typeof link>;

export const getLinkTokens = (theme: Theme) => {
  return getComponentTokens<LinkTokens>(link, theme);
};
