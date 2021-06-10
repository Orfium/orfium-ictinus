import React from 'react';
import { List as VList } from 'react-virtualized';

import ListItem from './ListItem';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const items = Array.from(new Array(500), (_, index) => 'Item ' + index);

const rowRenderer = ({ index, key, style }: { index: number; key: string; style: any }) => (
  <span style={style} key={key}>
    <ListItem size={'small'} content={items[index]} index={index} rightIcon="earnings" hasCheckbox />
  </span>
);

const List: React.FC = () => {
  return (
    <VList
      width={300}
      height={300}
      rowCount={items.length}
      rowHeight={46}
      rowRenderer={rowRenderer}
    />
  );
};

export default List;
