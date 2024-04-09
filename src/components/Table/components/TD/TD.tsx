import type { RowSize } from 'index';
import React from 'react';

import { tdContainer, tdContent } from './TD.style';

type Props = {
  /** The html colSpan attribute */
  colSpan?: number;
  /** Size of Row */
  rowSize?: RowSize;
};

const TD: React.FCC<Props> = ({ colSpan, rowSize = 'sm', children, ...rest }) => {
  return (
    <td css={tdContainer({ rowSize })} colSpan={colSpan} {...rest}>
      <div css={tdContent()}>{children}</div>
    </td>
  );
};

export default TD;
