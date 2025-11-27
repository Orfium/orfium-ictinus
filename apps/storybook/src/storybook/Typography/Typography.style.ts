import { css } from '@emotion/react';

import { vars } from '@orfium/tokens';

export const TypographyWrapper = () => css`
  margin-top: 35px;
  margin-bottom: 10px;
  display: grid;
  &:after {
    content: '';
    margin: 16px 0 0;
    background: ${vars.color['border-color'].decorative.default};
    height: 1px;
  }
`;
export const TypographyResetFontSmooth = () => css`
  font-smooth: initial !important;
  -webkit-font-smoothing: initial !important;
  -moz-osx-font-zsmoothing: initial !important;

  .sb-unstyled {
    display: inline;
  }
`;
