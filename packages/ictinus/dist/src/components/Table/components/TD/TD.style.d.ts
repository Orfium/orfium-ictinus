import { CSSObject, SerializedStyles, Theme } from '@emotion/react';
import { ContentAlign, TableProps } from '../..';
export declare const simpleTdContainer: () => (theme: Theme) => SerializedStyles;
export declare const tdContainer: ({ rowSize, width, isCheckbox, isExpandedButton, sx, }: Pick<TableProps<any>, "rowSize"> & {
    isCheckbox?: boolean;
    isExpandedButton?: boolean;
    width?: number;
    isLastCell?: boolean;
    sx?: CSSObject;
}) => (theme: Theme) => SerializedStyles;
export declare const tdContent: ({ contentAlign }: {
    contentAlign: ContentAlign;
}) => SerializedStyles;
