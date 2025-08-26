import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { THeadProps } from './THead';
export declare const tHeadContainer: ({ hasStickyHeader, hasScrollbar, sx, }: Pick<THeadProps, "hasStickyHeader" | "sx"> & {
    hasScrollbar?: boolean;
}) => (theme: Theme) => SerializedStyles;
