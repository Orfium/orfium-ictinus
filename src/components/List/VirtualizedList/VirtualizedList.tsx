import React from 'react';
import { List as VList } from 'react-virtualized';

import ListItem from '../ListItem';
import { SelectOption } from '../../Select/Select';
import { isSelected } from '../utils';

type Props = {
  items: (string | number | SelectOption)[];
  /** Size of the list's row (height of ListItem Component)  */
  rowSize: 'small' | 'normal';
  /** Width of the list */
  width: number;
  /** Height of the list */
  height: number;
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
};

const VirtualizedList: React.FC<Props> = ({
  items,
  width,
  height,
  rowSize,
  listItemRef,
  selectedItem,
  handleOptionClick,
  dataTestIdPrefix,
}) => {
  const rowRenderer = ({ index, key, style }: { index: number; key: string; style: any }) => (
    <span style={style} key={key}>
      <ListItem
        size={rowSize}
        content={items[index]}
        index={index}
        listItemRef={listItemRef}
        selected={isSelected({ item: items[index], selectedItem })}
        dataTestIdPrefix={dataTestIdPrefix}
        handleOptionClick={handleOptionClick}
      />
    </span>
  );

  return (
    <div data-testid={dataTestIdPrefix ? `${dataTestIdPrefix}_list` : 'ictinus_list'}>
      <VList
        width={width}
        height={height}
        rowCount={items.length}
        rowHeight={rowSize === 'normal' ? 56 : 46}
        rowRenderer={rowRenderer}
      />
    </div>
  );
};

export default VirtualizedList;
