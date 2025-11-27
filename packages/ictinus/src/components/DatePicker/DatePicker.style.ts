import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import { vars } from '@orfium/tokens';

export const datePickerStyles = (): SerializedStyles => {
  return css`
    max-height: inherit;
    overflow: auto;
    background-color: ${vars.color.palette.tertiary.base};
    box-shadow: ${vars['box-shadow']['3']};
    border-radius: ${vars['border-radius']['2']};
    border-color: ${vars.color['border-color'].decorative.default};
  `;
};
