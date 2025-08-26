import { default as React } from 'react';
import { TestProps } from '../../../../../../utils/types';
type Props = {
    /** ID of the columns */
    id: string;
    /** Whether the sorting direction is descending or not */
    isDesc: boolean;
    /** Callback for sorting button  */
    onClick: () => void;
    /** Indicates the sorting order */
    badge?: number;
} & TestProps;
declare const SortingButton: React.FC<Props>;
export default SortingButton;
