import React from 'react';
import isEqual from 'react-fast-compare';
import type { DivProps } from 'utils/common';

import { THOptions } from './components';
import { thContainer } from './TH.style';
import type { RowSize } from 'components/Table/types';

type Props = {
  /** The html colSpan attribute */
  colSpan?: number;
  /** Size of Row */
  rowSize: RowSize;
  /** Width of the cell */
  width?: number;
  /** Sorting callback  */
  onSort?: (desc?: boolean, isMulti?: boolean) => void;
  /** Whether multi-sorting is enabled */
  isMultiSortable?: boolean;
};

const TH: React.FCC<Props & Pick<DivProps, 'onClick'>> = ({
  width,
  rowSize = 'sm',
  children,
  onSort,
  isMultiSortable,
  ...rest
}) => {
  const isSortable = Boolean(onSort);

  return (
    <th css={thContainer({ rowSize, width })} {...rest}>
      <div css={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div>{children}</div>
        {isSortable && <THOptions onSort={onSort} isMultiSortable={isMultiSortable} />}
      </div>
    </th>
  );
};

export default React.memo(TH, isEqual);
