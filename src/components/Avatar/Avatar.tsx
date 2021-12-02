import React from 'react';

import { pickTextColorFromSwatches } from '../../theme/palette';
import { DivProps } from '../../utils/common';
import { calculateActualColorFromComponentProp } from '../../utils/themeFunctions';
import Icon from '../Icon';
import { AcceptedIconNames } from '../Icon/types';
import { avatarStyle } from './Avatar.style';

export type Props = {
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
  /** the shape of the avatar
   *  @default 'circular'
   * */
  shape?: AvatarShapes;
  /** The class name of the avatar component if its styled **/
  className?: string;
};

export type AvatarSizes = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
export type AvatarShapes = 'regular' | 'rounded' | 'circular';

const iconSizeBasedOnAvatar = (size: AvatarSizes) => {
  switch (size) {
    case 'xs':
      return 18;
    case 'xxs':
      return 18;
    case 'xxxs':
      return 10;
    default:
      return 20;
  }
};

const Avatar = React.forwardRef<HTMLDivElement, Props & DivProps>(
  (
    {
      src = '',
      iconName = 'user',
      size = 'md',
      color = 'lightGrey-600',
      shape = 'circular',
      children,
      className,
    },
    ref
  ) => {
    const calculatedColor = calculateActualColorFromComponentProp(color);

    return (
      <div
        ref={ref}
        className={className}
        css={avatarStyle({
          shape,
          size,
          fill: calculatedColor.color,
          fillShade: calculatedColor.shade,
        })}
      >
        {src && <img src={src} />}
        {!src && !children && iconName && (
          <Icon
            color={pickTextColorFromSwatches(calculatedColor.color, calculatedColor.shade)}
            name={iconName}
            size={iconSizeBasedOnAvatar(size)}
          />
        )}
        {!src && children}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';

export default Avatar;
