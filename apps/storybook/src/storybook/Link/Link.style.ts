import { css } from '@emotion/react';
import type { Theme } from 'theme';

import { TypographyConfigStyles } from '@orfium/ictinus';

export const LinkWrapper = (theme: Theme) => css`
  span {
    ${TypographyConfigStyles.body01(theme)};
  }
`;
export const LinkResetFontSmooth = () => css`
  span {
    font-smooth: initial !important;
    -webkit-font-smoothing: initial !important;
    -moz-osx-font-zsmoothing: initial !important;
  }
`;
