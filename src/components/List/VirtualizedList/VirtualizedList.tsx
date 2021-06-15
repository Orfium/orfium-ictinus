import React from 'react';
import { List as VList } from 'react-virtualized';

import ListItem from '../ListItem';

type Props = {
  items: string[];
  width: number;
  height: number;
  rowSize: 'normal' | 'small';
  dataTestIdPrefix?: string;
};

const VirtualizedList: React.FC<Props> = ({ items, width, height, rowSize, dataTestIdPrefix }) => {
  const rowRenderer = ({ index, key, style }: { index: number; key: string; style: any }) => (
    <span style={style} key={key}>
      <ListItem
        size={rowSize}
        content={items[index]}
        index={index}
        dataTestIdPrefix={dataTestIdPrefix}
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
