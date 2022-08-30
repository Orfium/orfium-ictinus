import { DivProps } from '../../utils/common';
import { AcceptedIconNames } from '../Icon/types';

export type AvatarProps = {
  /** the src of the image to show **/
  src?: string;
  /** The icon name to pick from our library of icons
   *  @default 'user'
   * */
  iconName?: AcceptedIconNames;
  /** The size of the avatar
   *  @default 'md'
   * */
  size?: AvatarSizes;
  /** the color of the button based on our colors eg. red-500
   *  @default 'darkGrey-500'
   * */
  color?: string;
  /** The class name of the avatar component if its styled **/
  className?: string;
} & DivProps;

export type AvatarSizes = 'xs' | 'sm' | 'md' | 'lg';
