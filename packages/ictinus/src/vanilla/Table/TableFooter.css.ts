import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { style } from '../../vanilla-extract';

export const footer = recipe({
  base: [style({})],
  variants: {
    pinned: {
      false: style({
        position: 'relative',
      }),
      true: style({
        position: 'sticky',
        bottom: 0,
        zIndex: '10',
      }),
    },
  },
});

export type FooterVariants = RecipeVariants<typeof footer>;
