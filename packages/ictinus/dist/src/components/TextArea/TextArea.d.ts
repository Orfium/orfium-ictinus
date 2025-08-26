import { TestProps } from '../../utils/types';
import { TextInputBaseProps } from '../TextInputBase/TextInputBase';
import * as React from 'react';
export type TextAreaProps = {
    /** The id of the text field that will be used as for in label too */
    id?: string;
    /** The value of the textarea element */
    value?: string;
    /** The placeholder of the input that will be used. This is shown if no label exists */
    placeholder?: string;
    /** If the text field value is required */
    isRequired?: boolean;
    /** Boolean to make the input readonly. Default to false. */
    isReadOnly?: boolean;
    /** If the text field is disabled */
    isDisabled?: boolean;
    /** If the text area can be resized */
    isResizeEnabled?: boolean;
    /** Number of maximum characters. Will be shown on the counter on the bottom right of the component */
    maxCharacters?: number;
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
} & Omit<React.HTMLProps<HTMLTextAreaElement>, 'size'> & Pick<TextInputBaseProps, 'status' | 'label'> & TestProps;
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<TextAreaProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>>;
export default _default;
