import { SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { DrawerProps } from './Drawer.types';
export declare const backdropStyle: ({ isOpen, anchor, size, isBackgroundActive, }: Pick<DrawerProps, "isOpen" | "anchor" | "size" | "isBackgroundActive">) => (theme: Theme) => () => SerializedStyles;
export declare const anchorStyle: ({ anchor, size, isBackgroundActive, }: Pick<DrawerProps, "anchor" | "size" | "isBackgroundActive">) => {
    display: string;
    height: string;
    width: string;
};
export declare const overlayStyle: ({ isOpen, anchor, hasFixedLayout }: Pick<DrawerProps, "isOpen" | "anchor" | "hasFixedLayout">) => (theme: Theme) => SerializedStyles;
export declare const closeIconContainer: () => (theme: Theme) => SerializedStyles;
export declare const headerStyle: ({ isFixed, hasBoxShadow }: {
    isFixed?: boolean;
    hasBoxShadow?: boolean;
}) => (theme: Theme) => SerializedStyles;
export declare const contentStyle: ({ hasFixedHeader }: {
    hasFixedHeader?: boolean;
}) => (theme: Theme) => SerializedStyles;
export declare const footerStyle: ({ isFixed, hasBoxShadow }: {
    isFixed?: boolean;
    hasBoxShadow?: boolean;
}) => (theme: Theme) => SerializedStyles;
