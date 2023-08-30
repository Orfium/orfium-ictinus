import { css, SerializedStyles } from '@emotion/react';
import { transition } from 'theme/functions';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';

export const drawerContainerStyle =
(isExpanded: boolean, isDesktop: boolean, isSmallDesktop: boolean) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${transition(0.2)};
      width: ${isExpanded ? rem('308px') : isDesktop ? rem('112px') : rem('0px')};
      background-color: white;
      overflow: hidden;
      flex-grow: 0;
      flex-shrink: 0;
      height: 100%;
      min-height: 100%;
      z-index: 100;
      position: ${isSmallDesktop ? 'absolute' : 'relative'};
      border-right: ${rem(1)} solid ${theme.utils.getColor('lightGrey', 200)};
    `;
