import link from 'theme/tokens/components/variables/link';
import { getComponentTokens, DotKeys } from 'theme/tokens/utils';

import { Theme } from '../../theme';

export type LinkTokens = DotKeys<typeof link>;

export const getLinkTokens = (theme: Theme) => {
  return getComponentTokens<LinkTokens>(link, theme);
};
