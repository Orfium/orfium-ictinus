import type { DivProps } from '~/utils/common';
import type { TestProps } from '~/utils/types';
import type { AvatarColors, AvatarSizes } from '../Avatar.types';

export interface AvatarStackProps extends TestProps, DivProps {
  /** the maximum number of avatars to be displayed **/
  maxAvatars?: number;
  /** The size of the extra avatar, if any **/
  size?: AvatarSizes;
  /** the color of the extra avatar based on our colors eg. red-500 **/
  color?: AvatarColors;
}
