import { css } from '@emotion/react';
import { vars } from '@orfium/tokens';

export const menuStyle = () => {
  return css`
    border: ${vars['border-width']['1']} solid ${vars.color['border-color'].decorative.default};
  `;
};
