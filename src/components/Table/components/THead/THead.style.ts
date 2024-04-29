import { css, type SerializedStyles } from '@emotion/react';
import type { Theme } from 'theme';

import type { THeadProps } from './THead';

export const tHeadContainer =
  ({
    hasStickyHeader,
    hasScrollbar,
    sx,
  }: Pick<THeadProps, 'hasStickyHeader' | 'sx'> & { hasScrollbar?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    return css`
      box-shadow: 0 1px 0 0 ${theme.tokens.colors.get('borderColor.decorative.default')};

      ${hasStickyHeader &&
      `
         display: block;  
         width: calc(100%);
         padding-right: ${hasScrollbar ? '8px' : '0px'};
         box-sizing: border-box;

         tr {
           display: flex;
         }
      `}

      ${hasScrollbar &&
      `
        box-shadow: ${theme.tokens.boxShadow.get('2')}, 0 1px 0 0 ${theme.tokens.colors.get(
        'borderColor.decorative.default'
      )} ;
      `}

      ${sx};
    `;
  };
