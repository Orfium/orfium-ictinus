import { AvatarSizes } from './Avatar.types';

export const iconSizeBasedOnAvatar = (size: AvatarSizes) => {
  switch (size) {
    case 'md':
      return 16;
    case 'sm':
      return 12;
    case 'xs':
      return 10;
    default:
      return 28;
  }
};
