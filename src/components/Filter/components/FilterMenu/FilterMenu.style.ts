import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

export const menuStyle = () => (theme: Theme) => {
  return css`
    position: absolute;
    left: 0;
    height: auto;
    border: ${rem(1)} solid ${theme.tokens.colors.get('borderColor.decorative.default')};
    border-radius: ${theme.globals.spacing.get('3')};
    background-color: ${theme.globals.colors.get('neutral.1')};
    box-shadow: ${theme.tokens.boxShadow.get('2')};
    z-index: 500;
    overflow: hidden;
    min-width: 100%;
  `;
};
