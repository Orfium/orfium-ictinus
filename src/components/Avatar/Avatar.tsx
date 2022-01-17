import React from 'react';

import { useTheme } from '../../index';
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
  /** The class name of the avatar component if its styled **/
  className?: string;
};

export type AvatarSizes = 'xs' | 'sm' | 'md' | 'lg';

const iconSizeBasedOnAvatar = (size: AvatarSizes) => {
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

const Avatar = React.forwardRef<HTMLDivElement, Props & DivProps>(
  (
    { src = '', iconName = 'user', size = 'md', color = 'lightGrey-600', children, className },
    ref
  ) => {
    const theme = useTheme();
    const calculatedColor = calculateActualColorFromComponentProp(color);

    return (
      <div
        ref={ref}
        className={className}
        css={avatarStyle({
          size,
          fill: calculatedColor.color,
          fillShade: calculatedColor.shade,
        })}
      >
        {src && <img src={src} />}
        {!src && !children && iconName && (
          <Icon
            color={theme.utils.getAAColorFromSwatches(calculatedColor.color, calculatedColor.shade)}
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
