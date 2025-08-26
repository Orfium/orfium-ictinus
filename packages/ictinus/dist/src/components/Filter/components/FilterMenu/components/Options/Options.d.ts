import { FilterOption, FilterProps, MultiFilterProps, SingleFilterProps } from '../../../../Filter.types';
import { default as React } from 'react';
export type Props = Pick<FilterProps, 'items' | 'defaultValue' | 'isSearchable' | 'isVirtualized' | 'hasSelectAllOption' | 'dataTestPrefixId'> & (SingleFilterProps | MultiFilterProps) & {
    onOptionSelect: (option: FilterOption) => void;
    listRef?: React.MutableRefObject<HTMLUListElement>;
};
declare const Options: React.FCC<Props>;
export default Options;
