import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { Theme } from '../../theme';

export const datePickerStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      max-height: inherit;
      overflow: auto;
      background-color: ${theme.tokens.colors.get('palette.tertiary.base')};
      margin-top: ${theme.globals.spacing.get('4')};
      box-shadow: ${theme.tokens.boxShadow.get('3')};
      border-radius: ${theme.dimension.borderRadius.get('md')};
      border-color: ${theme.tokens.colors.get('borderColor.decorative.default')};
    `;
  };
