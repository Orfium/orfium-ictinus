import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import { getDatePickerTokens } from './DatePicker.tokens';
import type { Theme } from '../../theme';

export const datePickerStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDatePickerTokens(theme);

    return css`
      position: absolute;
      background-color: ${tokens('date.backgroundColor.default')};
      z-index: 10;
      margin-top: ${theme.globals.spacing.get('4')};
      box-shadow: ${tokens('boxShadow')};
      border-radius: ${tokens('date.container.borderRadius')};
      border-color: ${tokens('container.borderColor')};
    `;
  };
