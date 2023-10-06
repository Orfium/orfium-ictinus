import tooltip from 'theme/tokens/components/variables/tooltip';
import { getComponentTokens, DotKeys } from 'theme/tokens/utils';

import { Theme } from '../../theme';

export type TooltipTokens = DotKeys<typeof tooltip>;

export const getTooltipTokens = (theme: Theme) => {
  return getComponentTokens(tooltip, theme);
};
