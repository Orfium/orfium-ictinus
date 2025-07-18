import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { atoms } from '~/css/atoms';

export const variants = recipe({
  defaultVariants: { variant: 'body1' },
  variants: {
    variant: {
      label2: atoms({
        fontFamily: 'sans',
        lineHeight: '4',
        fontSize: '3',
        fontWeight: 'medium',
        letterSpacing: '2',
      }),
      body1: atoms({
        fontFamily: 'sans',
        fontSize: '4',
        fontWeight: 'regular',
        lineHeight: '5',
        letterSpacing: '2',
      }),
    },
  },
});

export type Variants = RecipeVariants<typeof variants>;
