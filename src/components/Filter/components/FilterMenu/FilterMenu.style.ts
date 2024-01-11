import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { rem } from 'theme/utils';

/** @TODO: replace styles with menu tokens once Menu component is implemented for v5 */
export const menuStyle = () => (theme: Theme) => {
  return css`
    position: absolute;
    left: 0;
    height: auto;
    border: ${rem(1)} solid ${theme.tokens.colors.get('borderColor.decorative.muted')};
    border-radius: ${theme.globals.spacing.get('3')};
    background-color: ${theme.globals.colors.get('neutral.1')};
    box-shadow: ${theme.globals.elevation['02']};
    z-index: 500;
    overflow: hidden;
    min-width: 100%;
  `;
};
