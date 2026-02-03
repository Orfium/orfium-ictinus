import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../sprinkles';

export const separator = recipe({
  base: [
    sprinkles({
      borderT: '1',
      borderColor: 'decorative.default',
    }),
  ],
});
