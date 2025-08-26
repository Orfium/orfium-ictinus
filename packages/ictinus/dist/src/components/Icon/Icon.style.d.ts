import { Theme } from '../../theme';
import { IconProps } from './Icon';
export declare const iconContainerStyles: ({ hasHover, isInteractive, size, }: Pick<IconProps, "hasHover" | "size"> & {
    isInteractive?: boolean;
}) => (theme: Theme) => import('@emotion/utils').SerializedStyles;
export declare const iconStyles: ({ color, size }: Pick<IconProps, "color" | "size">) => () => import('@emotion/utils').SerializedStyles;
