import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { flex } from 'theme/functions';

import { AvatarTokens, getAvatarTokens, parseAvatarStackSize } from '../Avatar.tokens';
import { AvatarSizes } from '../Avatar.types';

export const avatarStackStyle =
  ({ size }: { size: AvatarSizes }) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${flex};

      div:last-child {
        width: ${getAvatarTokens(theme)(`size.${size}` as AvatarTokens)};
      }
    `;

export const avatarWrapperStyle =
  ({ zIndex, size }: { zIndex: number; size: AvatarSizes }) =>
  (theme: Theme): SerializedStyles =>
    css`
      z-index: ${zIndex};
      width: ${getAvatarTokens(theme)(`size.${size}` as AvatarTokens, parseAvatarStackSize)};
    `;
