import { default as React } from 'react';
import { TestProps } from '../../../../../../utils/types';
type Props = {
    /** Whether multi-sorting is enabled */
    isMultiSortable?: boolean;
    /** Sorting Callback */
    onSort: (desc?: boolean, isMulti?: boolean) => void;
    /** External callback for when the Dropdown Button is clicked */
    onButtonClick?: (value: boolean) => void;
} & TestProps;
declare const THOptions: React.FC<Props>;
export default THOptions;
