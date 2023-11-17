import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import { IconProps } from './Icon';
import { Theme } from '../../theme';

export const iconContainerStyles =
  ({
    hasHover,
    isInteractive,
    size = 20,
  }: Pick<IconProps, 'hasHover' | 'size'> & { isInteractive?: boolean }) =>
  (theme: Theme) => {
    const iconSize = typeof size === 'number' || size.includes('px') ? rem(size) : size;

    return css`
      width: ${iconSize};
      height: ${iconSize};
      display: flex;

      ${isInteractive &&
      `
        cursor: pointer;
      `}

      ${hasHover &&
      `
        &:hover, &:focus-visible {
          transition: all 0.2s;
          border-radius: 100%;
          background: ${theme.tokens.state.get('backgroundColor.hover')};
          box-shadow: 0px 0px 0px 8px ${theme.tokens.state.get('backgroundColor.hover')};
        }
      `}
    `;
  };

export const iconStyles =
  ({ color, size = 20 }: Pick<IconProps, 'color' | 'size'>) =>
  () => {
    const iconSize = typeof size === 'number' || size.includes('px') ? rem(size) : size;

    return css`
      width: ${iconSize};
      height: ${iconSize};

      path {
        fill: ${color} !important;
      }
    `;
  };
