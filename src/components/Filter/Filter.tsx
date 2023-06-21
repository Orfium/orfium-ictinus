import { debounce } from 'lodash';
import React, { useMemo } from 'react';
import { ChangeEvent } from 'utils/common';
import { errorHandler } from 'utils/helpers';

import FilterBase from './components/FilterBase';
import MultiFilter from './components/MultiFilter/MultiFilter';
import SingleFilter from './components/SingleFilter/SingleFilter';
import useMultiFilterUtils from './hooks/useMultiFilterUtils';
import { FilterOption, FilterProps } from './types';
import { errors } from './utils';
import ClickAwayListener from '../utils/ClickAwayListener';
import handleSearch from 'components/utils/handleSearch';
import PositionInScreen from 'components/utils/PositionInScreen/PositionInScreen';

const Filter = React.forwardRef<HTMLButtonElement, FilterProps>((props, ref) => {
  const {
    items,
    onSelect,
    selectedItem,
    defaultValue,
    styleType,
    label = '',
    buttonType = 'primary',
    filterType = 'preset',
    isDisabled = false,
    dataTestId,
    isSearchable = false,
    minCharactersToSearch = 0,
    onAsyncSearch,
    isLoading = false,
    isVirtualized = false,
    isMulti = false,
    selectedItems = [],
    onClear = () => {},
    onFilterDelete = () => {},
    hasSelectAllOption = false,
  } = props;

  errorHandler<FilterProps>(errors, props);

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
    isMulti,
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
      isSearchable: isSearchable || isMulti,
      isAsync,
      setSearchValue,
      onChange: debouncedOnChange,
      minCharactersToSearch,
    });
  };

  const filteredOptions = useMemo(() => {
    const optionsToBeFiltered = isMulti ? availableMultiFilters : items;

    if (onAsyncSearch) {
      return optionsToBeFiltered;
    }

    return optionsToBeFiltered.filter(
      (item) => !searchValue || item.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [isMulti, availableMultiFilters, items, onAsyncSearch, searchValue]);

  const isDefaultOptionVisible = searchValue === '' && !!items.length;

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
    if (isMulti) {
      handleMultiSelectOptionClick(option);
    } else {
      setIsOpen(false);
      setFilterLabel(option.label);
    }

    if (isSearchable || isMulti) {
      setSearchValue('');
    }

    onSelect(option);
  };

  const handleClear = () => {
    if (filterType === 'added' && !isMulti) {
      setFilterLabel(defaultValue.label);
    }

    if (onClear) {
      onClear();
    }
  };

  const getFilter = () =>
    isMulti ? (
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
        isDefaultOptionVisible={isDefaultOptionVisible}
      />
    );

  return (
    <ClickAwayListener onClick={() => setIsOpen(false)}>
      <PositionInScreen
        isVisible={isOpen}
        hasWrapperWidth
        offsetY={8}
        sx={{ container: { width: 'max-content' } }}
        parent={
          <FilterBase
            ref={ref}
            dataTestId={dataTestId}
            handleOpen={handleOpen}
            isDisabled={isDisabled}
            onClear={handleClear}
            selectedItemLabel={filterLabel}
            isOpen={isOpen}
            hasSelectedValue={hasSelectedValue}
            label={label as string}
            iconName={iconName}
            filterType={filterType}
            buttonType={buttonType}
            styleType={styleType}
            isMulti={isMulti}
          />
        }
      >
        {isOpen && getFilter()}
      </PositionInScreen>
    </ClickAwayListener>
  );
});

Filter.displayName = 'Filter';

export default Filter;
