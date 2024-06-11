import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const menuStyle = () => (theme: Theme) => {
  return css`
    border: ${theme.globals.borderWidth.get('1')} solid
      ${theme.tokens.colors.get('borderColor.decorative.default')};
  `;
};
