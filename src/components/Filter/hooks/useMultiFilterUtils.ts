import { isEqual } from 'lodash';
import { useCallback, useEffect, useState } from 'react';

import type { FilterOption } from '../types';
import type { FilterProps } from '../types';
import { SELECT_ALL_OPTION } from 'components/Select/constants';

type Props = Pick<
  FilterProps,
  'isMulti' | 'selectedItems' | 'items' | 'defaultValue' | 'onClear' | 'onFilterDelete'
> & {
  setFilterLabel: (value: string) => void;
  setIsOpen: (value: boolean) => void;
  setSearchValue: (value: string) => void;
};

const useMultiFilterUtils = ({
  isMulti,
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
    if (isMulti) {
      const selectedFilterValues = multiFilters?.map(({ value }) => value) ?? [];

      setAvailableMultiFilters(
        items?.filter((item) => !selectedFilterValues.includes(item.value)) ?? []
      );
    }
  }, [items, multiFilters, isMulti]);

  const updateMultiFilterLabel = useCallback(
    (items: FilterOption[]) => {
      if (items.length > 0) {
        if (items.length === 1) {
          setFilterLabel(items[0].label);
        } else {
          setFilterLabel(`${items[0].label} + ${items.length - 1} more`);
        }
      } else {
        setFilterLabel(defaultValue.label);
      }
    },
    [defaultValue.label, setFilterLabel]
  );

  const handleOptionDelete = useCallback(
    (option?: FilterOption) => {
      if (option) {
        const newItems = multiFilters.filter((opt) => opt.value !== option?.value);
        setMultiFilters(newItems);
        setAvailableMultiFilters([...availableMultiFilters, option]);
        onFilterDelete(option);
        updateMultiFilterLabel(newItems);
      } else {
        if (multiFilters.length > 0) {
          const lastItem = multiFilters[multiFilters.length - 1];
          const newItems = multiFilters.filter((opt) => opt.value !== lastItem.value);
          setMultiFilters(newItems);
          setAvailableMultiFilters([...availableMultiFilters, lastItem]);
          updateMultiFilterLabel(newItems);
        }
      }
    },
    [availableMultiFilters, multiFilters, onFilterDelete, updateMultiFilterLabel]
  );

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
