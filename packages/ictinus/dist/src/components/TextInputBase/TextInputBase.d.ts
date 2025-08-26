import { CSSObject } from '@emotion/serialize';
import { default as React } from 'react';
import { ComponentSizes, TestProps } from '../../utils/types';
import { AcceptedIconNames } from '../Icon';
export type TextInputBaseProps = {
    /** The label of the text field that will be used as a placeholder and a label */
    label: string;
    /** The placeholder of the input that will be used. This is shown if no label exists */
    placeholder?: string;
    /** The size of input */
    size?: ComponentSizes;
    /** An optional suffix (element or icon-name) to show to the left */
    suffix?: AcceptedIconNames | React.ReactNode | null;
    /** If the text field value is required */
    isRequired?: boolean;
    /** If the text field is disabled */
    isDisabled?: boolean;
    /** The status of the TextInput with an optional hint message */
    status?: {
        type: 'normal' | 'error' | 'read-only';
        hintMessage?: string;
        id?: string;
    };
    /** value of the input */
    value?: string | number | null;
    /** Sx prop to override specific properties */
    sx?: {
        wrapper?: CSSObject;
        textField?: CSSObject;
        input?: CSSObject;
    };
    /** Whether the Textfield should change its styles when hovered/focused etc */
    isInteractive?: boolean;
    children?: React.ReactNode;
} & TestProps;
declare const _default: React.NamedExoticComponent<React.PropsWithChildren<Omit<TextInputBaseProps, "label" | "value" | "placeholder" | "isRequired" | "suffix">>>;
export default _default;
