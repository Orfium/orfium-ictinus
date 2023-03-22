import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { flex } from 'theme/functions';

import getTokens from '../Avatar.tokens';
import { AvatarSizes } from '../Avatar.types';

export const avatarStackStyle =
  ({ size }: { size: AvatarSizes }) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getTokens(theme);

    return css`
      ${flex};

      div:last-child {
        width: ${tokens.size[size]};
      }
    `;
  };

export const avatarWrapperStyle =
  ({ zIndex, size }: { zIndex: number; size: AvatarSizes }) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getTokens(theme);

    return css`
      z-index: ${zIndex};
      width: ${tokens.avatarStackSize[size]};
    `;
  };
