import uniqueId from 'lodash/uniqueId';
import React from 'react';

import List from '../List';
import { ListProps } from '../List';
import { SelectOption } from '../Select';

interface Props extends Omit<ListProps, 'data'> {
  itemsCount: number;
  isListGroup?: boolean;
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
              { value: uniqueId(), label: 'Option 1 of Group ' + index },
              { value: uniqueId(), label: 'Option 2 of Group ' + index },
            ]
          : undefined,
      };
    });

  return (
    <List
      id={'listshowcase'}
      data={items}
      rowSize={rowSize}
      width={width}
      defaultOption={{ value: '', label: 'All' }}
      height={height}
      isVirtualized={isVirtualized}
    />
  );
};

export default ListShowcase;
