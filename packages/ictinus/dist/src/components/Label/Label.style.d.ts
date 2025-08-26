import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { LabelProps } from './Label';
export declare const LABEL_TRANSFORM_LEFT_SPACING: string;
export declare const labelStyle: ({ isAnimated, hasError, size, }: Pick<LabelProps, "isAnimated" | "hasError" | "size">) => (theme: Theme) => SerializedStyles;
