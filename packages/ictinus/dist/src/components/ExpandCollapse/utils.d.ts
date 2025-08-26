import { PropsValidationError } from '../../utils/errors';
import { ExpandCollapseProps } from './ExpandCollapse.types';
export declare const errors: {
    condition: ({ isExpanded, onChange }: ExpandCollapseProps) => boolean;
    error: PropsValidationError;
}[];
