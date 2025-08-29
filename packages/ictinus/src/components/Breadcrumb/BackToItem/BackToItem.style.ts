import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { Theme } from '../../../theme';
import { generateStylesFromTokens } from 'components/Typography/utils';

export const backToContainerStyles =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      display: flex;
      ${generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))};
      color: ${theme.tokens.colors.get('textColor.default.secondary')};
    `;
  };
