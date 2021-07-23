import React from 'react';
import { FixedSizeList as VList } from 'react-window';
import { CSSProperties } from 'styled-components';
import { TestProps } from 'utils/types';

import {
  MAX_LARGE_HEIGHT,
  MAX_SMALL_HEIGHT,
} from '../../Select/components/SelectMenu/SelectMenu.style';
import { SelectOption } from '../../Select/Select';
import { ListRowSize } from '../List';
import ListItem from '../ListItem';
import { isSelected } from '../utils';

type Props = {
  items: (string | number | SelectOption)[];
  /** Size of the list's row (height of ListItem Component)  */
  rowSize: ListRowSize;
  /** Width of the list */
  customWidth?: number;
  /** Height of the list */
  customHeight?: number;
  /** Selected Item */
  selectedItem?: string | number;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Option Click handler for SelectOption[] data case */
  handleOptionClick?: (option: SelectOption) => void;
} & TestProps;

const VirtualizedList = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      items,
      customWidth,
      customHeight,
      rowSize,
      selectedItem,
      searchTerm,
      handleOptionClick,
      dataTestId,
    },
    ref
  ) => {
    const rowRenderer = ({ index, style }: { index: number; style: CSSProperties }) => (
      <span style={style}>
        <ListItem
          size={rowSize}
          content={items[index]}
          index={index}
          ref={ref}
          selected={isSelected({ item: items[index], selectedItem })}
          searchTerm={searchTerm}
          dataTestId={dataTestId}
          handleOptionClick={handleOptionClick}
        />
      </span>
    );

    return (
      <VList
        data-testid={dataTestId ? `${dataTestId}_list` : 'ictinus_list'}
        height={customHeight || rowSize === 'normal' ? MAX_LARGE_HEIGHT : MAX_SMALL_HEIGHT}
        width={customWidth || '100%'}
        itemCount={items.length}
        itemSize={rowSize === 'normal' ? 56 : 46}
        style={{ overflowX: 'hidden' }}
      >
        {rowRenderer}
      </VList>
    );
  }
);
VirtualizedList.displayName = 'VirtualizedList';

export default VirtualizedList;
