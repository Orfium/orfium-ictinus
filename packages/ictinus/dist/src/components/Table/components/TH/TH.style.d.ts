import { CSSObject, SerializedStyles, Theme } from '@emotion/react';
import { TableProps } from '../..';
export declare const thContainer: ({ isCheckbox, isExpandedButton, rowSize, width, hasVisibleOptions, isSortable, sx, }: Pick<TableProps<any>, "rowSize"> & {
    isCheckbox?: boolean;
    isExpandedButton?: boolean;
    width?: number;
    hasVisibleOptions?: boolean;
    isSortable?: boolean;
    sx?: CSSObject;
}) => (theme: Theme) => SerializedStyles;
export declare const thContent: ({ contentAlign }: {
    contentAlign: string;
}) => (theme: Theme) => SerializedStyles;
export declare const optionsContainer: () => SerializedStyles;
