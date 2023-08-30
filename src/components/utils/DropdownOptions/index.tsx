import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../../theme';

export type MenuPositionAllowed = 'left' | 'right';

export type MenuOptions = {
  menuPosition?: MenuPositionAllowed;
};

export const optionsStyle =
  ({ menuPosition }: MenuOptions) =>
  (theme: Theme) =>
    css`
      max-height: ${rem(253)};
      overflow-y: auto;
      position: absolute;
      top: ${rem(48)};
      left: ${menuPosition === 'left' ? 0 : 'initial'};
      right: 0;
      min-width: ${rem(150)};
      width: 100%;
      height: auto;
      background-color: ${theme.globals.oldColors.white};
      box-shadow: ${theme.globals.elevation['02']};
      border-radius: ${rem(4)};
      z-index: 1;
    `;
