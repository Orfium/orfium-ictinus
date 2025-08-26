import { SerializedStyles, Theme } from '@emotion/react';
import { TPaginationProps } from './TPagination';
export declare const paginationContainer: ({ isSticky }: Pick<TPaginationProps, "isSticky">) => (theme: Theme) => SerializedStyles;
export declare const itemsPerPageContainer: () => (theme: Theme) => SerializedStyles;
export declare const counterContainer: () => (theme: Theme) => SerializedStyles;
export declare const counterWrapper: () => (theme: Theme) => SerializedStyles;
export declare const buttonsContainer: () => SerializedStyles;
