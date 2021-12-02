import React from 'react';

import List from '../List';
import { ListProps } from '../List/List';
import { SelectOption } from '../Select/Select';

interface Props extends Omit<ListProps, 'data'> {
  itemsCount: number;
  isListGroup: boolean;
}

const ListShowcase: React.FC<Props> = ({
  itemsCount,
  isListGroup,
  rowSize,
  width,
  height,
  isVirtualized,
}) => {
  const items: SelectOption[] = Array(itemsCount)
    .fill({})
    .map((__, index) => {
      return {
        value: index,
        label: (isListGroup ? 'Group ' : 'Item ') + index,
        options: isListGroup
          ? [
              { value: index, label: 'Option 1 of Group ' + index },
              { value: index, label: 'Option 2 of Group ' + index },
            ]
          : undefined,
      };
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
