import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { flex } from 'theme/functions';

import { AVATAR_SIZE } from '../Avatar.style';
import type { AvatarSizes } from '../Avatar.types';

export const avatarStackStyle = ({ size }: { size: AvatarSizes }): SerializedStyles => css`
  ${flex};

  div:last-child {
    width: ${AVATAR_SIZE[size]};
  }
`;

export const avatarWrapperStyle = ({
  zIndex,
  size,
}: {
  zIndex: number;
  size: AvatarSizes;
}): SerializedStyles => css`
  z-index: ${zIndex};
  width: calc(${AVATAR_SIZE[size]} * 0.8);
`;
