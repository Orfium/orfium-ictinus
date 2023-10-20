import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { CSSObject } from '@emotion/serialize';
import { rem } from 'polished';

import { Theme } from '../../../theme';

export const container =
  (hasOverflow?: boolean, isVisible?: boolean,
   sx?: { container?: CSSObject; itemContainer?: CSSObject }) =>
  (): SerializedStyles =>
    css({
      overflow: hasOverflow ? 'hidden' : 'inherit',
      textOverflow: hasOverflow ? 'ellipsis' : 'inherit',
      width: '100%',
      height: 'inherit',
      position: 'relative',

      '#unique-tooltip-id': {
        display: isVisible ? 'block !important' : 'none !important',
      },
      ...sx?.container,
    });

export const itemContainer =
  (clientX: number, clientY: number, width?: number,
   sx?: { container?: CSSObject; itemContainer?: CSSObject }) =>
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
