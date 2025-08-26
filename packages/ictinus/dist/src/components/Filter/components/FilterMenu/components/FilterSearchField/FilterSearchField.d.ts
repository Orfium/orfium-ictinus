import { FilterProps, MultiFilterProps, SingleFilterProps } from '../../../../Filter.types';
import { default as React } from 'react';
export type SearchInputProps = {
    value: string;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    dataTestId?: string;
} & Pick<FilterProps, 'isSearchable' | 'isLoading' | 'onClear' | 'onFilterDelete' | 'dataTestPrefixId'> & (SingleFilterProps | MultiFilterProps);
declare const FilterSearchField: ({ onInputChange, value, dataTestId, isLoading, isMulti, isSearchable, onClear, selectedFilter, onFilterDelete, dataTestPrefixId, }: SearchInputProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export default FilterSearchField;
