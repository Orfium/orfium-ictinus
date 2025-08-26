import { CSSObject } from '@emotion/react';
import { RowSize, TestProps } from 'index';
import { default as React } from 'react';
type Props = {
    /** The html colSpan attribute */
    colSpan?: number;
    /** Size of Row */
    rowSize?: RowSize;
    /** The width of the cell */
    width?: number;
    /** Style overrides */
    sx?: CSSObject;
    /** Column Id */
    columnId?: string;
    /** Row Id */
    rowId?: string;
    /** Whether is a row details td element */
    isDetails?: boolean;
    /** Metadata for the td element */
    metaData?: any;
} & TestProps;
declare const TD: React.FCC<Props>;
export default TD;
