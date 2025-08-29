import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { transition } from '@orfium/tokens';
import { rem } from '@orfium/tokens';

import type { Theme } from '../../theme';
import { getTextInputBaseTokens } from 'components/TextInputBase/TextInputBase.tokens';

export const selectWrapper =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getTextInputBaseTokens(theme);

    return css`
      position: relative;
      min-width: ${rem(tokens('minWidth.small.normal'))};
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
