import { css, SerializedStyles } from '@emotion/react';
import { darken } from 'polished';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

export const getColorForDots = (theme: Theme, step = 0, color?: string) =>
  darken(step, color || theme.utils.getColor('lightGrey', 150));

export const getDotsLayout = (
  delay: number,
  animation: string,
  theme: Theme,
  left?: number,
  color?: string
) => css`
  left: ${left && rem(left)};
  width: ${rem(6)};
  height: ${rem(6)};
  border-radius: ${rem(5)};
  background-color: ${getColorForDots(theme, 0.1, color)};
  color: ${getColorForDots(theme, 0.1, color)};
  animation: ${animation};
  animation-delay: ${delay}s;
`;

export const dotsWrapper = css`
  width: ${rem(26)};
  position: relative;
  height: ${rem(6)};
`;

export const dotsContainer = (color?: string) => (theme: Theme): SerializedStyles => css`
  position: absolute;
  left: ${rem(10)};
  ${getDotsLayout(0.5, 'dotFlashing 0.7s infinite linear alternate', theme, 0, color)};

  &::after,
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &::before {
    ${getDotsLayout(0, 'dotFlashing 0.7s infinite alternate', theme, -10, color)};
  }

  &::after {
    ${getDotsLayout(0.7, 'dotFlashing 0.7s infinite alternate', theme, 10, color)};
  }

  @keyframes dotFlashing {
    0% {
      background-color: ${getColorForDots(theme, 0, color)};
    }
    50% {
      background-color: ${getColorForDots(theme, 0.05, color)};
    }
    100% {
      background-color: ${getColorForDots(theme, 0.1, color)};
    }
  }
`;
