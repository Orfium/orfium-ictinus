import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { flex } from '../../theme/functions';
import { colorShades, flatColors } from '../../theme/palette';
import { AvatarSizes } from './Avatar.types';

export const sizeBasedOnProp = (size: AvatarSizes): number => {
  switch (size) {
    case 'md':
      return 24;
    case 'sm':
      return 20;
    case 'xs':
      return 16;
    default:
      return 46;
  }
};

const fontSizeBasedOnProp = (theme: Theme, size: AvatarSizes) => {
  switch (size) {
    case 'md':
      return theme.typography.fontSizes['11'];
    case 'sm':
      return theme.typography.fontSizes['10'];
    case 'xs':
      return theme.typography.fontSizes['8'];
    default:
      return theme.typography.fontSizes['16'];
  }
};

export const avatarStyle =
  ({
    size,
    fill,
    fillShade,
  }: {
    size: AvatarSizes;
    fill: typeof flatColors[number];
    fillShade: typeof colorShades[number];
  }) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${flex};
      width: ${rem(sizeBasedOnProp(size))};
      height: ${rem(sizeBasedOnProp(size))};
      border-radius: 100%;
      border: ${rem(1)} solid ${theme.utils.getColor('lightGrey', 100)};
      box-sizing: border-box;
      background: ${theme.utils.getColor(fill, fillShade)};
      overflow: hidden;
      position: relative;
      font-size: ${fontSizeBasedOnProp(theme, size)};
      font-weight: ${theme.typography.weights.medium};
      align-items: center;
      flex-shrink: 0;
      line-height: 1;
      user-select: none;
      justify-content: center;
      color: ${theme.utils.getAAColorFromSwatches(fill, fillShade)};

      img {
        border-radius: 100%;
        width: 100%;
        height: 100%;
      }
    `;
