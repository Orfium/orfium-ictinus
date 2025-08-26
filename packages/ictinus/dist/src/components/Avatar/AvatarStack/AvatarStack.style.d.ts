import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { AvatarSizes } from '../Avatar.types';
export declare const avatarStackStyle: ({ size }: {
    size: AvatarSizes;
}) => (theme: Theme) => SerializedStyles;
export declare const avatarWrapperStyle: ({ zIndex, size }: {
    zIndex: number;
    size: AvatarSizes;
}) => (theme: Theme) => SerializedStyles;
