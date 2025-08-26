import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
export declare const borderedRowStyle: ({ isBordered, isCustomCell }: {
    isBordered: boolean;
    isCustomCell?: boolean;
}) => (theme: Theme) => SerializedStyles;
export declare const expandableRowStyle: ({ isFirstRow, hasFixedHeader }: {
    isFirstRow: boolean;
    hasFixedHeader: boolean;
}) => (theme: Theme) => SerializedStyles;
