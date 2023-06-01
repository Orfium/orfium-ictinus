import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../theme';

export const TipWrapper =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      a {
        color: ${theme.tokens.palette.get('systemic.primary.main')};
      }
    `;
