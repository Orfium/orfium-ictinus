import { PositionInScreen } from 'components/utils/PositionInScreen';
import useKeyboard from 'hooks/useKeyboardEvents';
import { head, omit } from 'lodash-es';
import React, { useRef, useState } from 'react';
import FilterButton from './components/FilterButton';
import FilterMenu from './components/FilterMenu';
import type { FilterOption, FilterProps } from './Filter.types';
import { useFilterWithSelectionUtils } from './hooks';

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
    hasWrapperWidth = false,
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

  const listRef = useRef<HTMLUListElement | null>(null);

  const { keyboardProps } = useKeyboard({
    events: {
      keydown: {
        onArrowDown: () => {
          if (isOpen) {
            setTimeout(() => {
              const options = listRef.current?.querySelectorAll('[role="option"]');
              if (options && options?.length > 0) {
                const firstOption = head(options);
                if (firstOption instanceof HTMLElement && typeof firstOption.focus === 'function') {
                  firstOption.focus();
                }
              }
            }, 0);
          }
        },
      },
    },
  });

  const filterOverlay = filteredOptions ? (
    // @ts-ignore
    <FilterMenu
      listRef={listRef}
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
    <PositionInScreen
      isVisible={isOpen}
      setIsVisible={setIsOpen}
      offsetY={8}
      hasWrapperWidth={hasWrapperWidth}
      parent={
        <FilterButton
          ref={ref}
          {...omit(keyboardProps, 'onBlur')}
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
      {filterOverlay}
    </PositionInScreen>
  );
});

Filter.displayName = 'Filter';

export default Filter;
