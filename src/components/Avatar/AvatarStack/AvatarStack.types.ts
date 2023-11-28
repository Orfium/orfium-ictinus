import type { AvatarColors, AvatarSizes } from '../Avatar.types';

export type AvatarStackProps = {
  /** the maximum number of avatars to be displayed **/
  maxAvatars?: number;
  /** The size of the extra avatar, if any **/
  size?: AvatarSizes;
  /** the color of the extra avatar based on our colors eg. red-500 **/
  color?: AvatarColors;
};
