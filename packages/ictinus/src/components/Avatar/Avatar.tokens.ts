import type { DotKeys } from '@orfium/tokens';
import { avatar, getComponentTokens, rem } from '@orfium/tokens';

import type { Theme } from '../../theme';

const AVATAR_ICON_SIZE_FACTOR = 0.8;
const AVATAR_STACK_OVERLAP_FACTOR = 0.8;

export const parseAvatarIconSize = (val: string) => parseFloat(val) * AVATAR_ICON_SIZE_FACTOR;
export const parseAvatarStackSize = (val: string) =>
  rem(parseFloat(val) * AVATAR_STACK_OVERLAP_FACTOR);

export type AvatarTokens = DotKeys<typeof avatar>;

export const getAvatarTokens = (theme: Theme) => {
  return getComponentTokens<AvatarTokens>(avatar, theme);
};
