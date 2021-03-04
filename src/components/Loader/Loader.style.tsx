import { css, SerializedStyles } from '@emotion/core';

import { Theme } from 'theme';

export const getDotsLayout = (delay: number, animation: string, theme: Theme, left?: number) => css`
  left: ${left && `${left}px`};
  width: 6px;
  height: 6px;
  border-radius: 5px;
  background-color: ${theme.utils.getColor('lightGray', 300)};
  color: ${theme.utils.getColor('lightGray', 300)};
  animation: ${animation};
  animation-delay: ${delay}s;
`;

export const loaderContainer = () => (): SerializedStyles => css`
  align-self: center;
`;

export const dotsContainer = () => (theme: Theme): SerializedStyles => css`
  position: relative;
  ${getDotsLayout(0.5, 'dotFlashing 0.7s infinite linear alternate', theme)}

  &::before {
    ${getDotsLayout(0, 'dotFlashing 0.7s infinite alternate', theme, -10)}
  }

  &::after {
    ${getDotsLayout(0.7, 'dotFlashing 0.7s infinite alternate', theme, 10)}
  }

  &::after,
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
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
