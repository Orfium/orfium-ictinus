import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { style } from '../../vanilla-extract';

export const header = recipe({
  variants: {
    /**
     * Whether to pin the header cell to left/right of table.
     */
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
