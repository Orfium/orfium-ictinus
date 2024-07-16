import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { Theme } from '~/theme';

export const badgeContainer =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      position: absolute;
      right: 0;
      font-size: ${theme.globals.typography.fontSize.get('1')};
      line-height: normal;
      font-weight: ${theme.globals.typography.fontWeight.get('bold')};
      color: ${theme.tokens.colors.get('textColor.default.primary')};
    `;
  };
