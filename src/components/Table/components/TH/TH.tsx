import React from 'react';
import isEqual from 'react-fast-compare';

import { thContainer } from './TH.style';
import type { RowSize } from 'components/Table/types';

type Props = {
  /** The html colSpan attribute */
  colSpan?: number;
  /** Size of Row */
  rowSize: RowSize;
  /** Width of the cell */
  width?: number;
};

const TH: React.FCC<Props> = ({ width, rowSize = 'sm', children, ...rest }) => {
  return (
    <th css={thContainer({ rowSize, width })} {...rest}>
      {children}
    </th>
  );
};

export default React.memo(TH, isEqual);
