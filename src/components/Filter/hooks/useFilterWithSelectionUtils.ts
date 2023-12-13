import { debounce, differenceBy, isEqual } from 'lodash';
import { useState } from 'react';
import React from 'react';

import type { FilterOption, FilterProps } from '../Filter.types';
import { SELECT_ALL_OPTION } from 'components/Select/constants';

const useFilterWithSelectionUtils = ({
  isMulti,
  setIsOpen,
  isSearchable,
  onChange,
  selectedFilter,
  onAsyncSearch,
  isAsync,
  minCharactersToSearch,
  items,
  onClear,
}: Pick<
  FilterProps,
  | 'isMulti'
  | 'isSearchable'
  | 'onChange'
  | 'selectedFilter'
  | 'onAsyncSearch'
  | 'isAsync'
  | 'minCharactersToSearch'
  | 'items'
  | 'onClear'
> & {
  setIsOpen: any;
}) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredOptions: FilterOption[] = React.useMemo(() => {
    if (!items) return undefined;

    const optionsToBeFiltered: FilterOption[] =
      isMulti && Array.isArray(selectedFilter)
        ? differenceBy(items, selectedFilter, 'value')
        : items;

    if (isAsync) return optionsToBeFiltered;

    return optionsToBeFiltered.filter(
      (item) => !searchValue || item.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [isAsync, items, isMulti, selectedFilter, searchValue]);

  const handleFilterClick = (option: FilterOption) => {
    if (!isMulti) {
      setIsOpen(false);
    }

    if (isSearchable) {
      setSearchValue('');
    }

    if (isMulti) {
      if (onChange && selectedFilter) {
        if (isEqual(option, SELECT_ALL_OPTION)) {
          //@ts-ignore
          onChange(filteredOptions.filter((o) => !o.isDisabled));
        } else {
          //@ts-ignore
          onChange([...selectedFilter, option]);
        }
      }
    } else {
      //@ts-ignore
      onChange(option);
    }
  };

  const debouncedOnChange = React.useCallback(
    debounce((value: string) => {
      onAsyncSearch?.(value);
    }, 400),
    []
  );

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    if (isSearchable) {
      setSearchValue(value);
    }

    if (isAsync) {
      event.persist();

      if (minCharactersToSearch && value.length && value.length < minCharactersToSearch) {
        return;
      }

      debouncedOnChange(value.trim());
    }
  };

  const handleFilterDelete = (option: FilterOption) => {
    const items = Array.isArray(selectedFilter)
      ? selectedFilter.filter((o) => o.value !== option.value)
      : [];

    //@ts-ignore
    if (onChange) onChange(items);
  };

  const handleClear = () => {
    if (onClear) {
      onClear();
    }

    setSearchValue('');
  };

  return {
    searchValue,
    handleFilterClick,
    handleInput,
    filteredOptions,
    handleFilterDelete,
    handleClear,
  };
};

export default useFilterWithSelectionUtils;
