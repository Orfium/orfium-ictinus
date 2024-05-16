import { css, type SerializedStyles } from '@emotion/react';
import type { Theme } from 'theme';

import type { TRProps } from './TR';

export const trContainer =
  ({ isSelected, isSelectable, sx }: Pick<TRProps, 'sx' | 'isSelectable' | 'isSelected'>) =>
  (theme: Theme): SerializedStyles => {
    return css`
      ${isSelectable &&
      `
         cursor: pointer;
         &:hover {
           background: ${theme.tokens.colors.get('palette.tertiary.muted')};
         }
      
      `}

      ${isSelected &&
      `
      background: ${theme.tokens.colors.get('palette.tertiary.contrast')};
      `}

      ${sx};
    `;
  };
