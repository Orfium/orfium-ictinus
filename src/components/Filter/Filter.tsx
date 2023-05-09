import { debounce } from 'lodash';
import React, { useMemo } from 'react';
import { ChangeEvent } from 'utils/common';
import { errorHandler } from 'utils/helpers';

import ClickAwayListener from '../utils/ClickAwayListener';
import FilterBase from './components/FilterBase';
import MultiFilter from './components/MultiFilter/MultiFilter';
import SingleFilter from './components/SingleFilter/SingleFilter';
import useMultiFilterUtils from './hooks/useMultiFilterUtils';
import { FilterOption, Props } from './types';
import { errors } from './utils';
import handleSearch from 'components/utils/handleSearch';

const Filter = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    items,
    onSelect,
    selectedItem,
    defaultValue,
    styleType,
    label = '',
    buttonType = 'primary',
    filterType = 'preset',
    disabled = false,
    dataTestId,
    isSearchable = false,
    minCharactersToSearch = 0,
    onAsyncSearch,
    isLoading = false,
    isVirtualized = false,
    multi = false,
    selectedItems = [],
    onClear = () => {},
    onFilterDelete = () => {},
    hasSelectAllOption = false,
  } = props;

  errorHandler<Props>(errors, props);

  const [isOpen, setIsOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [filterLabel, setFilterLabel] = React.useState(defaultValue.label);

  const hasSelectedValue =
    Boolean(selectedItem?.value) && selectedItem?.value !== defaultValue.value;

  const iconName = isOpen ? 'triangleUp' : 'triangleDown';

  const {
    availableMultiFilters,
    multiFilters,
    handleOptionDelete,
    handleClearAllOptions,
    handleMultiSelectOptionClick,
  } = useMultiFilterUtils({
    multi,
    selectedItems,
    items,
    defaultValue,
    setFilterLabel,
    setIsOpen,
    onClear,
    setSearchValue,
    onFilterDelete,
  });

  const handleChange = (event: ChangeEvent) => {
    const isAsync = typeof onAsyncSearch === 'function';

    handleSearch({
      event,
      isSearchable: isSearchable || multi,
      isAsync,
      setSearchValue,
      onChange: debouncedOnChange,
      minCharactersToSearch,
    });
  };

  const filteredOptions = useMemo(() => {
    const optionsToBeFiltered = multi ? availableMultiFilters : items;

    if (onAsyncSearch) {
      return optionsToBeFiltered;
    }

    return optionsToBeFiltered.filter(
      (item) => !searchValue || item.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [multi, availableMultiFilters, items, onAsyncSearch, searchValue]);

  const shouldDisplayDefaultOption = searchValue === '' && !!items.length;

  const handleOpen = () => {
    setSearchValue('');
    setIsOpen(!isOpen);
  };

  const debouncedOnChange = React.useCallback(
    debounce((value: string) => {
      onAsyncSearch?.(value);
    }, 400),
    []
  );

  const handleSelect = (option: FilterOption) => {
    if (multi) {
      handleMultiSelectOptionClick(option);
    } else {
      setIsOpen(false);
      setFilterLabel(option.label);
    }

    if (isSearchable || multi) {
      setSearchValue('');
    }

    onSelect(option);
  };

  const getFilter = () =>
    multi ? (
      <MultiFilter
        selectedItems={multiFilters}
        items={filteredOptions}
        onInput={handleChange}
        onOptionDelete={handleOptionDelete}
        onClearAllOptions={handleClearAllOptions}
        onOptionClick={handleSelect}
        searchValue={searchValue}
        isLoading={isLoading}
        hasSelectAllOption={hasSelectAllOption}
      />
    ) : (
      <SingleFilter
        isSearchable={isSearchable}
        dataTestId={dataTestId}
        searchValue={searchValue}
        handleChange={handleChange}
        isLoading={isLoading}
        filteredOptions={filteredOptions}
        isVirtualized={isVirtualized}
        defaultValue={defaultValue}
        selectedItem={selectedItem}
        handleSelect={handleSelect}
        shouldDisplayDefaultOption={shouldDisplayDefaultOption}
      />
    );

  return (
    <ClickAwayListener onClick={() => setIsOpen(false)}>
      <FilterBase
        ref={ref}
        dataTestId={dataTestId}
        handleOpen={handleOpen}
        disabled={disabled}
        onClear={onClear}
        selectedItemLabel={filterLabel}
        open={isOpen}
        hasSelectedValue={hasSelectedValue}
        label={label as string}
        iconName={iconName}
        filterType={filterType}
        buttonType={buttonType}
        styleType={styleType}
        multi={multi}
      >
        {isOpen && getFilter()}
      </FilterBase>
    </ClickAwayListener>
  );
});
Filter.displayName = 'Filter';
export default Filter;
