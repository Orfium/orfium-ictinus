import { css, type SerializedStyles } from '@emotion/react';

import { vars } from '@orfium/tokens';
import type { THeadProps } from './THead';

export const tHeadContainer = ({
  hasStickyHeader,
  hasScrollbar,
  sx,
}: Pick<THeadProps, 'hasStickyHeader' | 'sx'> & { hasScrollbar?: boolean }): SerializedStyles => {
  return css`
    position: relative;
    box-shadow: 0 ${vars['border-width']['1']} 0 0 ${vars.color['border-color'].decorative.default};

    ${hasStickyHeader &&
    `
         display: block;  
         width: calc(100%);
         padding-right: ${hasScrollbar ? /** srollbar width */ vars.spacing['4'] : '0px'};
         box-sizing: border-box;

         tr {
           display: flex;
         }
      `}

    ${hasScrollbar &&
    `
        box-shadow: ${vars['box-shadow']['2']}, 0 ${vars['border-width']['1']} 0 0 ${vars.color['border-color'].decorative.default} ;
      `}

      ${sx};
  `;
};
