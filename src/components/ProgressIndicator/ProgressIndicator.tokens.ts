import progressIndicator from 'theme/tokens/components/variables/progressIndicator';
import type { DotKeys } from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type ProgressIndicatorTokens = DotKeys<typeof progressIndicator>;

export const getProgressIndicatorTokens = (theme: Theme) => {
  return getComponentTokens<ProgressIndicatorTokens>(progressIndicator, theme);
};
