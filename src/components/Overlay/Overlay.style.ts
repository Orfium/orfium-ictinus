import { css, SerializedStyles } from '@emotion/react';
import { transparentize } from 'polished';
import { Theme } from 'theme';
import { flex, transition } from 'theme/functions';

import { AnchorType } from './Overlay';

const JustifyContentEnd = (): SerializedStyles => css`
  justify-content: flex-end;
`;

const FlexDirectionColumn = (): SerializedStyles => css`
  flex-direction: column;
`;

const getStyleBasedOnAnchor = (anchor: AnchorType) => {
  switch (anchor) {
    case 'top':
      return FlexDirectionColumn();
    case 'right':
      return JustifyContentEnd();
    case 'bottom':
      return css`
        ${JustifyContentEnd()} ${FlexDirectionColumn()}
      `;
    default:
      return css``;
  }
};

const transformBasedOnProps = (open: boolean, anchor: AnchorType) => {
  switch (anchor) {
    case 'top':
      return open ? 'translateY(0)' : 'translateY(-100%)';
    case 'right':
      return open ? 'translateX(0)' : 'translateX(100%)';
    case 'bottom':
      return open ? 'translateY(0)' : 'translateY(100%)';
    default:
      return open ? 'translateX(0)' : 'translateX(-100%)';
  }
};

export const BackdropStyle = ({ open, anchor }: { open: boolean; anchor: AnchorType }) => (
  theme: Theme
): SerializedStyles => css`
  ${flex};
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 3000;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: ${transparentize(0.25, theme.palette.black)};
  visibility: ${open ? 'visible' : 'hidden'};
  opacity: ${open ? 1 : 0};
  ${transition(0.2)}
  ${getStyleBasedOnAnchor(anchor)}
`;

export const OverlayStyle = ({ open, anchor }: { open: boolean; anchor: AnchorType }) => (
  theme: Theme
): SerializedStyles => css`
  ${flex}
  flex-direction: column;
  overflow-y: auto;
  background-color: ${theme.palette.white};
  width: 100%;
  height: auto;
  transform: ${transformBasedOnProps(open, anchor)};
  ${transition(0.3)}
`;

export const closeIconContainer = () => (theme: Theme): SerializedStyles => css`
  ${flex}
  justify-content: flex-end;
  padding: ${theme.spacing.sm} ${theme.spacing.sm} 0 0;
`;

export const contentStyle = () => (theme: Theme): SerializedStyles => css`
  padding: ${theme.spacing.xl};
`;
