import { css, SerializedStyles } from '@emotion/react';
import { CSSObject } from '@emotion/serialize';

export const container =
  (withOverflow?: boolean, sx?: { container?: CSSObject; itemContainer?: CSSObject }) =>
  (): SerializedStyles =>
    css({
      overflow: withOverflow ? 'hidden' : 'inherit',
      textOverflow: withOverflow ? 'ellipsis' : 'inherit',
      width: '100%',
      height: 'inherit',
      position: 'relative',
      isolation: 'isolate',
      ...sx?.container,
    });
