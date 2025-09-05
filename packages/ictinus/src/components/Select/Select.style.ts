import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from '@orfium/tokens';
import { transition } from 'theme/functions';

import { getTextInputBaseTokens } from 'components/TextInputBase/TextInputBase.tokens';
import type { Theme } from '../../theme';

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
