import { PropsValidationError } from '../../utils/errors';
import { ExpandCollapseProps } from './ExpandCollapse.types';

export const errors = [
  {
    condition: ({ isExpanded, onChange }: ExpandCollapseProps): boolean =>
      Boolean(
        (isExpanded === undefined && onChange) ||
          (onChange === undefined && typeof isExpanded === 'boolean')
      ),
    error: new PropsValidationError(
      'If expanded is defined onChange must be defined too and vice versa'
    ),
  },
  {
    condition: ({ content, children }: ExpandCollapseProps): boolean =>
      Boolean(content === undefined && children === undefined),
    error: new PropsValidationError('Either content or children must be defined'),
  },
];
