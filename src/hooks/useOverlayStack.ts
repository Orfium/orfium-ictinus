import type { DOMAttributes, RefObject } from 'react';
import { useCallback, useEffect } from 'react';

const visibleOverlays: RefObject<Element | null>[] = [];

type OverlayStackProps = {
  isVisible: boolean;
  isNonModal?: boolean;
  triggerRef?: RefObject<Element | null>;
  overlayRef: RefObject<Element | null>;
  onClose?: () => void;
};

export function useOverlayStack({
  isVisible,
  isNonModal = false,
  triggerRef = null,
  overlayRef,
  onClose,
}: OverlayStackProps): {
  overlayProps: DOMAttributes<Element>;
} {
  useEffect(() => {
    if (isVisible && !visibleOverlays.includes(overlayRef)) {
      visibleOverlays.push(overlayRef);
    }

    return () => {
      const index = visibleOverlays.indexOf(overlayRef);
      if (index >= 0) {
        visibleOverlays.splice(index, 1);
      }
    };
  }, [overlayRef, isVisible]);

  const onHide = useCallback(() => {
    if (visibleOverlays[visibleOverlays.length - 1] === overlayRef && onClose) {
      onClose();
    }
  }, [onClose, overlayRef]);

  useEffect(() => {
    if (!isVisible) return;

    const handleClickOutside = (e: MouseEvent) => {
      // Filter out synthetic/programmatic events
      if (!e.isTrusted || e.target === document.body) {
        return;
      }

      const isWithinTrigger =
        isNonModal && triggerRef.current && triggerRef.current.contains(e.target as Node);

      if (
        overlayRef.current &&
        !overlayRef.current.contains(e.target as Node) &&
        !isWithinTrigger
      ) {
        if (visibleOverlays[visibleOverlays.length - 1] === overlayRef) {
          e.stopPropagation();
          e.preventDefault();
        }
        onHide();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNonModal, isVisible, onHide, overlayRef, triggerRef]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && !e.nativeEvent.isComposing) {
      e.stopPropagation();
      e.preventDefault();
      onHide();
    }
  };

  return {
    overlayProps: {
      onKeyDown,
    },
  };
}
