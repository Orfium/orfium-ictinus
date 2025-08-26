import * as React from 'react';
export type TableCellProps = {
    textAlign?: 'left' | 'right';
    component?: 'td' | 'th';
    width?: number | string;
    isSticky?: boolean;
    isPaddedSticky?: boolean;
    colSpan?: number;
    type?: 'financial' | 'normal';
    isPadded?: boolean;
    dataTestIdPrefix?: string;
    rowIndex?: number;
    index?: number | string;
    isSortable?: boolean;
    isActive?: boolean;
    onClick?: () => void;
};
declare const TableCell: React.FCC<TableCellProps>;
export default TableCell;
