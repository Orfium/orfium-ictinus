import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'index';

import { BoxWrapper } from 'components/Box/Box.style';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const noteStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      position: relative;
      justify-content: flex-end;
      color: ${theme.tokens.colors.get('textColor.default.secondary')} !important;

      p {
        margin: 0;
        color: inherit;
      }

      ${BoxWrapper} {
        margin: 0;
      }

      ${generateStylesFromTokens(theme.tokens.typography.get('normal.body01'))};
    `;
  };
