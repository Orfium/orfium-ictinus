import { SwitchAria } from 'react-aria';
import { TestProps } from '../../../utils/types';
import { LabelConfig } from '../Controls.types';
import * as React from 'react';
export type SwitchProps = Partial<SwitchAria> & {
    /** Id property of the switch element */
    id?: string;
    /** The value of the switch element */
    value?: string;
    /** Callback for when the element's selection state changes. */
    onChange?: (isSelected: boolean) => void;
    /** Label configuration; includes placement, size, helpText and sx */
    labelConfig?: LabelConfig;
    children?: React.ReactNode;
} & TestProps;
declare const Switch: React.ForwardRefExoticComponent<Partial<SwitchAria> & {
    /** Id property of the switch element */
    id?: string;
    /** The value of the switch element */
    value?: string;
    /** Callback for when the element's selection state changes. */
    onChange?: (isSelected: boolean) => void;
    /** Label configuration; includes placement, size, helpText and sx */
    labelConfig?: LabelConfig;
    children?: React.ReactNode;
} & TestProps & React.RefAttributes<HTMLLabelElement>>;
export default Switch;
