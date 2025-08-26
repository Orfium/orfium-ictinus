import { TableProps } from '../../types';
import { TestProps } from '../../../../utils/types';
export type TPaginationProps = Pick<TableProps<any>, 'pagination'> & {
    /** Whether the pagination footer is sticky */
    isSticky?: boolean;
} & TestProps;
declare const TPagination: React.FC<TPaginationProps>;
export default TPagination;
