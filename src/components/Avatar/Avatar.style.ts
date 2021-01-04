import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../theme';
import { rem } from 'polished';
import { flex } from '../../theme/functions';
import { colorShades, flatColors, pickTextColorFromSwatches } from '../../theme/palette';
import { AvatarShapes, AvatarSizes } from './Avatar';

const sizeBasedOnProp = (size: AvatarSizes) => {
  switch (size) {
    case 'sm':
      return rem(40);
    case 'md':
      return rem(46);
    case 'xs':
      return rem(24);
    default:
      return rem(56);
  }
};

const shapeBasedOnProp = (shape: AvatarShapes) => {
  switch (shape) {
    case 'rounded':
      return rem(4);
    case 'circular':
      return '100%';
    default:
      return rem(8);
  }
};

export const avatarStyle = ({
  shape,
  size,
  fill,
  fillShade,
}: {
  shape: AvatarShapes;
  size: AvatarSizes;
  fill: typeof flatColors[number];
  fillShade: typeof colorShades[number];
}) => (theme: Theme): SerializedStyles => css`
  ${flex};
  width: ${sizeBasedOnProp(size)};
  height: ${sizeBasedOnProp(size)};
  border-radius: ${shapeBasedOnProp(shape)};
  background: ${theme.utils.getColor(fill, fillShade)};
  overflow: hidden;
  position: relative;
  font-size: ${theme.typography.fontSizes[size === 'xs' ? '13' : '18']};
  align-items: center;
  flex-shrink: 0;
  line-height: 1;
  user-select: none;
  justify-content: center;
  color: ${pickTextColorFromSwatches(fill, fillShade)};

  img {
    border-radius: 100%;
    width: 100%;
    height: 100%;
  }
`;
