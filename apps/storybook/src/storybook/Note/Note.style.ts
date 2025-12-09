import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { type Theme, generateStylesFromTokens } from '@orfium/ictinus';
import { vars } from '@orfium/tokens';

export const noteStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      position: relative;
      justify-content: flex-end;
      color: ${vars.color.text.default.secondary} !important;

      p {
        margin: 0;
        color: inherit;
      }

      ${generateStylesFromTokens(theme.tokens.typography.get('normal.body01'))};
    `;
  };
