import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { flex } from 'theme/functions';

import type { AvatarTokens} from '../Avatar.tokens';
import { getAvatarTokens, parseAvatarStackSize } from '../Avatar.tokens';
import type { AvatarSizes } from '../Avatar.types';

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
