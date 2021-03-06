import { css, SerializedStyles } from '@emotion/core';

import { Theme } from 'theme';
import { rem } from 'polished';

export const getDotsLayout = (delay: number, animation: string, theme: Theme, left?: number) => css`
  left: ${left && `${left}px`};
  width: ${rem(6)};
  height: ${rem(6)};
  border-radius: ${rem(5)};
  background-color: ${theme.utils.getColor('lightGray', 300)};
  color: ${theme.utils.getColor('lightGray', 300)};
  animation: ${animation};
  animation-delay: ${delay}s;
`;

export const dotsWrapper = css`
  width: ${rem(26)};
  position: relative;
  height: ${rem(6)};
`;

export const dotsContainer = () => (theme: Theme): SerializedStyles => css`
  position: absolute;
  left: ${rem(10)};
  ${getDotsLayout(0.5, 'dotFlashing 0.7s infinite linear alternate', theme)};

  &::after,
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &::before {
    ${getDotsLayout(0, 'dotFlashing 0.7s infinite alternate', theme, -10)};
  }

  &::after {
    ${getDotsLayout(0.7, 'dotFlashing 0.7s infinite alternate', theme, 10)};
  }

  @keyframes dotFlashing {
    0% {
      background-color: ${theme.utils.getColor('lightGray', 200)};
    }
    50% {
      background-color: ${theme.utils.getColor('lightGray', 300)};
    }
    100% {
      background-color: ${theme.utils.getColor('lightGray', 400)};
    }
  }
`;
