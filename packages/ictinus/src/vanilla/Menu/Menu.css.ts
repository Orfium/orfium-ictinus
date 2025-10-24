import { vars } from '@orfium/tokens';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles';
import { style } from '../../vanilla-extract';

export const menu = recipe({
  base: [
    sprinkles({
      display: 'flex',
      flexDirection: 'column',
      typography: 'body02',
      overflowY: 'auto',
    }),
    style({
      maxHeight: 'inherit',
      overscrollBehavior: 'contain',
      outline: 'none',
      clipPath: `inset(0 0 0 0 round calc(${vars['border-radius'][2]} - 2px))`,
    }),
  ],
});

export const item = recipe({
  base: [
    sprinkles({
      px: 'md',
      py: 'lg',
      cursor: 'pointer',
      userSelect: 'none',
    }),
    style({
      backgroundColor: vars.color.background.default,

      selectors: {
        '&[data-focused]': {
          backgroundColor: vars.color.background.alt,
        },
      },
    }),
  ],
});
