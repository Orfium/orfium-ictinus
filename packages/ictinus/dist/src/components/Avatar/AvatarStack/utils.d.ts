import { PropsValidationError } from '../../../utils/errors';
import { AvatarStackProps } from './AvatarStack.types';
export declare const errors: {
    condition: ({ maxAvatars }: AvatarStackProps) => boolean;
    error: PropsValidationError;
}[];
