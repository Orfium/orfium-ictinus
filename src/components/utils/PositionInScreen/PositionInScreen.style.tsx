import { css, SerializedStyles } from '@emotion/react';
import { CSSObject } from '@emotion/serialize';
import { rem } from 'polished';

export const container =
  (
    withOverflow?: boolean,
    visible?: boolean,
    sx?: { container?: CSSObject; itemContainer?: CSSObject }
  ) =>
  (): SerializedStyles =>
    css({
      overflow: withOverflow ? 'hidden' : 'inherit',
      textOverflow: withOverflow ? 'ellipsis' : 'inherit',
      width: '100%',
      height: 'inherit',
      position: 'relative',

      '#unique-tooltip-id': {
        display: visible ? 'block !important' : 'none !important',
      },
      ...sx?.container,
    });

export const itemContainer =
  (
    clientX: number,
    clientY: number,
    width?: number,
    sx?: { container?: CSSObject; itemContainer?: CSSObject }
  ) =>
  (): SerializedStyles =>
    css({
      position: 'absolute',
      opacity: '1 !important',
      top: rem(clientY),
      left: rem(clientX),
      zIndex: 999999999,
      width: width ? rem(width) : `fit-content`,
      height: 'fit-content',
      ...sx?.itemContainer,
    });
