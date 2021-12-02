import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { TestProps } from 'utils/types';

import { wrapperStyle } from './List.style';
import NormalList from './NormalList';
import { ListItemType, ListRowSize, SelectHandlerType } from './types';
import VirtualizedList from './VirtualizedList';

export type ListProps = {
  /** Data for the list */
  data: ListItemType[];
  /** Size of the list's row (height of ListItem Component)  */
  rowSize: ListRowSize;
  /** Width of the list */
  width?: number;
  /** Height of the list */
  height?: number;
  /** Virtualized list option */
  isVirtualized?: boolean;
  /** Selected Item */
  selectedItem?: ListItemType;
  /** Default option. Renders on top of the list, highlighted - for Filter component */
  defaultOption?: ListItemType;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Option Click handler for SelectOption[] data case */
  handleOptionClick?: SelectHandlerType;
  /** Defines if this is searchable list or not **/
  isSearchable?: boolean;
} & TestProps;

const List = React.forwardRef<HTMLDivElement, ListProps>(
  (
    {
      data,
      rowSize,
      width,
      height,
      isVirtualized = false,
      selectedItem,
      isSearchable,
      defaultOption,
      searchTerm,
      handleOptionClick,
      dataTestId,
    },
    ref
  ) => {
    return (
      <div css={wrapperStyle({ width, isSearchable })}>
        {isVirtualized ? (
          <VirtualizedList
            items={data}
            rowSize={rowSize}
            customWidth={width}
            customHeight={height}
            ref={ref}
            selectedItem={selectedItem}
            defaultOption={defaultOption}
            searchTerm={searchTerm}
            handleOptionClick={handleOptionClick}
            dataTestId={dataTestId}
          />
        ) : (
          <NormalList
            items={data}
            rowSize={rowSize}
            width={width}
            height={height}
            ref={ref}
            selectedItem={selectedItem}
            isSearchable={isSearchable}
            defaultOption={defaultOption}
            searchTerm={searchTerm}
            handleOptionClick={handleOptionClick}
            dataTestId={dataTestId}
          />
        )}
      </div>
    );
  }
);
List.displayName = 'List';

export default memo(List, isEqual);
