import type { CSSObject } from '@emotion/react';
import type { RowSize, TestProps } from 'index';
import React from 'react';

import { simpleTdContainer, tdContainer, tdContent } from './TD.style';

type Props = {
  /** The html colSpan attribute */
  colSpan?: number;
  /** Size of Row */
  rowSize?: RowSize;
  /** The width of the cell */
  width?: number;
  /** Style overrides */
  sx?: CSSObject;
  /** Column Id */
  columnId?: string;
  /** Row Id */
  rowId?: string;
  /** Whether is a row details td element */
  isDetails?: boolean;
  /** Metadata for the td element */
  metaData?: any;
} & TestProps;

const TD: React.FCC<Props> = ({
  colSpan,
  rowSize = 'sm',
  isDetails = false,
  width,
  sx,
  children,
  columnId,
  rowId,
  metaData,
  dataTestPrefixId,
  ...rest
}) => {
  const isCheckbox = columnId === 'checkbox_select';
  const isExpandedButton = columnId === 'details_iconButton';

  const { contentAlign = 'left' } = metaData ?? {};

  return isDetails ? (
    <td
      colSpan={colSpan}
      css={simpleTdContainer()}
      data-testid={`${dataTestPrefixId}_table_row_${rowId}_details`}
    >
      {children}
    </td>
  ) : (
    <td
      css={tdContainer({ rowSize, width, isCheckbox, isExpandedButton, sx })}
      colSpan={colSpan}
      data-testid={`${dataTestPrefixId}_table_row_${rowId}`}
      {...rest}
    >
      <div css={tdContent({ contentAlign })}>{children}</div>
    </td>
  );
};

export default TD;
