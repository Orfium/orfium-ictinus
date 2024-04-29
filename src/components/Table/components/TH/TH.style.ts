import type { CSSObject, SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { getMinHeight } from '../TD/TD.style';
import type { TableProps } from 'components/Table';
import { generateStylesFromTokens } from 'components/Typography/utils';

/** @TODO replace all css with tokens */

export const thContainer =
  ({ rowSize, width, sx }: Pick<TableProps<any>, 'rowSize'> & { width?: number; sx?: CSSObject }) =>
  (theme: Theme): SerializedStyles => {
    return css`
      width: ${width ? `${width}%` : '100%'};
      height: ${getMinHeight(rowSize)(theme)};
      align-content: center;
      text-align: left;
      box-sizing: border-box;
      padding: 8px 16px;
      color: ${theme.tokens.colors.get('textColor.default.secondary')};
      ${generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))};

      ${sx};
    `;
  };
