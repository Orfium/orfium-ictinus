import button from 'theme/tokens/components/variables/button';
import type { DotKeys } from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type ButtonTokens = DotKeys<typeof button>;

export const getButtonTokens = (theme: Theme) => {
  return getComponentTokens<ButtonTokens>(button, theme);
};
