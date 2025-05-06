import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, transparentize } from 'polished';
import type { Theme } from 'theme';
import { flex, transition } from 'theme/functions';

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
  (theme: Theme) =>
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
      background: ${isBackgroundActive
        ? undefined
        : transparentize(0.3, theme.tokens.colors.get('backgroundColor.invertedAlt'))};
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
    return css`
      ${flex};
      flex-direction: column;
      overflow-y: ${hasFixedLayout ? undefined : 'auto'};
      background-color: ${theme.tokens.colors.get('backgroundColor.default')};
      box-shadow: ${theme.tokens.boxShadow.get('3')};
      border: ${theme.dimension.borderWidth.get('default')} solid
        ${theme.tokens.colors.get('borderColor.decorative.default')};
      width: 100%;
      height: 100%;
      transform: ${transformBasedOnProps(isOpen, anchor)};
      ${transition(0.3)}
    `;
  };

export const closeIconContainer =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      position: absolute;
      top: ${theme.dimension.spacing.get('2xl')};
      right: ${theme.dimension.spacing.get('2xl')};
    `;
  };

export const headerStyle =
  ({ isFixed, hasBoxShadow }: { isFixed?: boolean; hasBoxShadow?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    return isFixed
      ? css`
          padding: ${theme.dimension.spacing.get('2xl')};
          position: sticky;
          top: 0;
          box-shadow: ${hasBoxShadow ? theme.tokens.boxShadow.get('2') : undefined};
          transition: box-shadow 0.2s ease-in-out;
        `
      : css`
          padding: ${theme.dimension.spacing.get('2xl')};
          flex: 0;
        `;
  };

export const contentStyle =
  ({ hasFixedHeader }: { hasFixedHeader?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    return css`
      flex: 1;
      overflow-y: ${hasFixedHeader ? 'auto' : undefined};
      /** Padding-top and Padding-bottom are -1px because of extra 1px-height elements added for scrollbar observation */
      padding: calc(${theme.dimension.spacing.get('2xl')} - ${rem(1)})
        ${theme.dimension.spacing.get('2xl')};
    `;
  };

export const footerStyle =
  ({ isFixed, hasBoxShadow }: { isFixed?: boolean; hasBoxShadow?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    return isFixed
      ? css`
          position: sticky;
          bottom: 0;
          padding: ${theme.dimension.spacing.get('2xl')};
          box-shadow: ${hasBoxShadow ? theme.tokens.boxShadow.get('5') : undefined};
          transition: box-shadow 0.2s ease-in-out;
        `
      : css`
          padding: ${theme.dimension.spacing.get('2xl')};
        `;
  };
