import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const menuStyle = () => (theme: Theme) => {
  return css`
    border: 1px solid ${theme.tokens.colors.get('borderColor.decorative.default')};
  `;
};
