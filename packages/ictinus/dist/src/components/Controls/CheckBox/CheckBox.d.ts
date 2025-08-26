import { default as React } from 'react';
import { CheckboxAria } from 'react-aria';
import { TestProps } from '../../../utils/types';
import { LabelConfig } from '../Controls.types';
export type CheckBoxProps = Partial<CheckboxAria> & {
    /** Id property of the checkbox input */
    id?: string;
    /** The value of the checkbox input */
    value?: string;
    /** Callback for when the element's selection state changes. */
    onChange?: (isSelected: boolean) => void;
    /** Whether the checkbox is indeterminately selected. */
    isIndeterminate?: boolean;
    /** Label configuration; includes placement, size, helpText and sx */
    labelConfig?: LabelConfig;
    children?: React.ReactNode;
} & TestProps;
declare const CheckBox: React.ForwardRefExoticComponent<Partial<CheckboxAria> & {
    /** Id property of the checkbox input */
    id?: string;
    /** The value of the checkbox input */
    value?: string;
    /** Callback for when the element's selection state changes. */
    onChange?: (isSelected: boolean) => void;
    /** Whether the checkbox is indeterminately selected. */
    isIndeterminate?: boolean;
    /** Label configuration; includes placement, size, helpText and sx */
    labelConfig?: LabelConfig;
    children?: React.ReactNode;
} & TestProps & React.RefAttributes<HTMLLabelElement>>;
export default CheckBox;
