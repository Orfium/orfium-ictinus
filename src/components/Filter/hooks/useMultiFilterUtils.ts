import { isEqual } from 'lodash';
import { useEffect, useState } from 'react';

import { FilterOption } from '../types';
import { Props as FilterProps } from '../types';
import { SELECT_ALL_OPTION } from 'components/Select/constants';

type Props = Pick<
  FilterProps,
  'multi' | 'selectedItems' | 'items' | 'defaultValue' | 'onClear' | 'onFilterDelete'
> & {
  setFilterLabel: (value: string) => void;
  setIsOpen: (value: boolean) => void;
  setSearchValue: (value: string) => void;
};

const useMultiFilterUtils = ({
  multi,
  selectedItems = [],
  items,
  defaultValue,
  setFilterLabel,
  setIsOpen,
  onClear,
  setSearchValue,
  onFilterDelete = () => {},
}: Props) => {
  const [availableMultiFilters, setAvailableMultiFilters] = useState<FilterOption[]>([]);

  const [multiFilters, setMultiFilters] = useState(selectedItems);

  useEffect(() => {
    if (multi) {
      const selectedFilterValues = multiFilters?.map(({ value }) => value) ?? [];

      setAvailableMultiFilters(
        items?.filter((item) => !selectedFilterValues.includes(item.value)) ?? []
      );
    }
  }, [items, multiFilters, multi]);

  const updateMultiFilterLabel = (items: FilterOption[]) => {
    if (items.length > 0) {
      if (items.length === 1) {
        setFilterLabel(items[0].label);
      } else {
        setFilterLabel(`${items[0].label} + ${items.length - 1} more`);
      }
    } else {
      setFilterLabel(defaultValue.label);
    }
  };

  const handleOptionDelete = (option?: FilterOption) => {
    let newItems: FilterOption[] = [];

    if (option) {
      newItems = multiFilters.filter((opt) => opt.value !== option?.value);
      setMultiFilters(newItems);
      setAvailableMultiFilters([...availableMultiFilters, option]);
      onFilterDelete(option);
    } else {
      if (multiFilters.length > 0) {
        const lastItem = multiFilters[multiFilters.length - 1];
        newItems = multiFilters.filter((opt) => opt.value !== lastItem.value);
        setMultiFilters(newItems);
        setAvailableMultiFilters([...availableMultiFilters, lastItem]);
      }
    }

    updateMultiFilterLabel(newItems);
  };

  const handleMultiSelectOptionClick = (option: FilterOption) => {
    let newItems: FilterOption[] = [];

    if (isEqual(option, SELECT_ALL_OPTION)) {
      newItems = [...multiFilters, ...availableMultiFilters];
      setMultiFilters(newItems);
      setAvailableMultiFilters([]);
      setIsOpen(false);
    } else {
      newItems = [...multiFilters, option];
      setMultiFilters(newItems);
      setAvailableMultiFilters(availableMultiFilters.filter((opt) => opt.value !== option.value));
    }
    updateMultiFilterLabel(newItems);
  };

  const handleClearAllOptions = () => {
    setAvailableMultiFilters([...availableMultiFilters, ...multiFilters]);
    setMultiFilters([]);

    if (onClear) {
      onClear();
    }

    setSearchValue('');

    setFilterLabel(defaultValue.label);
  };

  return {
    availableMultiFilters,
    setAvailableMultiFilters,
    multiFilters,
    setMultiFilters,
    handleOptionDelete,
    handleClearAllOptions,
    handleMultiSelectOptionClick,
  };
};

export default useMultiFilterUtils;
