import { default as React } from 'react';
import { TableProps } from '../../../../types';
import { TestProps } from '../../../../../../utils/types';
type Props = Pick<TableProps<any>, 'columns' | 'columnsConfig'> & {
    /** Element that that serves as the positioning boundary of the ColumnChooser Menu */
    containerRef: React.MutableRefObject<any>;
} & TestProps;
/** @TODO create a generic Popover component */
declare const ColumnChooser: React.FC<Props>;
export default ColumnChooser;
