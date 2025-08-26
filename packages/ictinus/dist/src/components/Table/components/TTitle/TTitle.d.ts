import { default as React } from 'react';
import { TableProps } from '../../types';
import { TestProps } from '../../../../utils/types';
type Props = Pick<TableProps<any>, 'columnsConfig' | 'columns' | 'rowsConfig' | 'type'> & {
    /** Element that that serves as the positioning boundary of the ColumnChooser Menu */
    containerRef: React.MutableRefObject<any>;
    /** Number of rows */
    rowsCount?: number;
} & TestProps;
declare const _default: React.NamedExoticComponent<React.PropsWithChildren<Props>>;
export default _default;
