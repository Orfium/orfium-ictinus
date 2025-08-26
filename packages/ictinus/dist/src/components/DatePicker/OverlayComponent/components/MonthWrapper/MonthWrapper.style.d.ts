import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
export declare const monthWrapperStyle: () => (theme: Theme) => SerializedStyles;
export declare const monthHeaderWrapperStyle: () => () => SerializedStyles;
export declare const monthHeaderNavigationIconWrapperStyle: ({ position }: {
    position: "left" | "right";
}) => () => SerializedStyles;
export declare const monthHeaderTitleWrapperStyle: () => SerializedStyles;
export declare const monthHeaderTitleStyle: ({ isRangePicker }: {
    isRangePicker: boolean;
}) => (theme: Theme) => SerializedStyles;
