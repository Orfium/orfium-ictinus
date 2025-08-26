import { Row, TableType } from './types';
import * as React from 'react';
export type TableRowContextProps<T extends {
    [key: string]: unknown;
}> = {
    row: Row<T>;
    columnsWithWidth: number[];
    isPadded: boolean;
    hasOnSelectionChange: boolean;
    isRowSelected: boolean;
    columnCount: number;
    columns: string[];
    hasFixedHeader: boolean;
    tChange: () => void;
    type: TableType;
    isBordered: boolean;
    actionWidth?: number;
};
export declare const TableRowContext: React.Context<TableRowContextProps<{
    [key: string]: unknown;
}>>;
