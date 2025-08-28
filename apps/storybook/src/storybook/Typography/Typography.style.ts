import { css } from '@emotion/react';

import type { Theme } from '@orfium/ictinus';

export const TypographyWrapper = (theme: Theme) =>
  css`
    margin-top: 35px;
    margin-bottom: 10px;
    display: grid;
    &:after {
      content: '';
      margin: 16px 0 0;
      background: ${theme.tokens.colors.get('borderColor.decorative.default')};
      height: 1px;
    }
  `;
export const TypographyResetFontSmooth = () =>
  css`
    font-smooth: initial !important;
    -webkit-font-smoothing: initial !important;
    -moz-osx-font-zsmoothing: initial !important;

    .sb-unstyled {
      display: inline;
    }
  `;
