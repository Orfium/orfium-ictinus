import type { CSSObject, SerializedStyles, Theme } from '@emotion/react';
import { css } from '@emotion/react';

import type { RowSize, TableProps } from 'components/Table';

/** @TODO replace all css with tokens */

export const getMinHeight = (rowSize: RowSize) => (theme: Theme) => {
  switch (rowSize) {
    case 'md':
      return theme.globals.sizing.get('13');
    case 'lg':
      return theme.globals.sizing.get('15');
    default: /** sm and default */
      return theme.globals.sizing.get('11');
  }
};

export const tdContainer =
  ({
    rowSize,
    width,
    sx,
  }: Pick<TableProps<any>, 'rowSize'> & { width?: number; isLastCell?: boolean; sx?: CSSObject }) =>
  (theme: Theme): SerializedStyles => {
    const getWidth = () => {
      if (width) {
        return `${width}%`;
      }

      return '100%';
    };

    return css`
      width: ${getWidth()};
      height: ${getMinHeight(rowSize)(theme)};
      padding: 8px 16px;
      border-bottom: 1px solid ${theme.tokens.colors.get('borderColor.decorative.default')};
      box-sizing: border-box;
      align-content: center;

      ${sx};
    `;
  };

export const tdContent = (): SerializedStyles => {
  return css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
};
