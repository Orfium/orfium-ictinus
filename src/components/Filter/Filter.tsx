import debounce from 'lodash/debounce';
import React, { useMemo } from 'react';
import { ChangeEvent } from 'utils/common';
import { errorHandler, generateTestDataId } from 'utils/helpers';

import ClickAwayListener from '../utils/ClickAwayListener';
import FilterBase from './components/FilterBase';
import Options from './components/Options/Options';
import SearchInput from './components/SearchInput/SearchInput';
import { menuStyle } from './Filter.style';
import { FilterOption, FilterProps } from './types';
import { errors } from './utils';
import handleSearch from 'components/utils/handleSearch';

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
    onClear = () => {},
  } = props;

  errorHandler<FilterProps>(errors, props);

  const [isOpen, setIsOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  const hasSelectedValue =
    Boolean(selectedItem?.value) && selectedItem?.value !== defaultValue.value;

  const iconName = isOpen ? 'triangleUp' : 'triangleDown';

  const handleSelect = (option: FilterOption) => {
    setIsOpen(false);
    onSelect(option);
  };

  const handleChange = (event: ChangeEvent) => {
    const isAsync = typeof onAsyncSearch === 'function';

    handleSearch({
      event,
      isSearchable,
      isAsync,
      setSearchValue,
      onChange: debouncedOnChange,
      minCharactersToSearch,
    });
  };

  const filteredOptions = useMemo(() => {
    if (onAsyncSearch) {
      return items;
    }

    return items.filter(
      (item) => !searchValue || item.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [searchValue, items, onAsyncSearch]);

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

  return (
    <ClickAwayListener onClick={() => setIsOpen(false)}>
      <FilterBase
        ref={ref}
        dataTestId={dataTestId}
        handleOpen={handleOpen}
        isDisabled={isDisabled}
        onClear={onClear}
        selectedItemLabel={selectedItem?.label ?? defaultValue.label}
        isOpen={isOpen}
        hasSelectedValue={hasSelectedValue}
        label={label as string}
        iconName={iconName}
        filterType={filterType}
        buttonType={buttonType}
        styleType={styleType}
      >
        {isOpen && (
          <div css={menuStyle()} data-testid={generateTestDataId('filter-menu', dataTestId)}>
            {isSearchable && (
              <SearchInput
                value={searchValue}
                onChange={handleChange}
                dataTestId={dataTestId}
                isLoading={isLoading}
              />
            )}
            <Options
              dataTestId={dataTestId}
              items={filteredOptions}
              isVirtualized={isVirtualized}
              defaultValue={defaultValue}
              isSearchable={isSearchable}
              selectedItem={selectedItem}
              onSelect={handleSelect}
              isDefaultOptionVisible={isDefaultOptionVisible}
            />
          </div>
        )}
      </FilterBase>
    </ClickAwayListener>
  );
});

Filter.displayName = 'Filter';

export default Filter;
