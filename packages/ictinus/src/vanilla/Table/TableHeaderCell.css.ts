import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles';
import { style } from '../../vanilla-extract';
import * as headerStyles from './TableHeader.css';
import * as rowStyles from './TableRow.css';

const header = headerStyles.className;
const row = rowStyles.className;

export const className = style({});

export const cell = recipe({
  base: [
    sprinkles({
      borderColor: 'decorative.default',
    }),
    style({
      textAlign: 'start',
    }),
    className,
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
          // '&:has(+ :not([data-pinned]))': {
          //   borderRightWidth: '1px',
          // },
          // ':not([data-pinned]) + &': {
          //   borderLeftWidth: '1px',
          // },
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
      borderBottomWidth: '1px',

      selectors: {
        [`${header}:not([data-pinned]) ${row}:last-child &`]: {
          borderBottomWidth: 0,
        },
      },
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
