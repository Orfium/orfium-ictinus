import React from 'react';
import { List as VList, AutoSizer } from 'react-virtualized';

import ListItem from '../ListItem';
import { SelectOption } from '../../Select/Select';
import { isSelected } from '../utils';
import { listStyle } from './VirtualizedList.style';

type Props = {
  items: (string | number | SelectOption)[];
  /** Size of the list's row (height of ListItem Component)  */
  rowSize: 'small' | 'normal';
  /** Width of the list */
  customWidth?: number;
  /** Height of the list */
  customHeight?: number;
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
  customWidth,
  customHeight,
  rowSize,
  listItemRef,
  selectedItem,
  searchTerm,
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
        searchTerm={searchTerm}
        dataTestIdPrefix={dataTestIdPrefix}
        handleOptionClick={handleOptionClick}
      />
    </span>
  );

  return (
    <AutoSizer
      css={listStyle({ width: customWidth, height: customHeight })}
      data-testid={dataTestIdPrefix ? `${dataTestIdPrefix}_list` : 'ictinus_list'}
    >
      {({ height, width }) => (
        <VList
          width={customWidth ?? width}
          height={customHeight ?? height}
          rowCount={items.length}
          rowHeight={rowSize === 'normal' ? 56 : 46}
          rowRenderer={rowRenderer}
        />
      )}
    </AutoSizer>
  );
};

export default VirtualizedList;
