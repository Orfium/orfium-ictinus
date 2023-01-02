import { rem } from 'theme/utils';

import { AvatarSizes } from './Avatar.types';

export const iconSizeBasedOnAvatar = (size: AvatarSizes) => {
  switch (size) {
    case 'md':
      return rem(16);
    case 'sm':
      return rem(12);
    case 'xs':
      return rem(10);
    default:
      return rem(28);
  }
};
