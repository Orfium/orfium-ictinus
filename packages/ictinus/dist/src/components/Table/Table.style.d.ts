import { CSSObject, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
export declare const tableContainer: () => (theme: Theme) => SerializedStyles;
export declare const tableStyles: ({ sx }: {
    sx?: CSSObject;
}) => SerializedStyles;
