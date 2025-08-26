import { CSSObject, SerializedStyles } from '@emotion/react';
import { TBodyProps } from './TBody';
export declare const tBodyContainer: ({ hasStickyHeader, sx }: Pick<TBodyProps, "hasStickyHeader"> & {
    sx?: CSSObject;
}) => () => SerializedStyles;
