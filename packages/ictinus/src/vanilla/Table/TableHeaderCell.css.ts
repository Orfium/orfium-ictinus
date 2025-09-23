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
      border: '0 solid',
    }),
  ],

  variants: {
    columnBorder: {
      true: style({
        borderRightWidth: '1px',

        selectors: {
          '&:last-child': {
            borderRightWidth: 0,
          },
        },
      }),
    },
    /**
     * Whether to pin the header cell to left/right of table.
     */
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
      // bg: 'default',
      color: 'secondary',
      display: 'flex',
      fontSize: '3',
      fontWeight: 'regular',
      size: 'full',
    }),
    style({
      boxShadow: `0 1px 0 ${vars.color['border-color'].decorative.default}`,
    }),
  ],
});

export type CellVariants = RecipeVariants<typeof cell>;
