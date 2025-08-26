import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
export declare const typeWrapperStyle: () => (theme: Theme) => SerializedStyles;
export declare const stateWrapperStyle: () => () => SerializedStyles;
export declare const colorStyle: (theme: Theme) => SerializedStyles;
export declare const descriptionStyle: (theme: Theme) => SerializedStyles;
