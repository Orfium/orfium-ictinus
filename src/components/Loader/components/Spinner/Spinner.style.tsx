import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { BASE_SHADE } from 'theme/palette';
import { rem } from 'theme/utils';

const spinnerBorderStyle = (theme: Theme, color?: string) =>
  `${rem(2)} solid ${color || theme.utils.getColor('primary', BASE_SHADE, 'normal')};`;

export const spinnerContainer = () => (theme: Theme): SerializedStyles => css`
  width: ${theme.spacing.lg};
  height: ${theme.spacing.lg};
  margin: auto;
  box-sizing: border-box;
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
