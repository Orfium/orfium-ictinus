import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { style } from '../../vanilla-extract';

export const className = style({});

export const header = recipe({
  base: [className],
  variants: {
    pinned: {
      false: {},
      true: style({
        position: 'sticky',
        top: 0,
        zIndex: '20',
      }),
    },
  },
});

export type HeaderVariants = RecipeVariants<typeof header>;
