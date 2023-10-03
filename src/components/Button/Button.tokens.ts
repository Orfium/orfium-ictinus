import button from 'theme/tokens/components/variables/button';
import iconButton from 'theme/tokens/components/variables/iconButton';
import textButton from 'theme/tokens/components/variables/textButton';
import { DotKeys, getComponentTokens } from 'theme/tokens/utils';

import { Theme } from '../../theme';

export type ButtonTokens = DotKeys<typeof button>;
export type TextButtonTokens = DotKeys<typeof textButton>;
export type IconButtonTokens = DotKeys<typeof iconButton>;

export const getButtonTokens = (theme: Theme) => {
  return getComponentTokens(button, theme);
};

export const getTextButtonTokens = (theme: Theme) => {
  return getComponentTokens(textButton, theme);
};

export const getIconButtonTokens = (theme: Theme) => {
  return getComponentTokens(iconButton, theme);
};
