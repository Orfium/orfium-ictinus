import type { DotKeys } from '@orfium/tokens';
import { field, getComponentTokens } from '@orfium/tokens';

import type { Theme } from '../../theme';

export type TextInputBaseTokens = DotKeys<typeof field>;

export const getTextInputBaseTokens = (theme: Theme) => {
  return getComponentTokens<TextInputBaseTokens>(field, theme);
};
