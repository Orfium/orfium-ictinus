import { SerializedStyles } from '@emotion/react';
import { TagProps } from './Tag.types';
import { Theme } from '../../theme';
export declare const tagContainerStyles: ({ size, color, isSelectable, isClearable, isSelected, }: Pick<TagProps, "size" | "color" | "isSelected"> & {
    isSelectable?: boolean;
    isClearable?: boolean;
}) => (theme: Theme) => SerializedStyles;
export declare const iconStyles: () => (theme: Theme) => SerializedStyles;
