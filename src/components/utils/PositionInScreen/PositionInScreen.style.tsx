import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';

export const container = (withOverflow?: boolean, visible?: boolean) => (): SerializedStyles =>
  css`
    overflow: ${withOverflow ? 'hidden' : 'inherit'};
    text-overflow: ${withOverflow ? 'ellipsis' : 'inherit'};
    width: 100%;
    height: inherit;
    position: relative;

    #unique-tooltip-id {
      display: ${visible ? 'block !important' : 'none !important'};
    }
  `;

export const itemContainer =
  (clientX: number, clientY: number, width?: number) => (): SerializedStyles =>
    css`
      position: absolute;
      opacity: 1 !important;
      top: ${clientY + 'px'};
      left: ${clientX + 'px'};
      z-index: 999999999;
      width: ${width ? rem(width) : `fit-content`};
      height: fit-content;
    `;
