import { SerializedStyles } from '@emotion/react';
import { AvatarColors, AvatarProps, AvatarSizes } from './Avatar.types';
import { Theme } from '../../theme';
export declare const iconStyles: ({ size, color }: Pick<AvatarProps, "size" | "color">) => (theme: Theme) => SerializedStyles;
export declare const avatarStyle: ({ size, color }: {
    size: AvatarSizes;
    color: AvatarColors;
}) => (theme: Theme) => SerializedStyles;
