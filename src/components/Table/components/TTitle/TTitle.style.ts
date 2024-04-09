import type { SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const tTitleContainer =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      padding: 8px 16px;
      border-bottom: 1px solid ${theme.tokens.colors.get('borderColor.decorative.default')};
    `;
  };
