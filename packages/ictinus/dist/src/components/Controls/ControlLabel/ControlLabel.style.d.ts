import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { LabelConfig } from '../Controls.types';
export declare const labelContainerStyles: () => (theme: Theme) => SerializedStyles;
export declare const labelStyles: ({ size }: Pick<LabelConfig, "size">) => (theme: Theme) => SerializedStyles;
export declare const helpTextStyles: () => (theme: Theme) => SerializedStyles;
