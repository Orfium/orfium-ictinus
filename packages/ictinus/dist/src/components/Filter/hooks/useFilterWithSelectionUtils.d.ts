import { default as React } from 'react';
import { FilterOption, FilterProps, MultiFilterProps, SingleFilterProps } from '../Filter.types';
declare const useFilterWithSelectionUtils: ({ isMulti, setIsOpen, isSearchable, onChange, selectedFilter, onAsyncSearch, isAsync, minCharactersToSearch, items, onClear, }: Pick<FilterProps, "isSearchable" | "onAsyncSearch" | "isAsync" | "minCharactersToSearch" | "items" | "onClear"> & {
    setIsOpen: any;
} & (SingleFilterProps | MultiFilterProps)) => {
    searchValue: string;
    handleFilterClick: (option: FilterOption) => void;
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filteredOptions: import('../../Select').SelectOption[];
    handleFilterDelete: (option: FilterOption) => void;
    handleClear: () => void;
};
export default useFilterWithSelectionUtils;
