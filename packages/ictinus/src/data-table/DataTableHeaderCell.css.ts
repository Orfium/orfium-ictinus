import { style } from '../vanilla-extract';

import { vars } from '@orfium/tokens';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../sprinkles';

import * as headerCellStyles from '../vanilla/Table/TableHeaderCell.css';

const headerCell = headerCellStyles.className;

export const label = recipe({
  base: [
    style({
      color: vars.color.text.default.secondary,
      fontWeight: vars.weight.regular,

      '@media': {
        '(hover: hover)': {
          selectors: {
            [`${headerCell}:hover &`]: {
              color: vars.color.text.default.primary,
              fontWeight: vars.weight.medium,
            },
          },
        },
      },
    }),
  ],

  variants: {
    sortDir: {
      false: {},
      true: {
        color: vars.color.text.default.primary,
      },
    },
  },
});

export const icon = recipe({
  base: [
    sprinkles({
      h: '12',
      mx: '2',
    }),
    style({
      gridArea: '1 / 1 / 2 / 2',
      transition: 'opacity',
    }),
  ],

  variants: {
    active: {
      false: style({
        opacity: '0',
      }),
      true: style({
        opacity: '1',
      }),
    },
  },
});

export const handle = recipe({
  base: [
    sprinkles({
      h: 'full',
      borderColor: 'decorative.default',
    }),
    style({
      borderLeftWidth: 3,
      cursor: 'col-resize',
      position: 'absolute',
      right: '0',
      top: '0',
      touchAction: 'none',
      userSelect: 'none',
      zIndex: 15,
    }),
  ],

  variants: {
    resizing: {
      false: {},
      true: sprinkles({
        borderColor: 'interactive.active',
      }),
    },
  },
});
