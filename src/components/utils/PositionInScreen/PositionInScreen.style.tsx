import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../../theme';

export const container =
  (hasOverflow?: boolean, isVisible?: boolean) =>
  (__theme: Theme): SerializedStyles =>
    css`
      overflow: ${hasOverflow ? 'hidden' : 'inherit'};
      text-overflow: ${hasOverflow ? 'ellipsis' : 'inherit'};
      width: 100%;
      height: inherit;

      #unique-tooltip-id {
        display: ${isVisible ? 'block !important' : 'none !important'};
      }
    `;

export const itemContainer =
  (clientX: number, clientY: number) =>
  (__theme: Theme): SerializedStyles =>
    css`
      position: fixed;
      opacity: 1 !important;
      top: ${clientY + 'px'};
      left: ${clientX + 'px'};
      z-index: 999999999;
      width: fit-content;
      height: fit-content;
    `;
