import { SerializedStyles, CSSObject } from '@emotion/react';
import { Theme } from 'theme';
import { LabelConfig } from '../Controls.types';
export declare const switchWrapperStyles: ({ sx }: {
    sx?: CSSObject;
}) => (theme: Theme) => SerializedStyles;
export declare const switchStyles: ({ placement }: Pick<LabelConfig, "placement">) => (theme: Theme) => SerializedStyles;
