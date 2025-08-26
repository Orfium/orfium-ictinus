import { SerializedStyles } from '@emotion/react';
import { TextFieldProps } from '../../../TextField/TextField';
import { Theme } from 'theme';
import { SelectMenuProps } from './SelectMenu';
export declare const optionStyle: ({ isSelected, hasNoResultsExist, }: {
    isSelected: boolean;
    hasNoResultsExist?: boolean;
} & Omit<TextFieldProps, "ref" | "label">) => (theme: Theme) => SerializedStyles;
export declare const menuStyle: ({ status, isVirtualized, sx }: SelectMenuProps & Omit<TextFieldProps, "ref" | "label">) => (theme: Theme) => SerializedStyles;
export declare const innerMenuStyle: ({ height }: {
    height: number;
}) => SerializedStyles;
