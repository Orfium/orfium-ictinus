import { CSSObject } from '@emotion/serialize';
import { default as React } from 'react';
type OverlayProps = {
    id?: string;
    triggerRef: React.RefObject<HTMLDivElement>;
    children: React.ReactNode;
    setIsVisible: (visible: boolean) => void;
    sx?: {
        container?: CSSObject;
        itemContainer?: CSSObject;
    };
    offsetX?: number;
    offsetY?: number;
    isVisible: boolean;
    isNonModal?: boolean;
    hasWrapperWidth?: boolean;
};
export declare function Overlay({ id, triggerRef, offsetX, offsetY, setIsVisible, hasWrapperWidth, isVisible, isNonModal, sx, children, }: OverlayProps): React.ReactPortal;
export {};
