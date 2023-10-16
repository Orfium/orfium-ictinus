import { css, SerializedStyles } from '@emotion/react';
import { transition } from 'theme/functions';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
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

export const suffixContainer =
  (isOpen: boolean, isSearchable: boolean) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getTextInputBaseTokens(theme);

    return css`
      padding: ${tokens('addOn.padding.normal.left')};
      display: flex;
      cursor: pointer;
      transform: rotate(${isOpen && !isSearchable ? '180' : '0'}deg);
      ${transition(0.2)}
    `;
  };
