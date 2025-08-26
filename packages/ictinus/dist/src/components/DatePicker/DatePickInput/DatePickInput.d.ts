import { default as React, InputHTMLAttributes } from 'react';
import { TestProps } from '../../../utils/types';
import { TextFieldProps } from '../../TextField/TextField';
import { DateFormatType, DatePickerProps } from '../DatePicker.types';
import { Range } from '../OverlayComponent/OverlayComponent';
export type DatePickInputProps = Pick<DatePickerProps, 'filterConfig'> & {
    /** Callback for the calendar icon button of the input field */
    handleIconClick: () => void;
    /** Handles the clear action for the datepicker */
    handleClear: (event?: React.KeyboardEvent) => void;
    /** Defines whether the component selects a single date or a range */
    isRangePicker: boolean;
    /** The selected day */
    selectedDay: Range;
    /** Props for styling the input */
    inputProps?: Omit<TextFieldProps, 'size' | 'mask'>;
    /** Overrides the default date format */
    dateFormatOverride?: DateFormatType;
    /** Defines whether the component is open */
    isOpen: boolean;
} & InputProps & TestProps;
type InputProps = Partial<Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>>;
declare const DatePickInput: React.ForwardRefExoticComponent<Pick<DatePickerProps, "filterConfig"> & {
    /** Callback for the calendar icon button of the input field */
    handleIconClick: () => void;
    /** Handles the clear action for the datepicker */
    handleClear: (event?: React.KeyboardEvent) => void;
    /** Defines whether the component selects a single date or a range */
    isRangePicker: boolean;
    /** The selected day */
    selectedDay: Range;
    /** Props for styling the input */
    inputProps?: Omit<TextFieldProps, "size" | "mask">;
    /** Overrides the default date format */
    dateFormatOverride?: DateFormatType;
    /** Defines whether the component is open */
    isOpen: boolean;
} & Partial<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">> & TestProps & React.RefAttributes<HTMLInputElement>>;
export default DatePickInput;
