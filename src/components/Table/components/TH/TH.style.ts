import type { SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';

import { getMinHeight } from '../TD/TD.style';
import type { TableProps } from 'components/Table';
import { generateStylesFromTokens } from 'components/Typography/utils';

/** @TODO replace all css with tokens */

export const thContainer =
  ({ rowSize, width }: Pick<TableProps<any>, 'rowSize'> & { width?: number }) =>
  (theme: Theme): SerializedStyles => {
    return css`
      width: ${width ? `${width}%` : undefined};
      height: ${getMinHeight(rowSize)(theme)};
      align-content: center;
      box-sizing: border-box;
      padding: 8px 16px;
      border-bottom: 1px solid ${theme.tokens.colors.get('borderColor.decorative.default')};
      border-right: 1px solid ${theme.tokens.colors.get('borderColor.decorative.default')};
      color: ${theme.tokens.colors.get('textColor.default.secondary')};
      ${generateStylesFromTokens(theme.tokens.typography.get('normal.body02'))};
    `;
  };
