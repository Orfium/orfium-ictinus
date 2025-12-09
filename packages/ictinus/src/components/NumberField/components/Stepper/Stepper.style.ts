import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from '@orfium/tokens';
import type { Theme } from 'theme';

import { FIELD_TOKENS } from '~/components/DatePicker/DatePickInput/DatePickInput.style';

export const stepperContainerStyle = (size: 'normal' | 'compact'): SerializedStyles => {
  return css`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    /** @TODO add tokens instead of rem */
    width: ${size === 'normal' ? rem(44) : rem(20)};
    top: ${size === 'normal' ? `-${rem(15)}` : `-${rem(8)}`};
    z-index: 1;
  `;
};

export const buttonWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: none;
      height: calc(${FIELD_TOKENS.container.normal} / 2);

      &:hover {
        cursor: pointer;
        background: ${theme.tokens.state.get('backgroundColor.hover')};
      }
    `;
  };
