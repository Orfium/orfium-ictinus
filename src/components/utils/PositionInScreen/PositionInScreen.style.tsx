import { css, SerializedStyles } from '@emotion/react';
import { CSSObject } from '@emotion/serialize';
import { rem } from 'polished';

export const container =
  (withOverflow?: boolean, sx?: { container?: CSSObject; itemContainer?: CSSObject }) =>
  (): SerializedStyles =>
    css({
      overflow: withOverflow ? 'hidden' : 'inherit',
      textOverflow: withOverflow ? 'ellipsis' : 'inherit',
      width: '100%',
      height: 'inherit',
      position: 'relative',
      ...sx?.container,
    });

export const itemContainer =
  (
    clientX: number,
    clientY: number,
    visible: boolean,
    width?: number,
    sx?: { container?: CSSObject; itemContainer?: CSSObject }
  ) =>
  (): SerializedStyles =>
    css({
      overflow: visible ? 'visible' : 'hidden',
      position: 'absolute',
      top: rem(clientY),
      left: rem(clientX),
      zIndex: 999999999,
      width: width ? rem(width) : `fit-content`,
      height: 'fit-content',
      visibility: visible ? 'visible' : 'hidden',
      opacity: `${visible ? 1 : 0} !important`,
      ...sx?.itemContainer,
    });
