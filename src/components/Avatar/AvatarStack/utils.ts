import type { AvatarStackProps } from './AvatarStack.types';
import { PropsValidationError } from '../../../utils/errors';

export const errors = [
  {
    condition: ({ maxAvatars = 4 }: AvatarStackProps): boolean => Boolean(maxAvatars < 1),
    error: new PropsValidationError('maxAvatars prop must be greater than 0'),
  },
];
