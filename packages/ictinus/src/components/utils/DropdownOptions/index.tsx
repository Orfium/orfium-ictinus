import type { CSSObject} from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import type { Theme } from '../../../theme';

export type MenuPositionAllowed = 'left' | 'right';

export type MenuOptions = {
  menuPosition?: MenuPositionAllowed;
  sx?: CSSObject;
};

export const optionsStyle =
  ({ menuPosition, sx }: MenuOptions) =>
  (theme: Theme) =>
    css`
      max-height: ${rem(253)};
      overflow-y: auto;
      position: absolute;
      left: ${menuPosition === 'left' ? 0 : 'initial'};
      right: 0;
      min-width: ${rem(150)};
      max-width: ${rem(620)};
      width: fit-content;
      height: auto;
      background-color: ${theme.globals.oldColors.white};
      box-shadow: ${theme.globals.elevation['02']};
      border-radius: ${rem(4)};
      z-index: 1;

      ${sx}
    `;
