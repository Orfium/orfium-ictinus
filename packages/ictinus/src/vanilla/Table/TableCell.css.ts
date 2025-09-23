import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { sprinkles } from '~/sprinkles';
import { style } from '../../vanilla-extract';
import { footer } from './TableFooter.css';
import * as styles from './TableRow.css';

const row = styles.className;

export const cell = recipe({
  base: [
    sprinkles({
      borderColor: 'decorative.default',
      px: 'lg',
      py: 'md',
    }),
    style({
      verticalAlign: 'top',
      wordBreak: 'break-word',
      border: '0 solid',

      selectors: {
        [`${row}:not(:first-child) &`]: {
          borderTopWidth: '1px',
        },
        [`${footer} &`]: {
          borderTopWidth: '1px',
        },
      },
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

export type CellVariants = RecipeVariants<typeof cell>;
