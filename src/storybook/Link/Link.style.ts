import { css } from '@emotion/react';
import type { Theme } from 'theme';

import { body01 } from '../../components/Typography/Typography.config.styles';

export const LinkWrapper = (theme: Theme) =>
  css`
    span {
      ${body01(theme)};
    }
  `;
export const LinkResetFontSmooth = () =>
  css`
    span {
      font-smooth: initial !important;
      -webkit-font-smoothing: initial !important;
      -moz-osx-font-zsmoothing: initial !important;
    }
  `;
