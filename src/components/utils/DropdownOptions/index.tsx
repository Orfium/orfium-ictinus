import { css } from '@emotion/react';
import { darken } from 'polished';
import { rem } from 'theme/utils';

import { Theme } from '../../../theme';

export type MenuPositionAllowed = 'left' | 'right';

export type MenuOptions = {
  menuPosition?: MenuPositionAllowed;
};

export const optionsStyle = ({ menuPosition }: MenuOptions) => (theme: Theme) => css`
  max-height: ${rem(253)};
  overflow-y: auto;
  position: absolute;
  top: ${rem(48)};
  left: ${menuPosition === 'left' ? 0 : 'initial'};
  right: 0;
  min-width: ${rem(150)};
  width: 100%;
  height: auto;
  background-color: ${theme.palette.white};
  box-shadow: ${theme.elevation['02']};
  border-radius: ${rem(4)};
  z-index: 1;
  & > button {
    padding: ${rem(8)} ${rem(16)};
    height: ${rem(48)};
    font-size: ${theme.typography.fontSizes['14']};
    display: block;
    width: 100%;
    text-align: left;
  }

  & > button:hover {
    background-color: ${darken(0.05, theme.palette.white)};
  }
`;
