import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { AvatarSizes } from '../Avatar';

const iconMarginLeft = (size: AvatarSizes) => {
  switch (size) {
    case 'lg':
      return rem(-8);
    case 'xs':
      return rem(-2);
    default:
      return rem(-4);
  }
};

export const avatarStackStyle = ({
  zIndex,
  size,
}: {
  zIndex: number;
  size: AvatarSizes;
}) => (): SerializedStyles =>
  css`
    z-index: ${zIndex};
    margin-left: ${iconMarginLeft(size)};
  `;
