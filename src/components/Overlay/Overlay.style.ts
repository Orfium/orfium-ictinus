import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';
import { Theme } from 'theme';
import { flex, transition } from 'theme/functions';

const LeftAnchorStyle = (): SerializedStyles => css``;

const RightAnchorStyle = (): SerializedStyles => css`
  justify-content: end;
`;

const TopAnchorStyle = (): SerializedStyles => css`
  flex-direction: column;
`;

const BottomAnchorStyle = (): SerializedStyles => css`
  flex-direction: column;
  justify-content: end;
`;

const getAnchorStyle = ({ anchor }: { anchor: any }) => {
  switch (anchor) {
    case 'bottom':
      return BottomAnchorStyle();
    case 'top':
      return TopAnchorStyle();
    case 'right':
      return RightAnchorStyle();
    default:
      return LeftAnchorStyle();
  }
};

export const BackdropStyle = ({ anchor }: { anchor: any }) => (): SerializedStyles => css`
  ${flex};
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 3000;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  ${getAnchorStyle({ anchor })}
`;

export const OverlayStyle = () => (theme: Theme): SerializedStyles => css`
  ${flex}
  flex-direction: column;
  background-color: ${theme.palette.white};
  width: 100%;
  height: auto;
`;

export const closeIconContainer = () => (theme: Theme): SerializedStyles => css`
  ${flex}
  justify-content: flex-end;
  padding: ${theme.spacing.sm} ${theme.spacing.sm} 0 0;
`;

export const contentStyle = () => (theme: Theme): SerializedStyles => css`
  ${flex}
  padding: ${theme.spacing.xl};
  height: 100%;
`;
