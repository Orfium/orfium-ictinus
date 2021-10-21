import React from 'react';
import { FixedSizeList as VList } from 'react-window';
import { CSSProperties } from 'styled-components';
import { TestProps } from 'utils/types';

import { SelectOption } from '../../Select/Select';
import ListItem from '../ListItem';
import { ListItemType, ListRowSize, SelectHandlerType } from '../types';
import { isSelected, MAX_LARGE_HEIGHT, MAX_SMALL_HEIGHT } from '../utils';

type Props = {
  items: ListItemType[];
  /** Size of the list's row (height of ListItem Component)  */
  rowSize: ListRowSize;
  /** Width of the list */
  customWidth?: number;
  /** Height of the list */
  customHeight?: number;
  /** Selected Item */
  selectedItem?: ListItemType;
  /** Default option. Renders on top of the list, highlighted */
  defaultOption?: ListItemType;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Option Click handler for SelectOption[] data case */
  handleOptionClick?: SelectHandlerType;
} & TestProps;

const VirtualizedList = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      items,
      customWidth,
      customHeight,
      rowSize,
      selectedItem,
      defaultOption,
      searchTerm,
      handleOptionClick,
      dataTestId,
    },
    ref
  ) => {
    if (defaultOption) {
      items.unshift(defaultOption);
    }

    const rowRenderer = ({ index, style }: { index: number; style: CSSProperties }) => {
      return (
        <span css={{ ...style }}>
          <ListItem
            size={rowSize}
            content={items[index]}
            index={index}
            ref={ref}
            disabled={(items[index] as SelectOption)?.isDisabled}
            selected={isSelected({ item: items[index], selectedItem })}
            searchTerm={searchTerm}
            dataTestId={dataTestId + `${defaultOption && index === 0 && 'default'}`}
            highlighted={Boolean(defaultOption && index === 0)}
            handleOptionClick={handleOptionClick}
          />
        </span>
      );
    };

    return (
      <VList
        data-testid={dataTestId ? `${dataTestId}_list` : 'ictinus_list'}
        height={customHeight || rowSize === 'normal' ? MAX_LARGE_HEIGHT : MAX_SMALL_HEIGHT}
        width={customWidth || '100%'}
        itemCount={items.length}
        itemSize={rowSize === 'normal' ? 56 : 46}
        css={{ overflowX: 'hidden' }}
      >
        {rowRenderer}
      </VList>
    );
  }
);
VirtualizedList.displayName = 'VirtualizedList';

export default VirtualizedList;
