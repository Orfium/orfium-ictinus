import React from 'react';

import NormalList from './NormalList';
import VirtualizedList from './VirtualizedList';
import { SelectOption } from '../Select/Select';

export interface ListProps {
  /** Data for the list */
  data: (string | number | SelectOption)[];
  /** Size of the list's row (height of ListItem Component)  */
  rowSize: 'small' | 'normal';
  /** Width of the list */
  width: number;
  /** Height of the list */
  height: number;
  /** Virtualized list option */
  isVirtualized?: boolean;
  /** Ref of ListItem component */
  listItemRef?: React.RefObject<HTMLDivElement>;
  /** Selected Item */
  selectedItem?: string | number;
  /** Search Term to be highlighted in list items */
  searchTerm?: string;
  /** Option Click handler for SelectOption[] data case */
  handleOptionClick?: (option: SelectOption) => void;
  /** Data Test Id Prefix */
  dataTestIdPrefix?: string;
}

const List: React.FC<ListProps> = ({
  data,
  rowSize,
  width,
  height,
  isVirtualized = false,
  listItemRef,
  selectedItem,
  searchTerm,
  handleOptionClick,
  dataTestIdPrefix,
}) => {
  return isVirtualized ? (
    <VirtualizedList
      items={data}
      rowSize={rowSize}
      width={width}
      height={height}
      listItemRef={listItemRef}
      selectedItem={selectedItem}
      searchTerm={searchTerm}
      handleOptionClick={handleOptionClick}
      dataTestIdPrefix={dataTestIdPrefix}
    />
  ) : (
    <NormalList
      items={data}
      rowSize={rowSize}
      width={width}
      height={height}
      listItemRef={listItemRef}
      selectedItem={selectedItem}
      searchTerm={searchTerm}
      handleOptionClick={handleOptionClick}
      dataTestIdPrefix={dataTestIdPrefix}
    />
  );
};

export default List;
