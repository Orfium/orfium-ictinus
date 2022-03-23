import { PropsValidationError } from '../../../utils/errors';
import { Props } from './AvatarStack.types';

export const errors = [
  {
    condition: ({ maxAvatars = 4 }: Props): boolean => Boolean(maxAvatars < 1),
    error: new PropsValidationError('maxAvatars prop must be greater than 0'),
  },
];
