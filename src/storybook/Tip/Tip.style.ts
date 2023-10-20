import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { Theme } from '../../theme';

export const TipWrapper =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      a {
        color: ${theme.tokens.palette.get('systemic.primary.main')};
      }
    `;
