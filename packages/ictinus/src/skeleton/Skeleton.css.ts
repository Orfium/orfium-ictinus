import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../sprinkles';
import { style } from '../vanilla-extract';

export const skeleton = recipe({
  base: [
    sprinkles({
      animation: 'pulse',
      bg: 'alt',
      color: 'secondary',
      display: 'block',
    }),
    style({
      selectors: {
        '&:empty:before': { content: '"\\00a0"' },
      },
    }),
  ],
});
