import { default as React } from 'react';
import { TextFieldProps } from '../TextField/TextField';
export type NumberFieldProps = Omit<TextFieldProps, 'mask' | 'maskChar' | 'value' | 'onChange' | 'isMulti' | 'onMultiValueClearAll' | 'onMultiValueDelete'> & {
    /** Callback fired when the `input` is changed. */
    onChange?: (value: number) => void;
    /** The value of the `input` element. */
    value?: number;
    /** Formatting options for the value displayed in the number field, following the Intl.NumberFormatOptions type */
    formatOptions?: Intl.NumberFormatOptions;
    /** Whether the numberInput has a stepper */
    hasStepper?: boolean;
    /** The amount that the input value changes with each increment or decrement "tick". Defaults to 1 */
    step?: number;
    /** The smallest value allowed for the input. */
    minValue?: number;
    /** The largest value allowed for the input. */
    maxValue?: number;
};
declare const NumberField: React.ForwardRefExoticComponent<Omit<TextFieldProps, "mask" | "onChange" | "value" | "isMulti" | "onMultiValueDelete" | "onMultiValueClearAll" | "maskChar"> & {
    /** Callback fired when the `input` is changed. */
    onChange?: (value: number) => void;
    /** The value of the `input` element. */
    value?: number;
    /** Formatting options for the value displayed in the number field, following the Intl.NumberFormatOptions type */
    formatOptions?: Intl.NumberFormatOptions;
    /** Whether the numberInput has a stepper */
    hasStepper?: boolean;
    /** The amount that the input value changes with each increment or decrement "tick". Defaults to 1 */
    step?: number;
    /** The smallest value allowed for the input. */
    minValue?: number;
    /** The largest value allowed for the input. */
    maxValue?: number;
} & React.RefAttributes<HTMLInputElement>>;
export default NumberField;
