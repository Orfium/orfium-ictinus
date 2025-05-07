import { useEffect, useCallback, RefObject, DOMAttributes } from 'react';

const visibleOverlays: RefObject<Element | null>[] = [];

export function useOverlayStack(
  visible: boolean,
  ref: RefObject<Element | null>,
  onClose?: () => void
): {
  overlayProps: DOMAttributes<Element>;
} {
  useEffect(() => {
    if (visible && !visibleOverlays.includes(ref)) {
      visibleOverlays.push(ref);
    }

    return () => {
      const index = visibleOverlays.indexOf(ref);
      if (index >= 0) {
        visibleOverlays.splice(index, 1);
      }
    };
  }, [ref, visible]);

  const onHide = useCallback(() => {
    if (visibleOverlays[visibleOverlays.length - 1] === ref && onClose) {
      onClose();
    }
  }, [onClose, ref]);

  useEffect(() => {
    if (!visible) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        if (visibleOverlays[visibleOverlays.length - 1] === ref) {
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
  }, [visible, onHide, ref]);

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
