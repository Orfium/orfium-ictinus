import type { CSSObject } from '@emotion/serialize';
import { useOverlayStack } from 'hooks/useOverlayStack';
import { rem } from 'polished';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePositionInScreen } from '~/components/utils/PositionInScreen/hooks';

type OverlayProps = {
  id?: string;
  triggerRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  setIsVisible: (visible: boolean) => void;
  sx?: { container?: CSSObject; itemContainer?: CSSObject };
  offsetX?: number;
  offsetY?: number;
  isVisible: boolean;
  isNonModal?: boolean;
  hasWrapperWidth?: boolean;
};

export function Overlay({
  id,
  triggerRef,
  offsetX = 0,
  offsetY = 0,
  setIsVisible,
  hasWrapperWidth,
  isVisible,
  isNonModal,
  sx,
  children,
}: OverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const { overlayProps } = useOverlayStack({
    isVisible,
    isNonModal,
    triggerRef,
    overlayRef,
    onClose: () => setIsVisible(false),
  });
  const [isMounted, setIsMounted] = useState(false);
  const triggerResizeObserverRef = useRef<ResizeObserver | null>(null);
  const overlayMutationObserverRef = useRef<MutationObserver | null>(null);

  const { x, y, isPositioned, maxHeight, maxWidth, triggerWidth, calculatePosition } =
    usePositionInScreen(
      triggerRef.current,
      overlayRef.current,
      offsetX,
      offsetY,
      isMounted === true
    );

  useEffect(() => {
    if (!isVisible || !triggerRef.current || !isMounted) return;

    let isInitialMount = true;

    triggerResizeObserverRef.current = new ResizeObserver(() => {
      // Skip the first callback which happens immediately after observe()
      // since the useLayoutEffect in usePositionInScreen already handles this
      if (isInitialMount) {
        isInitialMount = false;

        return;
      }

      requestAnimationFrame(() => {
        calculatePosition();
      });
    });

    triggerResizeObserverRef.current.observe(triggerRef.current);

    return () => {
      if (triggerResizeObserverRef.current) {
        triggerResizeObserverRef.current.disconnect();
      }
    };
  }, [isVisible, triggerRef, calculatePosition, isMounted]);

  useEffect(() => {
    if (!isVisible || !overlayRef.current || !isMounted) return;

    overlayMutationObserverRef.current = new MutationObserver(() => {
      requestAnimationFrame(() => {
        calculatePosition();
      });
    });

    overlayMutationObserverRef.current.observe(overlayRef.current, {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      childList: true,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      subtree: true,
    });

    return () => {
      if (overlayMutationObserverRef.current) {
        overlayMutationObserverRef.current.disconnect();
      }
    };
  }, [isVisible, overlayRef, calculatePosition, isMounted]);

  useEffect(() => {
    const handleWindowResize = () => {
      if (isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [isVisible, setIsVisible]);

  useEffect(() => {
    if (!isVisible) {
      setIsMounted(false);

      return;
    }

    if (!overlayRef.current) return;

    let styleElement: HTMLStyleElement | null = null;

    requestAnimationFrame(() => {
      setIsMounted(true);
    });

    if (isVisible) {
      styleElement = document.createElement('style');
      styleElement.type = 'text/css';
      styleElement.appendChild(document.createTextNode(scrollLockStyles));
      document.head.appendChild(styleElement);

      document.body.setAttribute('data-scroll-locked', 'true');
      document.body.style.pointerEvents = !isNonModal ? 'none' : '';
      overlayRef.current.style.pointerEvents = 'auto';
    } else {
      document.body.removeAttribute('data-scroll-locked');
      document.body.style.pointerEvents = '';
    }

    return () => {
      document.body.removeAttribute('data-scroll-locked');
      document.body.style.pointerEvents = '';

      setIsMounted(false);

      if (styleElement) document.head.removeChild(styleElement);
    };
  }, [overlayRef, isVisible, isNonModal]);

  if (!isVisible) return null;

  return createPortal(
    <div
      {...overlayProps}
      id={id}
      ref={overlayRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: isPositioned && triggerWidth && hasWrapperWidth ? rem(triggerWidth) : '',
        transform: `translate(${x}px, ${y}px)`,
        opacity: isPositioned ? 1 : 0,
        maxWidth: isPositioned ? `${maxWidth}px` : '',
        maxHeight: isPositioned ? `${maxHeight}px` : '',
        zIndex: '9999',
      }}
      css={sx?.itemContainer}
    >
      {children}
    </div>,
    document.body
  );
}

const scrollLockStyles = `
body[data-scroll-locked] {
  overflow: hidden !important;
  overscroll-behavior: contain;
  position: relative !important;
  padding-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  margin-left: 0;
  margin-top: 0;
  margin-right: 0px !important;
}
`;
