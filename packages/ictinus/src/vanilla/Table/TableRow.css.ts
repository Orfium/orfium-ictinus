import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles';
import { style } from '../../vanilla-extract';

export const className = style({});

export const row = recipe({
  base: [
    className,
    sprinkles({
      w: 'full',
    }),
    style({
      position: 'relative',

      selectors: {
        '&[data-focus-visible]:focus-visible': {
          outline: 'none',
          zIndex: '10',
        },
      },
    }),
  ],
});
