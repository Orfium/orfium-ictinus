import { CSSObject } from '@emotion/react';
import { TextInputBaseProps } from '../../../TextInputBase';
import { ComponentSizes } from '../../../../utils/types';
import { SelectOption } from '../../types';
export type SelectMenuProps = {
    filteredOptions: SelectOption[];
    handleOptionClick: (option: SelectOption) => void;
    selectedOption: SelectOption;
    isLoading?: boolean;
    isVirtualized?: boolean;
    hasSelectAllOption?: boolean;
    size?: ComponentSizes;
    sx?: CSSObject;
} & Pick<TextInputBaseProps, 'status'>;
declare const SelectMenu: import('react').ForwardRefExoticComponent<{
    filteredOptions: SelectOption[];
    handleOptionClick: (option: SelectOption) => void;
    selectedOption: SelectOption;
    isLoading?: boolean;
    isVirtualized?: boolean;
    hasSelectAllOption?: boolean;
    size?: ComponentSizes;
    sx?: CSSObject;
} & Pick<TextInputBaseProps, "status"> & import('react').RefAttributes<HTMLUListElement>>;
export default SelectMenu;
