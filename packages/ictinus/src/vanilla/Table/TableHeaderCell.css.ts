import { vars } from '@orfium/tokens';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles';
import { style } from '../../vanilla-extract';

export const cell = recipe({
  base: [
    sprinkles({
      borderColor: 'decorative.default',
    }),
    style({
      textAlign: 'start',
    }),
  ],

  variants: {
    pinned: {
      false: style({
        position: 'relative',
      }),
      true: style({
        position: 'sticky',
        zIndex: '10',

        selectors: {
          '&:has(+ :not([data-pinned]))': {
            borderRightWidth: '1px',
          },
          ':not([data-pinned]) + &': {
            borderLeftWidth: '1px',
          },
        },
      }),
    },
  },
});

export const content = recipe({
  base: [
    sprinkles({
      alignItems: 'center',
      color: 'secondary',
      display: 'flex',
      typography: 'body02',
      w: 'full',
      h: 'full',
      minHeight: '11',
      borderColor: 'decorative.default',
    }),
    style({
      boxShadow: `0 1px 0 ${vars.color['border-color'].decorative.default}`,
    }),
  ],
  variants: {
    size: {
      sm: sprinkles({
        h: '11',
      }),
      md: sprinkles({
        h: '13',
      }),
      lg: sprinkles({
        h: '15',
      }),
    },
    bordered: {
      true: style({
        borderRightWidth: '1px',

        selectors: {
          '[data-bordered]:last-child &': {
            borderRightWidth: 0,
          },
        },
      }),
    },
  },
});

export type CellVariants = RecipeVariants<typeof cell> & RecipeVariants<typeof content>;
