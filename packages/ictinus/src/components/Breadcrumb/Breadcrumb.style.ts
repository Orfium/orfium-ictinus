import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { flex } from 'theme/functions';

import { vars } from '@orfium/tokens';

export const breadcrumbStyles = (): SerializedStyles => {
  return css`
    ${flex};
    gap: ${vars.spacing['4']};
    flex-wrap: nowrap;
    list-style: none;
    padding: 0;
    margin: 0;
  `;
};
