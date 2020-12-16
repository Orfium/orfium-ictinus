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
   *  @default 'darkGray'
   * */
  fill?: typeof flatColors[number];
  /** The shade of the color that is picked
   *  @default '300'
   * */
  fillShade?: typeof colorShades[number];
  /** The class name of the avatar component if its styled **/
  className?: string;
};

const Avatar: React.FC<Props> = ({
  src = '',
  iconName = 'user',
  size = 'md',
  fill = 'darkGray',
  fillShade = 300,
  children,
  className,
}) => {
  return (
    <div className={className} css={avatarStyle({ size, fill, fillShade })}>
      {src && <img src={src} />}
      {!src && !children && iconName && (
        <Icon color={pickTextColorFromSwatches(fill, fillShade)} name={iconName} size={20} />
      )}
      {!src && children}
    </div>
  );
};

export default Avatar;
