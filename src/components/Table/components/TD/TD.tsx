import type { CSSObject } from '@emotion/react';
import type { RowSize } from 'index';
import React from 'react';
import isEqual from 'react-fast-compare';

import { tdContainer, tdContent } from './TD.style';

type Props = {
  /** The html colSpan attribute */
  colSpan?: number;
  /** Size of Row */
  rowSize?: RowSize;
  /** The width of the cell */
  width?: number;
  /** Style overrides */
  sx?: CSSObject;
};

const TD: React.FCC<Props> = ({ colSpan, rowSize = 'sm', width, sx, children, ...rest }) => {
  return (
    <td css={tdContainer({ rowSize, width, sx })} colSpan={colSpan} {...rest}>
      <div css={tdContent()}>{children}</div>
    </td>
  );
};

export default React.memo(TD, isEqual);
