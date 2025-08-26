import { CSSObject } from '@emotion/react';
import { TestProps } from '../../../../../utils/types';
import * as React from 'react';
export type Props = {
    /** The current selected value */
    value?: string;
    /** Callback that is called when the value changes. */
    onChange?: (value: string) => void;
    /** Whether the whole RadioGroup is disabled */
    isDisabled?: boolean;
    /** Styles that will apply on the RadioGroup container */
    sx?: CSSObject;
    children?: React.ReactNode;
} & TestProps;
declare const RadioGroup: React.ForwardRefExoticComponent<{
    /** The current selected value */
    value?: string;
    /** Callback that is called when the value changes. */
    onChange?: (value: string) => void;
    /** Whether the whole RadioGroup is disabled */
    isDisabled?: boolean;
    /** Styles that will apply on the RadioGroup container */
    sx?: CSSObject;
    children?: React.ReactNode;
} & TestProps & React.RefAttributes<HTMLDivElement>>;
export default RadioGroup;
