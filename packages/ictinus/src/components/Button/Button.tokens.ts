import { button } from '@orfium/tokens';
import type { DotKeys } from '@orfium/tokens';
import { getComponentTokens } from '@orfium/tokens';

import type { Theme } from '../../theme';

export type ButtonTokens = DotKeys<typeof button>;

export const getButtonTokens = (theme: Theme) => {
  return getComponentTokens<ButtonTokens>(button, theme);
};
