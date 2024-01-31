import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

import { getMenuTokens } from 'components/Menu/Menu.tokens';

export const menuStyle = () => (theme: Theme) => {
  const tokens = getMenuTokens(theme);

  return css`
    position: absolute;
    left: 0;
    height: auto;
    border: ${rem(1)} solid ${tokens('borderColor')};
    border-radius: ${theme.globals.spacing.get('3')};
    background-color: ${theme.globals.colors.get('neutral.1')};
    box-shadow: ${tokens('boxShadow')};
    z-index: 500;
    overflow: hidden;
    min-width: 100%;
  `;
};
