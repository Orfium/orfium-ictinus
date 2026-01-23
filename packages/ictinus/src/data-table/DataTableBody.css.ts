import { vars } from '@orfium/tokens';

import { createVar, style } from '../vanilla-extract';
import * as styles from '../vanilla/Table/TableRow.css';

import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../sprinkles';

const row = styles.className;

export const cellSizeVar = createVar();
export const cellOffsetVar = createVar();
export const leftTotalSizeVar = createVar();
export const rightTotalSizeVar = createVar();
export const totalSizeVar = createVar();

const bgHoverColor = createVar({
  inherits: false,
  initialValue: 'transparent',
  syntax: '<color>',
});

export const root = recipe({
  base: [
    sprinkles({
      display: 'flex',
      flexDirection: 'column',
      maxW: 'full',
      overflow: 'hidden',
      rounded: '2',
    }),
    style({
      position: 'relative',

      selectors: {
        '&[data-scroll-timeline]::after': {
          backgroundImage: 'linear-gradient(to left, rgb(0 0 0 / 0.1), transparent)',
          right: rightTotalSizeVar,
        },
        '&[data-scroll-timeline]::before': {
          backgroundImage: 'linear-gradient(to right, rgb(0 0 0 / 0.1), transparent)',
          left: leftTotalSizeVar,
        },
        '&[data-scroll-timeline]::before, &[data-scroll-timeline]::after': {
          content: '',
          display: 'block',
          height: '100%',
          opacity: 0,
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          transition: '0.3s opacity',
          width: 16,
          zIndex: 1,
        },
        '&[data-scroll-timeline]:not([data-scroll-timeline="left"])::before': {
          opacity: 1,
        },
        // '&[data-scroll-timeline]:not([data-scroll-timeline="right"])::after': {
        //   opacity: 1,
        // },
      },
    }),
  ],
});

export const cell = recipe({
  base: [
    sprinkles({
      alignItems: 'flex-start',
      display: 'flex',
    }),
    style({
      width: `calc(1px * ${cellSizeVar})`,
    }),
  ],
  variants: {
    pinned: {
      left: style({
        left: cellOffsetVar,
      }),
      right: style({
        right: cellOffsetVar,
      }),
    },
    pinnedType: {
      body: style({
        backgroundColor: vars.color.background.default,
        backgroundImage: `linear-gradient(${bgHoverColor}, ${bgHoverColor})`,
        // transition: `${getVarName(bgHoverColor)} ${theme.duration.sm} ease`,

        '@media': {
          '(hover: hover)': {
            selectors: {
              [`${row}:hover &`]: {
                vars: {
                  [bgHoverColor]: vars.color.background.alt,
                },
              },
              [`${row}[data-selected]:hover &`]: {
                // vars: {
                //   [bgHoverColor]: `
                //     color-mix(
                //       in srgb,
                //       ${theme.colors["bg.accent.subtle"]},
                //       ${theme.colors["bg.accent.light"]} 15%
                //     )
                //   `,
                // },
              },
            },
          },
        },
        selectors: {
          [`${row}[data-selected] &`]: {
            vars: {
              [bgHoverColor]: vars.color.background.alt,
            },
          },
        },
      }),
      header: {},
    },
    resizable: {
      false: {},
      true: style({
        flexGrow: `calc(${cellSizeVar} / ${totalSizeVar})`,
      }),
    },
  },
});
