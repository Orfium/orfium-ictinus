import type { DivProps } from '../../utils/common';

export type AvatarColors = 'blue' | 'teal' | 'purple' | 'red' | 'orange';

export type AvatarSizes = 1 | 2 | 3 | 4 | 5 | 6;

export type AvatarProps = {
  /** The size of the avatar
   *  @default 1
   * */
  size?: AvatarSizes;
  /** the color of the button based on our colors eg. red-500
   *  @default 'blue'
   * */
  color?: AvatarColors;
  /** the src of the image to show **/
  src?: string;
  /** The icon name to pick from our library of icons
   *  @default 'user'
   * */
  className?: string;
  /** Data Test Id prefix **/
  dataTestPrefixId?: string;
} & DivProps;
