import avatar from 'theme/tokens/components/variables/avatar';
import avatarText from 'theme/tokens/components/variables/avatarText';
import type { DotKeys } from 'theme/tokens/utils';
import { getComponentTokens } from 'theme/tokens/utils';
import { rem } from 'theme/utils';

import type { Theme } from '../../theme';

const AVATAR_ICON_SIZE_FACTOR = 0.8;
const AVATAR_STACK_OVERLAP_FACTOR = 0.8;

export const parseAvatarIconSize = (val: string) => parseFloat(val) * AVATAR_ICON_SIZE_FACTOR;
export const parseAvatarStackSize = (val: string) =>
  rem(parseFloat(val) * AVATAR_STACK_OVERLAP_FACTOR);

export type AvatarTokens = DotKeys<typeof avatar>;
export type AvatarTextTokens = DotKeys<typeof avatarText>;

export const getAvatarTokens = (theme: Theme) => {
  return getComponentTokens<AvatarTokens>(avatar, theme);
};

export const getAvatarTextTokens = (theme: Theme) => {
  return getComponentTokens<AvatarTextTokens>(avatarText, theme);
};
