import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { TextFieldProps } from '.';
export declare const iconWrapperStyle: ({ iconPosition, isClickable }: {
    iconPosition?: "left" | "right";
    isClickable?: boolean;
}) => (theme: Theme) => SerializedStyles;
export declare const suffixContainerStyle: ({ size, isClickable }: Pick<TextFieldProps, "size"> & {
    isClickable?: boolean;
}) => () => SerializedStyles;
