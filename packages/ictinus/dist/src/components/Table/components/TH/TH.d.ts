import { CSSObject } from '@emotion/react';
import { ColumnSort } from '@tanstack/react-table';
import { default as React } from 'react';
import { DivProps } from '../../../../utils/common';
import { RowSize } from '../../types';
import { TestProps } from '../../../../utils/types';
type Props = {
    /** The html colSpan attribute */
    colSpan?: number;
    /** Size of Row */
    rowSize: RowSize;
    /** Width of the cell */
    width?: number;
    /** Sorting callback  */
    onSort?: (desc?: boolean, isMulti?: boolean) => void;
    /** Whether multi-sorting is enabled */
    isMultiSortable?: boolean;
    /** The Sorting State of the column */
    colSortingState?: ColumnSort & {
        badge?: number;
    };
    /** Callback to reset sorting for this column */
    resetSorting?: () => void;
    /** Metadata for the th element */
    metaData?: any;
    /** Style overrides */
    sx?: CSSObject;
} & TestProps;
declare const TH: React.FCC<Props & Pick<DivProps, 'onClick' | 'id'>>;
export default TH;
