import field from 'theme/tokens/components/variables/field';
import type { DotKeys } from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type TextInputBaseTokens = DotKeys<typeof field>;

export const getTextInputBaseTokens = (theme: Theme) => {
  return getComponentTokens<TextInputBaseTokens>(field, theme);
};
