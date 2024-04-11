import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';

export const menuStyle = () => (theme: Theme) => {
  return css`
    border: 1px solid ${theme.tokens.colors.get('borderColor.decorative.default')};
  `;
};
