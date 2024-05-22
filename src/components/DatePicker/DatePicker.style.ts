import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { Theme } from '../../theme';

export const datePickerStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      position: absolute;
      background-color: ${theme.tokens.colors.get('palette.tertiary.base')};
      z-index: 10;
      margin-top: ${theme.globals.spacing.get('4')};
      box-shadow: ${theme.tokens.boxShadow.get('3')};
      border-radius: ${theme.dimension.borderRadius.get('md')};
      border-color: ${theme.tokens.colors.get('borderColor.decorative.default')};
    `;
  };
