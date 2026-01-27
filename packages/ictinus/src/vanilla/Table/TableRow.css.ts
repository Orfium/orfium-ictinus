import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@orfium/tokens';
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
          zIndex: '11',
        },
        '&[data-focus-visible]:focus-visible::before': {
          border: `2px solid ${vars.color['border-color'].interactive.active}`,
          borderRadius: vars['border-radius'][1],
          content: '',
          inset: '0',
          position: 'absolute',
          zIndex: '11',
        },
      },
    }),
  ],
});
