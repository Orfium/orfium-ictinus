import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '~/sprinkles';
import { style } from '../../vanilla-extract';

export const popover = recipe({
  base: [
    sprinkles({
      border: '1',
      borderColor: 'decorative.default',
      bg: 'default',
      rounded: '2',
      overflow: 'hidden',
      boxShadow: '1',
    }),
    style({
      minWidth: 'var(--trigger-width)',
      maxWidth: '20rem',
      transformOrigin: 'var(--trigger-anchor-point)',
      outline: 'none',
      transition: 'transform',
    }),
  ],
});
