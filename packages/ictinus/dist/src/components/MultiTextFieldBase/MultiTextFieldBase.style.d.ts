import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
export declare const tagContent: ({ maxWidth }: {
    maxWidth?: number;
}) => () => SerializedStyles;
export declare const rightIconsContainer: () => (theme: Theme) => SerializedStyles;
export declare const progressIndicatorStyles: () => (theme: Theme) => SerializedStyles;
export declare const tagStyle: () => (theme: Theme) => SerializedStyles;
export declare const inputContainer: () => (theme: Theme) => SerializedStyles;
/** TextField overrides */
export declare const textInputBaseOverrides: ({ hasValue, hasLabel, isResponsive, isTextfield, }: {
    hasValue: boolean;
    isLoading?: boolean;
    hasLabel?: boolean;
    isResponsive?: boolean;
    isTextfield?: boolean;
}) => (theme: Theme) => {
    wrapper: {
        label: {
            fontWeight: string;
            transform: string;
            bottom: string;
        };
        height: string;
        minHeight: string;
    } | {
        'input:focus': {
            label: {
                fontWeight: string;
                transform: string;
                bottom: string;
            };
        };
        label: {
            transform: string;
        };
        height: string;
        minHeight: string;
    };
    textField: {
        minWidth?: string;
        width?: string;
        padding: string;
    };
};
export declare const inputOverrides: () => {
    input: {
        top: string;
        flex: string;
        minWidth: string;
        '&:focus, &:not(:placeholder-shown)': {
            '& + label': {
                transform: string;
            };
        };
    };
};
