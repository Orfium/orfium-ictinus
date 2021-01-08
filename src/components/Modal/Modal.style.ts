import { Theme } from '../../theme';
import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';

export const backgroundContainer = () => (theme: Theme): SerializedStyles => css`
  position: fixed;
  z-index: 3000; // Because TextField has a z-index of 2000 in its style.
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const cardSizing = () => (): SerializedStyles => css`
  max-width: ${rem(500)};
  max-height: ${rem(684)};
`;

export const modalContainer = () => (theme: Theme): SerializedStyles => css`
  padding: ${theme.spacing.xl};
  background: ${theme.palette.white};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const closeContainer = () => (theme: Theme): SerializedStyles => css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
