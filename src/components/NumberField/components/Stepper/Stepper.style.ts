import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

import { getTextInputBaseTokens } from 'components/TextInputBase/TextInputBase.tokens';

export const stepperContainerStyle = (): SerializedStyles => {
  return css`
    display: flex;
    flex-direction: column;
    /** @TODO add tokens instead of rem */
    width: ${rem(44)};
    position: absolute;
    right: 0;
    top: -${rem(15)};
    z-index: 1;
  `;
};

export const buttonWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getTextInputBaseTokens(theme);

    return css`
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      border: none;
      height: calc(${tokens('container.normal')} / 2);

      &:hover {
        cursor: pointer;
        background: ${theme.tokens.state.get('backgroundColor.hover')};
      }
    `;
  };
