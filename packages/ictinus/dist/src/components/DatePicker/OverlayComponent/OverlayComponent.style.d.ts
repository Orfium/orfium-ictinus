import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
export declare const overlayWrapperStyle: () => (theme: Theme) => SerializedStyles;
export declare const optionsWrapperStyle: () => (theme: Theme) => SerializedStyles;
export declare const optionStyle: ({ isSelected }: {
    isSelected?: boolean;
}) => (theme: Theme) => SerializedStyles;
export declare const buttonsMonthsWrapperStyle: () => SerializedStyles;
export declare const monthsWrapperStyle: () => SerializedStyles;
export declare const buttonsWrapperStyle: () => (theme: Theme) => SerializedStyles;
