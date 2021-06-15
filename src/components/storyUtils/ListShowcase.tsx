import React from 'react';
import List from '../List';
import { ListProps } from '../List/List';

interface Props extends Omit<ListProps, 'data'> {
  itemsCount: number;
}

const ListShowcase: React.FC<Props> = ({ itemsCount, rowSize, width, height, isVirtualized }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const items = Array.from(new Array(itemsCount), (_, index) => 'Item ' + index);

  return (
    <List
      data={items}
      rowSize={rowSize}
      width={width}
      height={height}
      isVirtualized={isVirtualized}
    />
  );
};

export default ListShowcase;
