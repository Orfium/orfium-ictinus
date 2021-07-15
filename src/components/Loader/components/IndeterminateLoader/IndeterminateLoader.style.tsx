import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';
import { Theme } from 'theme';

export const LoaderLine = () => (theme: Theme): SerializedStyles => css`
  position: absolute;
  opacity: 0.4;
  background: ${theme.utils.getColor('lightCoolGray', 400)};
  width: 150%;
  height: ${rem(8)};
`;

export const LoaderSubLine = (color: string) => css`
  position: absolute;
  background: ${color};
  height: ${rem(8)};
`;

export const LoaderDecLine = () => (theme: Theme): SerializedStyles => css`
  ${LoaderSubLine(theme.utils.getColor('primary', 400, 'normal'))};

  animation: decrease 2.3s 0.8s infinite;
  @keyframes decrease {
    from {
      left: -80%;
      width: 80%;
    }
    to {
      left: 110%;
      width: 10%;
    }
  }
`;

export const LoaderIncLine = () => (theme: Theme): SerializedStyles => css`
  ${LoaderSubLine(theme.utils.getColor('primary', 400, 'normal'))};

  animation: increase 2.3s infinite;
  @keyframes increase {
    from {
      left: -5%;
      width: 5%;
    }
    to {
      left: 130%;
      width: 100%;
    }
  }
`;

export const LoaderContainer = () => (): SerializedStyles => css`
  position: relative;
  width: 100%;
  height: ${rem(8)};
  overflow-x: hidden;
  border-radius: ${rem(8)};
`;
