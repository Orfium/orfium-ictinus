import React from 'react';

import { ListItemType } from './types';

/** For this amount of List Items the list of Filter will be non-virtualized */
export const MAX_NON_VIRTUALIZED_ITEMS_FILTER = 6;
export const MAX_NON_VIRTUALIZED_ITEMS_SELECT = 5;

/** Min-max heights for VList */
export const MAX_LARGE_HEIGHT = 277;
export const MAX_SMALL_HEIGHT = 265;

export const isSelected = ({
  item,
  selectedItem,
}: {
  item: ListItemType;
  selectedItem: ListItemType | undefined;
}): boolean => {
  if (item && React.isValidElement(item)) {
    return false;
  }
  const checkIfItemHasValue = (item: ListItemType) => {
    if (
      item &&
      !React.isValidElement(item) &&
      typeof item === 'object' &&
      !Array.isArray(item) &&
      'value' in item &&
      item?.value
    ) {
      return item.value;
    }

    return item;
  };
  const itemValue =
    typeof item === 'string' || typeof item === 'number' ? item : checkIfItemHasValue(item);
  const selectedItemValue =
    typeof selectedItem === 'string' || typeof selectedItem === 'number'
      ? selectedItem
      : checkIfItemHasValue(selectedItem);

  return itemValue === selectedItemValue;
};
