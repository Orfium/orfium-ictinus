/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { avatarStyle } from './Avatar.style';
import { colorShades, flatColors, pickTextColorFromSwatches } from '../../theme/palette';
import { AcceptedIconNames } from '../Icon/types';
import Icon from '../Icon';

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
  size?: 'sm' | 'md' | 'lg';
  /** The color to pick from our palette
   *  @default 'lightGray'
   * */
  fill?: typeof flatColors[number];
  /** The shade of the color that is picked
   *  @default '400'
   * */
  fillShade?: typeof colorShades[number];
};

const Avatar: React.FC<Props> = ({
  src = '',
  iconName = 'user',
  size = 'md',
  fill = 'lightGray',
  fillShade = 400,
  children,
}) => {
  return (
    <div css={avatarStyle({ src, iconName, size, fill, fillShade })}>
      {src && <img src={src} />}
      {!src && !children && iconName && (
        <Icon color={pickTextColorFromSwatches(fill, fillShade)} name={iconName} size={20} />
      )}
      {!src && children}
    </div>
  );
};

export default Avatar;
