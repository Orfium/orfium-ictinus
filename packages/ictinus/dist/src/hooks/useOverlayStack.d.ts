import { DOMAttributes, RefObject } from 'react';
type OverlayStackProps = {
    isVisible: boolean;
    isNonModal?: boolean;
    triggerRef?: RefObject<Element | null>;
    overlayRef: RefObject<Element | null>;
    onClose?: () => void;
};
export declare function useOverlayStack({ isVisible, isNonModal, triggerRef, overlayRef, onClose, }: OverlayStackProps): {
    overlayProps: DOMAttributes<Element>;
};
export {};
