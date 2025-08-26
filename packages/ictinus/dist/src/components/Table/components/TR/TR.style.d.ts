import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { TRProps } from './TR';
export declare const trContainer: ({ isExpandable, isSelected, isExpanded, isSelectable, sx, }: Pick<TRProps, "sx" | "isSelectable" | "isSelected" | "isExpandable" | "isExpanded">) => (theme: Theme) => SerializedStyles;
