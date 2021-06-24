import { Theme } from '../../../../theme';
import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';

const spinnerBorderStyle = (theme: Theme, color?: string) =>
  `${rem(4)} solid ${color || theme.utils.getColor('primary', 400, 'normal')};`;

export const spinnerContainer = () => (theme: Theme): SerializedStyles => css`
  position: relative;
  width: ${rem(20)};
  height: ${rem(20)};
  border-top: ${spinnerBorderStyle(theme)};
  border-right: ${spinnerBorderStyle(theme)};
  border-bottom: ${spinnerBorderStyle(theme)};
  border-left: ${spinnerBorderStyle(theme, 'transparent')};
  border-radius: 50%;
  animation: spin 1.1s infinite linear;

  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
