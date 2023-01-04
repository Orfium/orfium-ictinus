import { css, SerializedStyles } from '@emotion/react';
import { flex } from 'theme/functions';

import tokens from '../Avatar.tokens';
import { AvatarSizes } from '../Avatar.types';

export const avatarStackStyle =
  ({ size }: { size: AvatarSizes }) =>
  (): SerializedStyles =>
    css`
      ${flex};

      div:last-child {
        width: ${tokens.size[size]};
      }
    `;

export const avatarWrapperStyle =
  ({ zIndex, size }: { zIndex: number; size: AvatarSizes }) =>
  (): SerializedStyles =>
    css`
      z-index: ${zIndex};
      width: ${tokens.avatarStackSize[size]};
    `;
