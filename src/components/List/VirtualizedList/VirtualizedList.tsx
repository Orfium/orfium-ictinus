import React, { useCallback, useMemo } from 'react';
import { VariableSizeList as VList } from 'react-window';
import { CSSProperties } from 'styled-components';
import { TestProps } from 'utils/types';

import { SelectOption } from '../../Select';
import { listStyle } from '../List.style';
import ListItem from '../ListItem';
import ListItemGroup from '../ListItemGroup';
import { ListItemType, ListRowSize, SelectHandlerType } from '../types';
import { isSelected, MAX_LARGE_HEIGHT, MAX_SMALL_HEIGHT } from '../utils';

type VirtualizedListProps = {
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

const VirtualizedList = React.forwardRef<HTMLUListElement, VirtualizedListProps>(
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
    const data = useMemo(
      () => (defaultOption ? [defaultOption, ...items] : items),
      [defaultOption, items]
    );

    const itemSize = useCallback(
      (index: number) => {
        const sizeBase = rowSize === 'normal' ? 56 : 46;

        if ((data[index] as SelectOption)?.options) {
          return (((data[index] as SelectOption)?.options?.length as number) + 1) * sizeBase;
        }

        return sizeBase;
      },
      [data, rowSize]
    );

    const rowRenderer = ({ index, style }: { index: number; style: CSSProperties }) => {
      return (
        <span css={{ ...style }}>
          {(data[index] as SelectOption)?.options ? (
            <ul css={listStyle({})}>
              <ListItemGroup
                size={rowSize}
                content={data[index]}
                groupIndex={index}
                searchTerm={searchTerm}
                dataTestId={dataTestId}
                handleOptionClick={handleOptionClick}
                selectedItem={selectedItem}
              />
            </ul>
          ) : (
            <ListItem
              size={rowSize}
              content={data[index]}
              index={index}
              isDisabled={(data[index] as SelectOption)?.isDisabled}
              isSelected={isSelected({ item: data[index], selectedItem })}
              searchTerm={searchTerm}
              dataTestId={dataTestId + `${defaultOption && index === 0 && 'default'}`}
              isHighlighted={Boolean(defaultOption && index === 0)}
              handleOptionClick={handleOptionClick}
            />
          )}
        </span>
      );
    };

    return (
      <VList
        // @ts-ignore
        ref={ref}
        data-testid={dataTestId ? `${dataTestId}_list` : 'ictinus_list'}
        height={customHeight || rowSize === 'normal' ? MAX_LARGE_HEIGHT : MAX_SMALL_HEIGHT}
        width={customWidth || '100%'}
        itemCount={data.length}
        itemSize={itemSize}
        css={{ overflowX: 'hidden' }}
      >
        {rowRenderer}
      </VList>
    );
  }
);
VirtualizedList.displayName = 'VirtualizedList';

export default VirtualizedList;
