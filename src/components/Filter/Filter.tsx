import debounce from 'lodash/debounce';
import React, { useCallback, useMemo } from 'react';
import { ChangeEvent } from 'utils/common';
import { errorHandler } from 'utils/helpers';

import FilterBase from './components/FilterBase';
import MultiFilter from './components/MultiFilter/MultiFilter';
import SingleFilter from './components/SingleFilter/SingleFilter';
import useMultiFilterUtils from './hooks/useMultiFilterUtils';
import { FilterOption, Props } from './types';
import { errors, getInitialFilterLabel } from './utils';
import handleSearch from 'components/utils/handleSearch';
import PositionInScreen from 'components/utils/PositionInScreen/PositionInScreen';

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
  const [filterLabel, setFilterLabel] = React.useState<string>(
    getInitialFilterLabel(defaultValue, multi, selectedItem, selectedItems)
  );

  React.useEffect(() => {
    /** Run this useEffect only for single Filter, multi Filter updates the label on every multi filter chip addition/deletion/clear all */
    if (!multi) {
      setFilterLabel(getInitialFilterLabel(defaultValue, multi, selectedItem, selectedItems));
    }
  }, [defaultValue, filterLabel, multi, selectedItem, selectedItems]);

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

  const debouncedOnChange = useCallback(
    debounce((value: string) => {
      onAsyncSearch?.(value);
    }, 400),
    []
  );

  const handleChange = useCallback(
    (event: ChangeEvent) => {
      const isAsync = typeof onAsyncSearch === 'function';

      handleSearch({
        event,
        isSearchable: isSearchable || multi,
        isAsync,
        setSearchValue,
        onChange: debouncedOnChange,
        minCharactersToSearch,
      });
    },
    [debouncedOnChange, isSearchable, minCharactersToSearch, multi, onAsyncSearch]
  );

  const filteredOptions = useMemo(() => {
    const optionsToBeFiltered = multi ? availableMultiFilters : items;

    if (onAsyncSearch) {
      return optionsToBeFiltered;
    }

    return optionsToBeFiltered.filter(
      (item) => !searchValue || item.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [multi, availableMultiFilters, items, onAsyncSearch, searchValue]);

  const shouldDisplayDefaultOption =
    !searchValue || defaultValue.label.toLowerCase().includes(searchValue.toLowerCase());

  const handleOpen = () => {
    setSearchValue('');
    setIsOpen(!isOpen);
  };

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

  const handleClear = () => {
    if (filterType === 'added' && !multi) {
      setFilterLabel(defaultValue.label);
    }

    if (onClear) {
      onClear();
    }
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
    <PositionInScreen
      visible={isOpen}
      setIsVisible={setIsOpen}
      hasWrapperWidth
      offsetY={8}
      sx={{ container: { width: 'max-content' } }}
      parent={
        <FilterBase
          ref={ref}
          dataTestId={dataTestId}
          handleOpen={handleOpen}
          disabled={disabled}
          onClear={handleClear}
          selectedItemLabel={filterLabel}
          open={isOpen}
          hasSelectedValue={hasSelectedValue}
          label={label as string}
          iconName={iconName}
          filterType={filterType}
          buttonType={buttonType}
          styleType={styleType}
          multi={multi}
        />
      }
    >
      {getFilter()}
    </PositionInScreen>
  );
});
Filter.displayName = 'Filter';
export default Filter;
