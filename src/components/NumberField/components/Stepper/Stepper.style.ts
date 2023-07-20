import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import { getTextInputBaseTokens } from 'components/TextInputBase/TextInputBase.tokens';

export const stepperContainerStyle = (): SerializedStyles => {
  return css`
    display: flex;
    flex-direction: column;
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
      background: transparent;
      border: none;
      height: calc(${tokens('container')} / 2);

      &:hover {
        cursor: pointer;
      }
    `;
  };
