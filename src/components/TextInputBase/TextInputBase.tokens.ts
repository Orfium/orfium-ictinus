import field from 'theme/tokens/components/variables/field';
import { getComponentTokens, DotKeys } from 'theme/tokens/utils';

import { Theme } from '../../theme';

export type TextInputBaseTokens = DotKeys<typeof field>;

export const getTextInputBaseTokens = (theme: Theme) => {
  return getComponentTokens<TextInputBaseTokens>(field, theme);
};
