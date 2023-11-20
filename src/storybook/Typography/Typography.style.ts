import { css } from '@emotion/react';

import type { Theme } from '../../theme';

export const TypographyWrapper = (theme: Theme) =>
  css`
    margin-top: 35px !important;
    display: grid;
    &:after {
      content: '';
      margin: 16px 0;
      background: ${theme.tokens.colors.get('borderColor.decorative.muted')};
      height: 1px;
    }
  `;
