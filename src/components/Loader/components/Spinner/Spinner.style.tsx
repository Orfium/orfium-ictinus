import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { BASE_SHADE } from 'theme/palette';
import { rem } from 'theme/utils';

const spinnerBorderStyle = (theme: Theme, color?: string) =>
  `${rem(2)} solid ${color || theme.utils.getColor('primary', BASE_SHADE, 'normal')};`;

export const spinnerContainer =
  (color?: string) =>
  (theme: Theme): SerializedStyles =>
    css`
      width: ${theme.globals.spacing.get('8')};
      height: ${theme.globals.spacing.get('8')};
      margin: auto;
      box-sizing: border-box;
      border-top: ${spinnerBorderStyle(theme, color)};
      border-right: ${spinnerBorderStyle(theme, color)};
      border-bottom: ${spinnerBorderStyle(theme, color)};
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
