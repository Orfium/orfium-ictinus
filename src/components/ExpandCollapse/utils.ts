import { PropsValidationError } from '../../utils/errors';
import { Props } from './ExpandCollapse.types';

export const errors = [
  {
    condition: ({ isExpanded, onChange }: Props): boolean =>
      Boolean(
        (isExpanded === undefined && onChange) ||
          (onChange === undefined && typeof isExpanded === 'boolean')
      ),
    error: new PropsValidationError(
      'If expanded is defined onChange must be defined too and vice versa'
    ),
  },
  {
    condition: ({ content, children }: Props): boolean =>
      Boolean(content === undefined && children === undefined),
    error: new PropsValidationError('Either content or children must be defined'),
  },
];
