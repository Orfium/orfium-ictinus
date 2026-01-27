import { style } from '../vanilla-extract';

import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../sprinkles';

import * as styles from '../vanilla/Table/TableHeaderCell.css';

const header = styles.className;

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
      opacity: 0,
      zIndex: 15,

      selectors: {
        [`${header}:hover &`]: {
          opacity: 1,
        },
      },

      // ':hover': {
      //   opacity: 1,
      // },
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
