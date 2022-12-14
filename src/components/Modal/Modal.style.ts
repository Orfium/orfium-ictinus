import { css, SerializedStyles } from '@emotion/react';
import { transparentize } from 'polished';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { ModalProps } from './Modal';

export const backgroundContainer = (theme: Theme): SerializedStyles => css`
  position: fixed;
  z-index: 3000; // Because TextField has a z-index of 2000 in its style.
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: ${transparentize(0.8, theme.globals.colors.white)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const cardSizing = css`
  max-width: ${rem(500)};
  max-height: ${rem(684)};
`;

export const modalContainer =
  ({ isContentPadded }: Pick<ModalProps, 'isContentPadded'>) =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      padding: ${isContentPadded
        ? `${theme.globals.spacing.get('8')} ${theme.globals.spacing.get(
            '9'
          )} ${theme.globals.spacing.get('9')} ${theme.globals.spacing.get('9')}`
        : undefined};
    `;

export const closeContainer = (theme: Theme) => css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: ${theme.globals.spacing.get('4')} ${theme.globals.spacing.get('4')} 0 0;
  box-sizing: border-box;

  //TODO: REMOVE THIS AFTER BUTTONS REFACTOR
  svg {
    color: ${theme.utils.getColor('lightGrey', 650)};
  }
`;
