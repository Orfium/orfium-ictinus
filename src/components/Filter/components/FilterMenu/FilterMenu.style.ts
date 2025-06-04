import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

export const menuStyle = () => (theme: Theme) => {
  return css`
    max-height: inherit;
    overflow: auto;
    border: ${rem(1)} solid ${theme.tokens.colors.get('borderColor.decorative.default')};
    border-radius: ${theme.globals.spacing.get('3')};
    background-color: ${theme.globals.colors.get('neutral.1')};
    box-shadow: ${theme.tokens.boxShadow.get('2')};
  `;
};
