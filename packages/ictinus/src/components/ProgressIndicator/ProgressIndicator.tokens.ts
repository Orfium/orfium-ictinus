import { progressIndicator } from '@orfium/tokens';
import type { DotKeys } from '@orfium/tokens';
import { getComponentTokens } from '@orfium/tokens';

import type { Theme } from '../../theme';

export type ProgressIndicatorTokens = DotKeys<typeof progressIndicator>;

export const getProgressIndicatorTokens = (theme: Theme) => {
  return getComponentTokens<ProgressIndicatorTokens>(progressIndicator, theme);
};
