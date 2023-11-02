import progressIndicator from 'theme/tokens/components/variables/progressIndicator';
import { getComponentTokens, DotKeys } from 'theme/tokens/utils';

import { Theme } from '../../theme';

export type ProgressIndicatorTokens = DotKeys<typeof progressIndicator>;

export const getProgressIndicatorTokens = (theme: Theme) => {
  return getComponentTokens<ProgressIndicatorTokens>(progressIndicator, theme);
};
