import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { flex } from '../../theme/functions';
import { colorShades, flatColors, pickTextColorFromSwatches } from '../../theme/palette';
import { AvatarSizes } from './Avatar';

const sizeBasedOnProp = (size: AvatarSizes) => {
  switch (size) {
    case 'sm':
      return rem(36);
    case 'md':
      return rem(46);
    case 'xs':
      return rem(24);
    case 'xxs':
      return rem(20);
    case 'xxxs':
      return rem(16);
    default:
      return rem(56);
  }
};

const fontSizeBasedOnProp = (theme: Theme, size: AvatarSizes) => {
  switch (size) {
    case 'sm':
      return theme.typography.fontSizes['14'];
    case 'xs':
      return theme.typography.fontSizes['13'];
    case 'xxs':
      return theme.typography.fontSizes['11'];
    case 'xxxs':
      return theme.typography.fontSizes['8'];
    default:
      return theme.typography.fontSizes['18'];
  }
};

export const avatarStyle = ({
  size,
  fill,
  fillShade,
}: {
  size: AvatarSizes;
  fill: typeof flatColors[number];
  fillShade: typeof colorShades[number];
}) => (theme: Theme): SerializedStyles => css`
  ${flex};
  width: ${sizeBasedOnProp(size)};
  height: ${sizeBasedOnProp(size)};
  border-radius: 100%;
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
