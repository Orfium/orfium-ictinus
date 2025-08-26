import { FilterOption, FilterProps, MultiFilterProps, SingleFilterProps } from '../../Filter.types';
import { default as React } from 'react';
type Props = Pick<FilterProps, 'isSearchable' | 'isLoading' | 'onClear' | 'onFilterDelete' | 'isVirtualized' | 'hasSelectAllOption' | 'dataTestPrefixId'> & {
    searchValue: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filteredOptions: FilterOption[];
    handleSelect: (option: FilterOption) => void;
    listRef?: React.MutableRefObject<HTMLUListElement>;
} & (SingleFilterProps | MultiFilterProps);
declare const FilterMenu: React.FCC<Props>;
export default FilterMenu;
