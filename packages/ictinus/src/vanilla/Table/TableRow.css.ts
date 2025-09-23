// import { theme } from '@optiaxiom/globals';
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

      '@media': {
        '(hover: hover)': {
          selectors: {
            '&:hover': {
              // backgroundColor: 'red',
            },
            // '&[data-selected]:hover': {
            //   backgroundColor: `
            //     color-mix(
            //       in srgb,
            //       ${theme.colors['bg.accent.subtle']},
            //       ${theme.colors['bg.accent.light']} 15%
            //     )
            //   `,
            // },
          },
        },
      },
      selectors: {
        '&[data-focus-visible]:focus-visible': {
          outline: 'none',
          zIndex: '10',
        },
        // '&[data-focus-visible]:focus-visible::before': {
        //   border: `2px solid ${theme.colors['border.focus']}`,
        //   borderRadius: theme.borderRadius.md,
        //   content: '',
        //   inset: '1px 0 0',
        //   position: 'absolute',
        // },
        // '&[data-selected]': {
        //   backgroundColor: theme.colors['bg.accent.subtle'],
        // },
      },
    }),
  ],
});
