import type { ColumnSort } from '@tanstack/react-table';
import React from 'react';
import isEqual from 'react-fast-compare';
import type { DivProps } from 'utils/common';

import { THOptions } from './components';
import { thContainer, optionsContainer } from './TH.style';
import type { AcceptedIconNames } from 'components/Icon';
import IconButton from 'components/IconButton';
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
  /** The Sorting State of the column */
  colSortingState?: ColumnSort;
  /** Callback to reset sorting for this column */
  resetSorting?: () => void;
};

const TH: React.FCC<Props & Pick<DivProps, 'onClick'>> = ({
  width,
  rowSize = 'sm',
  children,
  onSort,
  isMultiSortable,
  colSortingState,
  resetSorting,
  ...rest
}) => {
  const isSortable = Boolean(onSort);

  const [hasVisibleOptions, setHasVisibleOptions] = React.useState(false);

  const { desc: isDesc } = colSortingState ?? {};

  const sortIcon = () => {
    const handleClick = () => {
      if (isDesc === true) {
        return resetSorting();
      }

      if (isDesc === false) {
        return onSort(true, isMultiSortable);
      }

      return onSort(false, isMultiSortable);
    };

    const getIcon = (): AcceptedIconNames => {
      if (isDesc === false || isDesc === undefined) return 'arrowUp';

      return 'arrowDown';
    };

    return <IconButton iconName={getIcon()} type="tertiary" size="compact" onClick={handleClick} />;
  };

  return (
    <th
      css={thContainer({
        rowSize,
        width,
        hasVisibleOptions: hasVisibleOptions || Boolean(colSortingState),
        isSortable,
      })}
      {...rest}
    >
      <div css={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div css={{ textWrap: 'nowrap' }}>{children}</div>
        {isSortable && (
          <div css={optionsContainer()} data-header-role="options">
            {sortIcon()}
            <THOptions
              onSort={onSort}
              isMultiSortable={isMultiSortable}
              onButtonClick={(isDropdownVisible) => setHasVisibleOptions(isDropdownVisible)}
            />
          </div>
        )}
      </div>
    </th>
  );
};

export default React.memo(TH, isEqual);
