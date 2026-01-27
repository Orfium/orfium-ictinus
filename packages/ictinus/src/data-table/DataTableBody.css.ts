import { vars } from '@orfium/tokens';

import { createVar, getVarName, style } from '../vanilla-extract';
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
          backgroundImage: `linear-gradient(to left, ${vars.color.transparent['4']}, transparent)`,
          right: rightTotalSizeVar,
        },
        '&[data-scroll-timeline]::before': {
          backgroundImage: `linear-gradient(to right, ${vars.color.transparent['4']}, transparent)`,
          left: leftTotalSizeVar,
        },
        '[data-theme="dark"] &[data-scroll-timeline]::before': {
          backgroundImage: `linear-gradient(to right, ${vars.color.transparent['6']}, transparent)`,
          borderLeft: `1px solid ${vars.color['border-color'].decorative.default}`,
        },
        '[data-theme="dark"] &[data-scroll-timeline]::after': {
          backgroundImage: `linear-gradient(to right, ${vars.color.transparent['6']}, transparent)`,
          borderRight: `1px solid ${vars.color['border-color'].decorative.default}`,
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
        '&[data-has-left-pinned][data-scroll-timeline]:not([data-scroll-timeline="left"])::before':
          {
            opacity: 1,
          },
        '&[data-has-right-pinned][data-scroll-timeline]:not([data-scroll-timeline="right"])::after':
          {
            opacity: 1,
          },
      },
    }),
  ],
});

export const cell = recipe({
  base: [
    sprinkles({
      alignItems: 'flex-start',
      display: 'flex',
      bg: 'default',
    }),
    style({
      width: `calc(1px * ${cellSizeVar})`,
      backgroundImage: `linear-gradient(${bgHoverColor}, ${bgHoverColor})`,
      transition: `${getVarName(bgHoverColor)} 150ms ease`,

      '@media': {
        '(hover: hover)': {
          selectors: {
            [`[data-selectable] ${row}:hover &`]: {
              vars: {
                [bgHoverColor]: vars.color.palette.tertiary.muted,
              },
            },
          },
        },
      },
      selectors: {
        [`[data-selectable] ${row}[data-selected] &`]: {
          vars: {
            [bgHoverColor]: vars.color.palette.tertiary.contrast,
          },
        },
      },
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
    resizable: {
      false: style({
        flexGrow: `calc(${cellSizeVar} / ${totalSizeVar})`,
      }),
      true: style({
        flexGrow: `calc(${cellSizeVar} / ${totalSizeVar})`,
      }),
    },
  },
});
