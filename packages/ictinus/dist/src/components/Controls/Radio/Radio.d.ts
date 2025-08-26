import { RadioAria } from 'react-aria';
import { TestProps } from '../../../utils/types';
import { LabelConfig } from '../Controls.types';
import * as React from 'react';
export type RadioProps = Partial<RadioAria> & {
    /** Id property of the radio input */
    id?: string;
    /** The value of the radio input */
    value: string;
    /** Label configuration; includes placement, size, helpText and sx */
    labelConfig?: LabelConfig;
    children?: React.ReactNode;
} & TestProps;
declare const Radio: React.ForwardRefExoticComponent<Partial<RadioAria> & {
    /** Id property of the radio input */
    id?: string;
    /** The value of the radio input */
    value: string;
    /** Label configuration; includes placement, size, helpText and sx */
    labelConfig?: LabelConfig;
    children?: React.ReactNode;
} & TestProps & React.RefAttributes<HTMLInputElement>>;
export default Radio;
