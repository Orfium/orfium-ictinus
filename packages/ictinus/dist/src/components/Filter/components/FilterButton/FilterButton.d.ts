import { EventButtonProps } from '../../../ButtonBase';
import { FilterProps } from '../../Filter.types';
import { default as React } from 'react';
import { CommonButtonProps } from '../../../../utils/common';
import { TestProps } from '../../../../utils/types';
export type FilterButtonProps = Pick<FilterProps, 'filterType'> & React.PropsWithChildren<{
    isDisabled?: boolean;
    onClear?: () => void;
    isActive?: boolean;
    isPopulated?: boolean;
    moreFilters?: number;
}> & TestProps & EventButtonProps & CommonButtonProps;
export declare const FilterButton: React.ForwardRefExoticComponent<Pick<FilterProps, "filterType"> & {
    isDisabled?: boolean;
    onClear?: () => void;
    isActive?: boolean;
    isPopulated?: boolean;
    moreFilters?: number;
} & {
    children?: React.ReactNode | undefined;
} & TestProps & EventButtonProps & Partial<Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick" | "onBlur" | "css" | "disabled" | "size">> & React.RefAttributes<HTMLButtonElement>>;
export default FilterButton;
