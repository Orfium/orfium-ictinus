import type { SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';

/** @TODO update styles with tokens */

export const tTitleContainer =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      padding: 8px 16px;
      border-bottom: 1px solid ${theme.tokens.colors.get('borderColor.decorative.default')};
      display: flex;
      justify-content: space-between;
      height: 44px;
      box-sizing: border-box;
    `;
  };
