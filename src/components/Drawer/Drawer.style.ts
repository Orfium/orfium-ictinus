import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';
import { transition } from 'theme/functions';

import { Theme } from '../../theme';

export const drawerContainerStyle = (
  expanded: boolean,
  isDesktop: boolean,
  isSmallDesktop: boolean
) => (theme: Theme): SerializedStyles => css`
  ${transition(0.2)};
  width: ${expanded ? rem('308px') : isDesktop ? rem('112px') : rem('0px')};
  background-color: white;
  overflow: hidden;
  flex-grow: 0;
  flex-shrink: 0;
  height: 100%;
  min-height: 100%;
  z-index: 100;
  position: ${isSmallDesktop ? 'absolute' : 'relative'};
  border-right: ${rem(1)} solid ${theme.utils.getColor('lightTintedGrey', 250)};
`;
