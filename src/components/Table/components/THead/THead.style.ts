import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const tHeadContainer =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      box-shadow: 0px 1px 1px ${theme.tokens.colors.get('borderColor.decorative.default')};
    `;
  };
