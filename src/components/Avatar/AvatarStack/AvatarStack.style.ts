import { css, SerializedStyles } from '@emotion/react';
import { flex } from 'theme/functions';
import { rem } from 'theme/utils';

import { AvatarSizes } from '../Avatar';
import { sizeBasedOnProp } from '../Avatar.style';

const OVERLAP_FACTOR = 0.8;

export const avatarStackStyle = ({ size }: { size: AvatarSizes }) => (): SerializedStyles =>
  css`
    ${flex};

    div:last-child {
      width: ${rem(sizeBasedOnProp(size))};
    }
  `;

export const avatarWrapperStyle = ({
  zIndex,
  size,
}: {
  zIndex: number;
  size: AvatarSizes;
}) => (): SerializedStyles =>
  css`
    z-index: ${zIndex};
    width: ${rem(sizeBasedOnProp(size) * OVERLAP_FACTOR)};
  `;
