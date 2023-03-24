import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';

import { Theme } from '../../../theme';

export const container =
  (hasOverflow?: boolean, isVisible?: boolean) =>
  (): SerializedStyles =>
    css`
      overflow: ${hasOverflow ? 'hidden' : 'inherit'};
      text-overflow: ${hasOverflow ? 'ellipsis' : 'inherit'};
      width: 100%;
      height: inherit;
      position: relative;

      #unique-tooltip-id {
        display: ${isVisible ? 'block !important' : 'none !important'};
      }
    `;

export const itemContainer =
  (clientX: number, clientY: number, width?: number) =>
  (): SerializedStyles =>
    css`
      position: absolute;
      opacity: 1 !important;
      top: ${clientY + 'px'};
      left: ${clientX + 'px'};
      z-index: 999999999;
      width: ${width ? rem(width) : `fit-content`};
      height: fit-content;
    `;
