import * as React from 'react';
export type TableRowProps = {
    isSelected?: boolean;
    isNested?: boolean;
    onClick?: () => void;
};
declare const TableRow: React.FCC<TableRowProps>;
export default TableRow;
