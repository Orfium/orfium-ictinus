import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { transition } from '@orfium/tokens';
import { rem } from '@orfium/tokens';

import type { Theme } from '../../theme';

export const navigationContainerStyle =
  (isExpanded: boolean, isDesktop: boolean, isSmallDesktop: boolean) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${transition(0.2)};
      width: ${isExpanded ? rem('308px') : isDesktop ? rem('112px') : rem('0px')};
      background-color: ${theme.tokens.colors.get('backgroundColor.default')};
      overflow: hidden;
      flex-grow: 0;
      flex-shrink: 0;
      height: 100%;
      min-height: 100%;
      z-index: 100;
      position: ${isSmallDesktop ? 'absolute' : 'relative'};
      border-right: ${rem(1)} solid ${theme.tokens.colors.get('borderColor.decorative.default')};
    `;
