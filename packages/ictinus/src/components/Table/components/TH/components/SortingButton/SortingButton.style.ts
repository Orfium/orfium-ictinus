import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { vars } from '@orfium/tokens';

export const badgeContainer = (): SerializedStyles => {
  return css`
    position: absolute;
    right: 0;
    font-size: ${vars['font-size']['1']};
    line-height: normal;
    font-weight: ${vars.weight.bold};
    color: ${vars.color.text.default.primary};
  `;
};
