import React from 'react';

import { thContainer } from './TH.style';
import type { RowSize } from 'components/Table/types';

type Props = {
  /** The html colSpan attribute */
  colSpan?: number;
  /** Size of Row */
  rowSize: RowSize;
};

const TH: React.FCC<Props> = ({ rowSize = 'sm', children, ...rest }) => {
  return (
    <th css={thContainer({ rowSize })} {...rest}>
      {children}
    </th>
  );
};

export default TH;
