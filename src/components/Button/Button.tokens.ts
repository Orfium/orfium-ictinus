import button from 'theme/tokens/components/variables/button';
import textButton from 'theme/tokens/components/variables/textButton';
import type { DotKeys} from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type ButtonTokens = DotKeys<typeof button>;
export type TextButtonTokens = DotKeys<typeof textButton>;

export const getButtonTokens = (theme: Theme) => {
  return getComponentTokens<ButtonTokens>(button, theme);
};

export const getTextButtonTokens = (theme: Theme) => {
  return getComponentTokens<TextButtonTokens>(textButton, theme);
};
