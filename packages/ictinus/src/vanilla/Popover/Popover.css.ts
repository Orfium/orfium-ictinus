import { vars } from '@orfium/tokens';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles';
import { style } from '../../vanilla-extract';

const popoverRing = `0 0 0 ${vars['border-width']['1']} ${vars.color['border-color'].decorative.default}`;

export const popover = recipe({
  base: [
    sprinkles({
      bg: 'default',
      rounded: '2',
    }),
    style({
      minWidth: 'var(--trigger-width)',
      maxWidth: '20rem',
      transformOrigin: 'var(--trigger-anchor-point)',
      outline: 'none',
      transition: 'transform',
      boxShadow: `${vars['box-shadow']['1']}, ${popoverRing}`,
    }),
  ],
});

export const arrow = recipe({
  base: [
    style({
      display: 'block',
      fill: vars.color.background.inverted,

      selectors: {
        '[data-placement=bottom] &': {
          transform: 'rotate(180deg)',
        },
        '[data-placement=right] &': {
          transform: 'rotate(90deg) translateY(-5px)',
        },
        '[data-placement=left] &': {
          transform: 'rotate(-90deg) translateY(-5px)',
        },
      },
    }),
  ],
});
