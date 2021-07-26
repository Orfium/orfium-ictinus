import { ListItemType } from './types';

/** For this amount of List Items the list of Filter will be non-virtualized */
export const MAX_NON_VIRTUALIZED_ITEMS = 6;

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
  const itemValue = typeof item === 'string' || typeof item === 'number' ? item : item.value;
  const selectedItemValue =
    typeof selectedItem === 'string' || typeof selectedItem === 'number'
      ? selectedItem
      : selectedItem?.value;

  return itemValue === selectedItemValue;
};
