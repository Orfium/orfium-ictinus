import { PropsValidationError } from 'utils/errors';

import type { AvatarStackProps } from './AvatarStack.types';

export const errors = [
  {
    condition: ({ maxAvatars = 4 }: AvatarStackProps): boolean => Boolean(maxAvatars < 1),
    error: new PropsValidationError('maxAvatars prop must be greater than 0'),
  },
];
