import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { sprinkles } from '../sprinkles';
import { style } from '../vanilla-extract';

export const className = style({});

export const avatarGroup = recipe({
  base: [
    className,
    sprinkles({
      display: 'flex',
      alignItems: 'center',
    }),
  ],
});

export type AvatarGroupVariants = RecipeVariants<typeof avatarGroup>;
