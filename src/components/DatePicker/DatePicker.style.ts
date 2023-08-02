import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../theme';

export const datePickerStyles =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      position: absolute;
      background-color: ${theme.globals.oldColors.white};
      z-index: 10;
      margin-top: ${theme.globals.spacing.get('4')};
      box-shadow: ${theme.globals.elevation['02']};
    `;
