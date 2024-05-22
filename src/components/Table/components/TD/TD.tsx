import type { CSSObject } from '@emotion/react';
import type { RowSize } from 'index';
import React from 'react';
import isEqual from 'react-fast-compare';

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
  /** Whether is a row details td element */
  isDetails?: boolean;
};

const TD: React.FCC<Props> = ({
  colSpan,
  rowSize = 'sm',
  isDetails = false,
  width,
  sx,
  children,
  columnId,
  ...rest
}) => {
  const isCheckbox = columnId === 'checkbox_select';
  const isExpandedButton = columnId === 'details_iconButton';

  return isDetails ? (
    <td colSpan={colSpan} css={simpleTdContainer()}>
      {children}
    </td>
  ) : (
    <td
      css={tdContainer({ rowSize, width, isCheckbox, isExpandedButton, sx })}
      colSpan={colSpan}
      {...rest}
    >
      <div css={tdContent()}>{children}</div>
    </td>
  );
};

export default React.memo(TD, isEqual);
