import { css } from '@emotion/react';

import { Theme } from '../../theme';

export const TypographyWrapper = (theme: Theme) =>
  css`
    margin-top: 35px;
    display: grid;
    &:after {
      content: '';
      margin-top: 8px;
      background: ${theme.tokens.colors.get('borderColor.decorative.muted')};
      height: 1px;
    }
  `;
