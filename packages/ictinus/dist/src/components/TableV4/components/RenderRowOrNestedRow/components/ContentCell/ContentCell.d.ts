import { default as React } from 'react';
import { ContentComponent, TableType } from '../../../../types';
type ContentCellProps = {
    columns: string[];
    isPadded: boolean;
    tooltipContent?: string;
    columnWidth?: number;
    content: number | string | ContentComponent<any>;
    colSpan?: number;
    cellType?: 'financial' | 'normal';
    align?: 'left' | 'right';
    rowType: TableType;
    cellCounter: number;
    dataTestIdPrefix?: string;
    rowIndex?: number;
    index?: number;
};
declare const _default: React.NamedExoticComponent<React.PropsWithChildren<ContentCellProps>>;
export default _default;
