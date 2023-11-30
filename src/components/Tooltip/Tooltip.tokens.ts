import tooltip from 'theme/tokens/components/variables/tooltip';
import type { DotKeys } from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type TooltipTokens = DotKeys<typeof tooltip>;

export const getTooltipTokens = (theme: Theme) => {
  return getComponentTokens<TooltipTokens>(tooltip, theme);
};
