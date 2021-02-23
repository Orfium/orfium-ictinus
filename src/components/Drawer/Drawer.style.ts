import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';
import { transition } from 'theme/functions';
import { Theme } from '../../theme';

export const drawerContainerStyle = (expanded: boolean) => (theme: Theme): SerializedStyles => css`
  ${transition(0.2)};
  width: ${expanded ? rem('308px') : rem('0px')};
  background-color: white;
  overflow: hidden;
  flex-grow: 0;
  flex-shrink: 0;
  height: 100%;
  min-height: 100%;
  z-index: 100;
  box-shadow: ${theme.elevation['01']};
`;
