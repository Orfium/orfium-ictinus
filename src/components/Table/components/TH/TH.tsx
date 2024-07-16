import type { CSSObject } from '@emotion/react';
import type { ColumnSort } from '@tanstack/react-table';
import React from 'react';
import isEqual from 'react-fast-compare';
import type { DivProps } from 'utils/common';

import { THOptions } from './components';
import SortingButton from './components/SortingButton';
import { thContainer, optionsContainer, thContent } from './TH.style';
import type { RowSize } from 'components/Table/types';

import type { TestProps } from '~/utils/types';

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
  colSortingState?: ColumnSort & { badge?: number };
  /** Callback to reset sorting for this column */
  resetSorting?: () => void;
  /** Metadata for the th element */
  metaData?: any;
  /** Style overrides */
  sx?: CSSObject;
} & TestProps;

const TH: React.FCC<Props & Pick<DivProps, 'onClick' | 'id'>> = ({
  width,
  rowSize = 'sm',
  children,
  onSort,
  isMultiSortable,
  colSortingState,
  resetSorting,
  sx,
  id,
  metaData,
  dataTestPrefixId,
  ...rest
}) => {
  const isSortable = Boolean(onSort);
  const isCheckbox = id === 'checkbox_select';
  const isExpandedButton = id === 'details_iconButton';

  const [hasVisibleOptions, setHasVisibleOptions] = React.useState(false);

  const { desc: isDesc, badge } = colSortingState ?? {};

  const { contentAlign = 'left' } = metaData;

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

    return (
      <SortingButton
        id={id}
        isDesc={isDesc}
        onClick={handleClick}
        badge={badge}
        dataTestPrefixId={dataTestPrefixId}
      />
    );
  };

  return (
    <th
      css={thContainer({
        isCheckbox,
        isExpandedButton,
        rowSize,
        width,
        hasVisibleOptions: hasVisibleOptions || Boolean(colSortingState),
        isSortable,
        sx,
      })}
      data-testid={`${dataTestPrefixId}_table_th_${id}`}
      {...rest}
    >
      <div css={thContent({ contentAlign })}>
        <div css={{ textWrap: 'nowrap' }} data-testid={`${dataTestPrefixId}_table_th_${id}_title`}>
          {children}
        </div>
        {isSortable && (
          <div
            css={optionsContainer()}
            data-header-role="options"
            data-testid={`${dataTestPrefixId}_table_th_${id}_options`}
          >
            {sortIcon()}
            <THOptions
              onSort={onSort}
              isMultiSortable={isMultiSortable}
              onButtonClick={(isDropdownVisible) => setHasVisibleOptions(isDropdownVisible)}
              dataTestPrefixId={`${dataTestPrefixId}_sort_${id}`}
            />
          </div>
        )}
      </div>
    </th>
  );
};

export default React.memo(TH, isEqual);
