import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { LabelConfig } from '../Controls.types';
export declare const radioContainerStyles: ({ placement, sx, isFocusVisible, }: Pick<LabelConfig, "placement" | "sx"> & {
    isFocusVisible?: boolean;
}) => (theme: Theme) => SerializedStyles;
