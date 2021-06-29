import React from 'react';
import List from '../List';
import { ListProps } from '../List/List';
import { SelectOption } from '../Select/Select';

interface Props extends Omit<ListProps, 'data'> {
  itemsCount: number;
}

const ListShowcase: React.FC<Props> = ({ itemsCount, rowSize, width, height, isVirtualized }) => {
  const items: SelectOption[] = Array(itemsCount)
    .fill({})
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map((_, i) => {
      return { value: i, label: 'Item ' + i };
    });

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
