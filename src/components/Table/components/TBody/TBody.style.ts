import type { CSSObject, SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import type { TBodyProps } from './TBody';

export const tBodyContainer =
  ({ hasStickyHeader, sx }: Pick<TBodyProps, 'hasStickyHeader'> & { sx?: CSSObject }) =>
  (): SerializedStyles => {
    return css`
      ${hasStickyHeader &&
      `
        display: block;
        overflow-y: auto;
  
        tr {
          display: flex;
        }
      `}

      ${sx};
    `;
  };
