import { vars } from '@orfium/tokens';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles';
import { style } from '../../vanilla-extract';

export const tooltip = recipe({
  base: [
    sprinkles({
      display: 'flex',
      flexDirection: 'column',
      p: '4',
      borderRadius: '2',
      typography: 'body03',
    }),
    style({
      transform: 'translate3d(0, 0, 0)',
      transformOrigin: 'var(--trigger-anchor-point)',
    }),
  ],
  variants: {
    inverse: {
      true: sprinkles({
        bg: 'alt',
        color: 'primary',
        border: '1',
        borderColor: 'decorative.default',
        boxShadow: '2',
      }),
      false: sprinkles({
        bg: 'inverted',
        color: 'inverted.primary',
      }),
    },
  },
});

export const trigger = style([
  sprinkles({
    cursor: 'default',
  }),
  style({
    background: 'transparent',
  }),
]);

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

export const arrowInverse = recipe({
  base: [
    style({
      display: 'block',
      fill: vars.color.background.alt,

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

export const arrowInverseBorder = style({
  fill: vars.color['border-color'].decorative.default,
});

export type TooltipVariants = RecipeVariants<typeof tooltip>;
