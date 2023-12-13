import { css } from '@emotion/react';
import { rem } from 'theme/utils';

export const textFieldWrapper = () =>
  css`
    border-bottom: 1px solid #b9cdfc;

    label {
      display: none;
    }

    input {
      border: none;

      top: 0;

      &:focus {
        outline: none;
        border: none;
        box-shadow: none;
      }
    }
  `;

export const iconWrapper = () => () =>
  css`
    display: flex;
    gap: ${rem(25)};
  `;
