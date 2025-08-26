import { TextInputBaseProps } from '../TextInputBase';
import { InputHTMLAttributes, default as React } from 'react';
import { TestProps } from '../../utils/types';
export type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'readOnly' | 'disabled' | 'size'>>;
type MaskProps = {
    mask?: never;
} | {
    mask?: string | (string | RegExp)[];
    placeholder?: never;
};
export type TextFieldProps = {
    /** The id of the text field that will be used as for in label too */
    id?: string;
    /** Callback fired when the `input` is blurred. */
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /** Callback fired when the `input` is changed. */
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    /** Callback fired when the `input` is focused. */
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    /** Callback fired when the `input` has a key down event. */
    onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    /** Callback fired when the `input` value typed is changed */
    onInput?: React.EventHandler<any>;
    /** Boolean to make the input readonly. Default to false. */
    isReadOnly?: boolean;
    /** [For MultiTextField] If true, the user can add multiple tags as an input */
    isMulti?: boolean;
    /** [For MultiTextField] The values of the tags */
    tags?: string[];
    /** [For MultiTextField] A callback for when a Tag value is deleted */
    onMultiValueDelete?: (value: string) => void;
    /** [For MultiTextField] A callback for when all values are deleted  */
    onMultiValueClearAll?: () => void;
} & TextInputBaseProps & MaskProps & InputProps & TestProps;
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<TextFieldProps & React.RefAttributes<HTMLInputElement>>>;
export default _default;
