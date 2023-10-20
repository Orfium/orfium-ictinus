import button from 'theme/tokens/components/variables/button';
import iconButton from 'theme/tokens/components/variables/iconButton';
import textButton from 'theme/tokens/components/variables/textButton';
import type { DotKeys} from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';

import type { Theme } from '../../theme';

export type ButtonTokens = DotKeys<typeof button>;
export type TextButtonTokens = DotKeys<typeof textButton>;
export type IconButtonTokens = DotKeys<typeof iconButton>;

export const getButtonTokens = (theme: Theme) => {
  return getComponentTokens<ButtonTokens>(button, theme);
};

export const getTextButtonTokens = (theme: Theme) => {
  return getComponentTokens<TextButtonTokens>(textButton, theme);
};

export const getIconButtonTokens = (theme: Theme) => {
  return getComponentTokens<IconButtonTokens>(iconButton, theme);
};
