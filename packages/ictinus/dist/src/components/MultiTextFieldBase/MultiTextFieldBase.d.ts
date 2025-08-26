import { SelectOption } from '../Select';
import { TextFieldProps } from '../TextField/TextField';
import { default as React } from 'react';
import { TestProps } from '../../utils/types';
export type Props = {
    /** the values of the MultiTextField if MultiTextField is controlled */
    selectedOptions: SelectOption[] | string[];
    /** Callback fired when the `input` value typed is changed */
    onInput?: React.EventHandler<any>;
    /** Value of the `input` element */
    value?: string | number;
    /** Callback fired when the Delete button of each Tag is clicked */
    onOptionDelete: (option?: SelectOption | string) => void;
    /** Callback fired when the Delete button of the whole MultiSelect is clicked */
    onClearAllOptions: () => void;
    /** If the component is loading */
    isLoading?: boolean;
    /** Whether the Textfield should change its styles when hovered/focused etc */
    isInteractive?: boolean;
    /** If true, the TextField has a dynamic width, bounded by max and min width values  */
    isResponsive?: boolean;
    isTextfield?: boolean;
} & Omit<TextFieldProps, 'size'>;
declare const MultiTextFieldBase: React.ForwardRefExoticComponent<{
    /** the values of the MultiTextField if MultiTextField is controlled */
    selectedOptions: SelectOption[] | string[];
    /** Callback fired when the `input` value typed is changed */
    onInput?: React.EventHandler<any>;
    /** Value of the `input` element */
    value?: string | number;
    /** Callback fired when the Delete button of each Tag is clicked */
    onOptionDelete: (option?: SelectOption | string) => void;
    /** Callback fired when the Delete button of the whole MultiSelect is clicked */
    onClearAllOptions: () => void;
    /** If the component is loading */
    isLoading?: boolean;
    /** Whether the Textfield should change its styles when hovered/focused etc */
    isInteractive?: boolean;
    /** If true, the TextField has a dynamic width, bounded by max and min width values  */
    isResponsive?: boolean;
    isTextfield?: boolean;
} & Omit<TextFieldProps, "size"> & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "disabled" | "size" | "readOnly">> & TestProps & React.RefAttributes<HTMLInputElement>>;
export default MultiTextFieldBase;
