import { css, SerializedStyles } from '@emotion/core';
import { Theme } from '../../theme';
import { rem } from 'polished';
import { flex } from '../../theme/functions';
import { colorShades, flatColors, pickTextColorFromSwatches } from '../../theme/palette';
import { AvatarShapes, AvatarSizes } from './Avatar';

const sizeBasedOnProp = (size: AvatarSizes) => {
  switch (size) {
    case 'sm':
      return rem(36);
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

const fontSizeBasedOnProp = (theme: Theme, size: 'lg' | 'md' | 'sm' | 'xs') => {
  switch (size) {
    case 'sm':
      return theme.typography.fontSizes['14'];
    case 'xs':
      return theme.typography.fontSizes['13'];
    default:
      return theme.typography.fontSizes['18'];
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
  font-size: ${fontSizeBasedOnProp(theme, size)};
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
