import { SelectOption } from '../Select/Select';

export const isSelected = ({
  item,
  selectedItem,
}: {
  item: string | number | SelectOption;
  selectedItem: string | number | undefined;
}): boolean =>
  typeof item === 'string' || typeof item === 'number'
    ? item === selectedItem
    : item.value === selectedItem;
