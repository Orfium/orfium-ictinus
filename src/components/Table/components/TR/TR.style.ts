import { css, type SerializedStyles } from '@emotion/react';
import type { Theme } from 'theme';

import type { TRProps } from './TR';

export const trContainer =
  ({
    isExpandable,
    isSelected,
    isExpanded,
    isSelectable,
    sx,
  }: Pick<TRProps, 'sx' | 'isSelectable' | 'isSelected' | 'isExpandable' | 'isExpanded'>) =>
  (theme: Theme): SerializedStyles => {
    return css`
      ${(isSelectable || isExpandable) &&
      `
         cursor: pointer;
         &:hover {
           background: ${theme.tokens.colors.get('palette.tertiary.muted')};
         }
      
      `}

      ${(isSelected || isExpanded) &&
      `
      background: ${theme.tokens.colors.get('palette.tertiary.contrast')};
      `}

      ${sx};
    `;
  };
