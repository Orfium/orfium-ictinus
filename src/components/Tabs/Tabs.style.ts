import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const tagStyles =
  (isActive = false) =>
  (theme: Theme) =>
    css`
      border: none;
      background: ${theme.tokens.colors.get(
        `palette.${isActive ? 'primary' : 'primaryAlt'}.contrast`
      )};
      color: ${theme.tokens.colors.get(`textColor.${isActive ? 'inverted' : 'default'}.primary`)};
      transition: background 0.2s;
      transition: color 0.2s;
    `;
