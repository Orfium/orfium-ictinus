import { css, SerializedStyles } from '@emotion/react';

import { Theme } from '../../../theme';

export const container =
  (withOverflow?: boolean, isVisible?: boolean) =>
  (theme: Theme): SerializedStyles =>
    css`
      overflow: ${withOverflow ? 'hidden' : 'inherit'};
      text-overflow: ${withOverflow ? 'ellipsis' : 'inherit'};
      width: 100%;
      height: inherit;

      #unique-tooltip-id {
        display: ${isVisible ? 'block !important' : 'none !important'};
      }
    `;

export const itemContainer =
  (clientX: number, clientY: number) =>
  (theme: Theme): SerializedStyles =>
    css`
      position: fixed;
      opacity: 1 !important;
      top: ${clientY + 'px'};
      left: ${clientX + 'px'};
      z-index: 999999999;
      width: fit-content;
      height: fit-content;
    `;
