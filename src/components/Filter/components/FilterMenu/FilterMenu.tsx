import React from 'react';

import FilterSearchField from './components/FilterSearchField';
import Options from './components/Options';
import { menuStyle } from './FilterMenu.style';
import type {
  FilterOption,
  FilterProps,
  MultiFilterProps,
  SingleFilterProps,
} from 'components/Filter/Filter.types';

type Props = Pick<
  FilterProps,
  | 'isSearchable'
  | 'isLoading'
  | 'onClear'
  | 'onFilterDelete'
  | 'isVirtualized'
  | 'hasSelectAllOption'
  | 'dataTestPrefixId'
> & {
  searchValue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filteredOptions: FilterOption[];
  handleSelect: (option: FilterOption) => void;
  listRef?: React.MutableRefObject<HTMLUListElement>;
} & (SingleFilterProps | MultiFilterProps);

const FilterMenu: React.FCC<Props> = ({
  isSearchable,
  isMulti,
  searchValue,
  handleChange,
  onClear,
  isLoading,
  filteredOptions,
  selectedFilter,
  isVirtualized,
  hasSelectAllOption,
  handleSelect,
  onFilterDelete,
  dataTestPrefixId,
  listRef,
}) => {
  return (
    <div css={menuStyle()}>
      {(isMulti === true || isSearchable) && (
        // @ts-ignore
        <FilterSearchField
          isMulti={isMulti}
          isSearchable={isSearchable}
          value={searchValue}
          onInputChange={handleChange}
          onClear={onClear}
          onFilterDelete={onFilterDelete}
          selectedFilter={selectedFilter}
          dataTestPrefixId={dataTestPrefixId}
          isLoading={isLoading}
        />
      )}
      {/**  @ts-ignore */}
      <Options
        listRef={listRef}
        dataTestPrefixId={dataTestPrefixId}
        items={filteredOptions}
        isVirtualized={isVirtualized}
        defaultValue={{ label: '', value: '' }}
        isSearchable={isSearchable}
        selectedFilter={selectedFilter}
        onOptionSelect={handleSelect}
        hasSelectAllOption={hasSelectAllOption}
        isMulti={isMulti}
      />
    </div>
  );
};

export default FilterMenu;
