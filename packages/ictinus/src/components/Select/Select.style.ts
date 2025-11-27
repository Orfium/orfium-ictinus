import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { transition } from 'theme/functions';

import { FIELD_TOKENS } from '../DatePicker/DatePickInput/DatePickInput.style';

export const selectWrapper = (): SerializedStyles => {
  return css`
    position: relative;
    min-width: ${FIELD_TOKENS.minWidth.small.normal};
  `;
};

export const suffixContainer = (isOpen: boolean, isSearchable: boolean) => (): SerializedStyles => {
  return css`
    display: flex;
    cursor: pointer;
    transform: rotate(${isOpen && !isSearchable ? '180' : '0'}deg);
    ${transition(0.2)}
  `;
};
