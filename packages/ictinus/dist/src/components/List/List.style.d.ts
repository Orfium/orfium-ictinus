import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
export declare const wrapperStyle: ({ width, isSearchable }: {
    width: number | undefined;
    isSearchable?: boolean;
}) => (theme: Theme) => SerializedStyles;
export declare const listStyle: ({ width, height, maxHeight, isSearchable, }: {
    width?: number;
    height?: number;
    maxHeight?: number;
    isSearchable?: boolean;
}) => (theme: Theme) => SerializedStyles;
export declare const groupedUlStyle: () => SerializedStyles;
