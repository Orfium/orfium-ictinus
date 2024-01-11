import React, { useState } from 'react';

import FilterButton from './components/FilterButton';
import FilterMenu from './components/FilterMenu';
import type { FilterOption, FilterProps } from './Filter.types';
import { useFilterWithSelectionUtils } from './hooks';
import ClickAwayListener from 'components/utils/ClickAwayListener';
import PositionInScreen from 'components/utils/PositionInScreen';

const Filter = React.forwardRef<HTMLButtonElement, FilterProps>((props, ref) => {
  const {
    label = 'Filter',
    filterType = 'preset',
    items,
    children,
    onChange,
    isMulti,
    selectedFilter,
    isVirtualized = false,
    defaultValue,
    isDisabled,
    onClear,
    isAsync,
    onAsyncSearch,
    isLoading,
    isSearchable,
    minCharactersToSearch,
    hasSelectAllOption = false,
    dataTestPrefixId = 'ictinus_filter',
  } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const {
    searchValue,
    handleFilterClick,
    handleInput,
    filteredOptions,
    handleFilterDelete,
    handleClear,
  } = useFilterWithSelectionUtils(
    // @ts-ignore
    {
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
    }
  );

  const getLabel = React.useMemo(() => {
    if (isMulti) {
      return `${label}: ${selectedFilter?.length ? selectedFilter[0]?.label : defaultValue.label}`;
    }

    return `${label}: ${(selectedFilter as FilterOption)?.label ?? defaultValue.label}`;
  }, [defaultValue.label, isMulti, label, selectedFilter]);

  const [filterLabel, setFilterLabel] = useState(getLabel);

  React.useEffect(() => {
    setFilterLabel(getLabel);
  }, [getLabel]);

  const moreFilters = isMulti && selectedFilter?.length > 1 ? selectedFilter.length - 1 : undefined;

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const filterOverlay = filteredOptions ? (
    // @ts-ignore
    <FilterMenu
      isMulti={isMulti}
      isVirtualized={isVirtualized}
      isSearchable={isSearchable}
      searchValue={searchValue}
      handleChange={handleInput}
      handleSelect={handleFilterClick}
      onFilterDelete={handleFilterDelete}
      onClear={handleClear}
      selectedFilter={selectedFilter}
      filteredOptions={filteredOptions}
      isLoading={isLoading}
      hasSelectAllOption={hasSelectAllOption}
      dataTestPrefixId={dataTestPrefixId}
    />
  ) : (
    <div data-testid={`${dataTestPrefixId}_filter_overlay`}>
      {children({ isOpen, setIsOpen, filterLabel, setFilterLabel })}
    </div>
  );

  return (
    <ClickAwayListener onClick={() => setIsOpen(false)}>
      <PositionInScreen
        isVisible={isOpen}
        offsetY={8}
        hasWrapperWidth
        sx={{ container: { width: 'max-content' } }}
        parent={
          <FilterButton
            ref={ref}
            isMulti={isMulti}
            isActive={isOpen}
            moreFilters={moreFilters}
            onClear={handleClear}
            onClick={handleClick}
            filterType={filterType}
            isPopulated={Boolean(isMulti ? selectedFilter?.length : selectedFilter)}
            dataTestPrefixId={dataTestPrefixId}
            isDisabled={isDisabled}
          >
            {filterLabel}
          </FilterButton>
        }
      >
        {isOpen && filterOverlay}
      </PositionInScreen>
    </ClickAwayListener>
  );
});

Filter.displayName = 'Filter';

export default Filter;
