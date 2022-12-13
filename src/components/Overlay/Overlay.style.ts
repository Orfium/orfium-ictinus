import { css, SerializedStyles } from '@emotion/react';
import { transparentize } from 'polished';
import { Theme } from 'theme';
import { flex, transition } from 'theme/functions';

import { AnchorType } from './Overlay';

const justifyContentEnd = (): SerializedStyles => css`
  justify-content: flex-end;
`;

const flexDirectionColumn = (): SerializedStyles => css`
  flex-direction: column;
`;

const getStyleBasedOnAnchor = (anchor: AnchorType) => {
  switch (anchor) {
    case 'top':
      return flexDirectionColumn();
    case 'right':
      return justifyContentEnd();
    case 'bottom':
      return css`
        ${justifyContentEnd()} ${flexDirectionColumn()}
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
  ({ isOpen, anchor }: { isOpen: boolean; anchor: AnchorType }) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${flex};
      position: fixed;
      width: 100vw;
      height: 100vh;
      z-index: 2500;
      right: 0;
      bottom: 0;
      top: 0;
      left: 0;
      background-color: ${transparentize(0.25, theme.palette.black)};
      visibility: ${isOpen ? 'visible' : 'hidden'};
      opacity: ${isOpen ? 1 : 0};
      ${transition(0.2)}
      ${getStyleBasedOnAnchor(anchor)}
    `;

export const overlayStyle =
  ({ isOpen, anchor }: { isOpen: boolean; anchor: AnchorType }) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${flex};
      flex-direction: column;
      overflow-y: auto;
      background-color: ${theme.palette.white};
      width: 100%;
      height: auto;
      transform: ${transformBasedOnProps(isOpen, anchor)};
      ${transition(0.3)}
    `;

export const closeIconContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      ${flex};
      justify-content: flex-end;
      padding: ${theme.spacing.get('4')} ${theme.spacing.get('4')} 0 0;
    `;

export const contentStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      padding: ${theme.spacing.get('9')};
    `;
