import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { ProgressIndicatorProps } from '../../ProgressIndicator.types';
export declare const progressBarContainer: ({ isBlock }: Pick<ProgressIndicatorProps, "isBlock">) => (theme: Theme) => SerializedStyles;
export declare const barStyles: ({ isBlock }: Pick<ProgressIndicatorProps, "isBlock">) => (theme: Theme) => SerializedStyles;
export declare const fillStyles: ({ status, value, isBlock }: Pick<ProgressIndicatorProps, "status" | "value" | "isBlock">) => (theme: Theme) => SerializedStyles;
