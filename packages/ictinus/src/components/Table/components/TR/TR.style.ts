import { css, type SerializedStyles } from '@emotion/react';

import { vars } from '@orfium/tokens';
import type { TRProps } from './TR';

export const trContainer = ({
  isExpandable,
  isSelected,
  isExpanded,
  isSelectable,
  sx,
}: Pick<
  TRProps,
  'sx' | 'isSelectable' | 'isSelected' | 'isExpandable' | 'isExpanded'
>): SerializedStyles => {
  return css`
    ${(isSelectable || isExpandable) &&
    `
         cursor: pointer;
         &:hover {
           background: ${vars.color.palette.tertiary.muted};
         }
      
      `}

    ${(isSelected || isExpanded) &&
    `
      background: ${vars.color.palette.tertiary.contrast};
      `}

      ${sx};
  `;
};
