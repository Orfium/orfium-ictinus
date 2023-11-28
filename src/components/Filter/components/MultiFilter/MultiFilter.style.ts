import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

export const textFieldWrapper = () =>
  css`
    & > div > div {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  `;

export const optionsWrapper = () => (theme: Theme) => {
  return css`
    & > div {
      box-shadow: 0 0 0 ${rem(1)} ${theme.utils.getColor('lightGrey', 200)};
      border: none;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  `;
};
