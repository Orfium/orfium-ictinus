import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';
import { transition } from 'theme/functions';

export const navigationContainerStyle = (
  isExpanded: boolean,
  isDesktop: boolean,
  isSmallDesktop: boolean
): SerializedStyles => css`
  ${transition(0.2)};
  width: ${isExpanded ? rem('308px') : isDesktop ? rem('112px') : rem('0px')};
  background-color: ${vars.color.background.default};
  overflow: hidden;
  flex-grow: 0;
  flex-shrink: 0;
  height: 100%;
  min-height: 100%;
  z-index: 100;
  position: ${isSmallDesktop ? 'absolute' : 'relative'};
  border-right: ${rem(1)} solid ${vars.color['border-color'].decorative.default};
`;
