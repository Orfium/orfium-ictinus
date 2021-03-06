/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { avatarStyle } from './Avatar.style';
import { pickTextColorFromSwatches } from '../../theme/palette';
import { AcceptedIconNames } from '../Icon/types';
import Icon from '../Icon';
import { calculateActualColorFromComponentProp } from '../../utils/themeFunctions';

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
  /** the color of the button based on our colors eg. red-400
   *  @default 'darkGray-400'
   * */
  color?: string;
  /** the shape of the avatar
   *  @default 'circular'
   * */
  shape?: AvatarShapes;
  /** The class name of the avatar component if its styled **/
  className?: string;
};

export type AvatarSizes = 'xs' | 'sm' | 'md' | 'lg';
export type AvatarShapes = 'regular' | 'rounded' | 'circular';

const Avatar: React.FC<Props> = ({
  src = '',
  iconName = 'user',
  size = 'md',
  color = 'lightGray-600',
  shape = 'circular',
  children,
  className,
}) => {
  const calculatedColor = calculateActualColorFromComponentProp(color);

  return (
    <div
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
          size={size === 'xs' ? 18 : 20}
        />
      )}
      {!src && children}
    </div>
  );
};

export default Avatar;
