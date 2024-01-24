import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { flex, transition } from 'theme/functions';

import { getDrawerTokens } from './Drawer.tokens';
import type { AnchorType, DrawerProps } from './Drawer.types';

const getStyleBasedOnAnchor = (anchor: AnchorType) => {
  switch (anchor) {
    case 'top':
      return css`
        flex-direction: column;
      `;
    case 'right':
      return css`
        justify-content: flex-end;
      `;
    case 'bottom':
      return css`
        justify-content: flex-end;
        flex-direction: column;
      `;
    default:
      return css``;
  }
};

const transformBasedOnProps = (isOpen: boolean, anchor: AnchorType) => {
  switch (anchor) {
    case 'top':
      return isOpen ? 'translateY(0)' : 'translateY(-100%)';
    case 'right':
      return isOpen ? 'translateX(0)' : 'translateX(100%)';
    case 'bottom':
      return isOpen ? 'translateY(0)' : 'translateY(100%)';
    default:
      return isOpen ? 'translateX(0)' : 'translateX(-100%)';
  }
};

export const backdropStyle =
  ({
    isOpen,
    anchor,
    size,
    isBackgroundActive,
  }: Pick<DrawerProps, 'isOpen' | 'anchor' | 'size' | 'isBackgroundActive'>) =>
  (): SerializedStyles => {
    const getWidth = () => {
      if (anchor === 'left' || anchor === 'right') {
        if (isBackgroundActive) {
          return css`
            width: ${size}%;
          `;
        }
      }

      return css`
        width: 100vw;
      `;
    };

    const getHeight = () => {
      if (anchor === 'top' || anchor === 'bottom') {
        if (isBackgroundActive) {
          return css`
            height: ${size}%;
          `;
        }
      }

      return css`
        height: 100vh;
      `;
    };

    const getPositioning = () => {
      if (isBackgroundActive) {
        return css`
          top: ${anchor === 'bottom' ? undefined : 0};
          bottom: ${anchor === 'top' ? undefined : 0};
          right: ${anchor === 'left' ? undefined : 0};
          left: ${anchor === 'right' ? undefined : 0};
        `;
      }

      return css`
        right: 0;
        bottom: 0;
        top: 0;
        left: 0;
      `;
    };

    return css`
      ${flex};
      position: fixed;
      ${getWidth()};
      ${getHeight()};
      z-index: 2500;
      ${getPositioning()};
      background: ${isBackgroundActive ? undefined : `rgba(200, 206, 255, 0.45)`};
      visibility: ${isOpen ? 'visible' : 'hidden'};
      opacity: ${isOpen ? 1 : 0};
      ${transition(0.2)}
      ${getStyleBasedOnAnchor(anchor)}
    `;
  };

export const anchorStyle = ({
  anchor,
  size,
  isBackgroundActive,
}: Pick<DrawerProps, 'anchor' | 'size' | 'isBackgroundActive'>) => {
  return anchor === 'top' || anchor === 'bottom'
    ? { display: 'flex', height: isBackgroundActive ? '100%' : `${size}%`, width: '100%' }
    : { display: 'flex', height: '100%', width: isBackgroundActive ? '100%' : `${size}%` };
};

export const overlayStyle =
  ({ isOpen, anchor, hasFixedLayout }: Pick<DrawerProps, 'isOpen' | 'anchor' | 'hasFixedLayout'>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDrawerTokens(theme);

    return css`
      ${flex};
      flex-direction: column;
      overflow-y: ${hasFixedLayout ? undefined : 'auto'};
      background-color: ${tokens('backgroundColor')};
      box-shadow: ${tokens('boxShadow')};
      border: ${tokens('borderWidth')} solid ${tokens('borderColor')};
      width: 100%;
      height: 100%;
      transform: ${transformBasedOnProps(isOpen, anchor)};
      ${transition(0.3)}
    `;
  };

export const closeIconContainer =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDrawerTokens(theme);

    return css`
      position: absolute;
      top: ${tokens('padding')};
      right: ${tokens('padding')};
    `;
  };

export const headerStyle =
  ({ isFixed }: { isFixed?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDrawerTokens(theme);

    return isFixed
      ? css`
          padding: ${tokens('padding')};
          position: sticky;
          top: 0;
        `
      : css`
          padding: ${tokens('padding')};
          flex: 0;
        `;
  };

export const contentStyle =
  ({ hasFixedHeader }: { hasFixedHeader?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDrawerTokens(theme);

    return css`
      flex: 1;
      overflow-y: ${hasFixedHeader ? 'auto' : undefined};
      padding: ${tokens('padding')};
    `;
  };

export const footerStyle =
  ({ isFixed }: { isFixed?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDrawerTokens(theme);

    return isFixed
      ? css`
          position: sticky;
          bottom: 0;
          padding: ${tokens('padding')};
        `
      : css`
          padding: ${tokens('padding')};
        `;
  };
