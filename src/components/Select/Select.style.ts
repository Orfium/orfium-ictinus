import { css, SerializedStyles } from '@emotion/react';
import { transition } from 'theme/functions';
import { rem } from 'theme/utils';

export const selectWrapper =
  ({ isSearchable }: { isSearchable: boolean }) =>
  (): SerializedStyles =>
    css`
      position: relative;
      min-width: ${rem(150)};

      * {
        cursor: ${!isSearchable && 'pointer'};
      }
    `;

export const suffixContainer = (isOpen: boolean, isSearchable: boolean) => (): SerializedStyles =>
  css`
    display: flex;
    cursor: pointer;
    transform: rotate(${isOpen && !isSearchable ? '180' : '0'}deg);
    ${transition(0.2)}
  `;
