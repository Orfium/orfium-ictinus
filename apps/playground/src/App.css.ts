import { layers, sprinkles } from '@orfium/ictinus';
import { vars } from '@orfium/tokens';
import { style } from '@vanilla-extract/css';

export const container = style({
  '@layer': {
    [layers.components]: {
      flexDirection: 'column',

      '@container': {
        '(min-width: 1220px)': {
          flexDirection: 'row',
        },
      },
    },
  },
});

export const grid = style([
  sprinkles({
    position: 'relative',
  }),
  {
    '@layer': {
      [layers.components]: {
        gridTemplateColumns: 'repeat(1, minmax(280px, 1fr))',

        '@container': {
          '(min-width: 640px)': {
            gridTemplateColumns: 'repeat(2, minmax(280px, 1fr))',
          },
          '(min-width: 1220px)': {
            gridTemplateColumns: 'repeat(3, minmax(280px, 1fr))',
          },
        },
      },
    },
  },
]);

export const sidebar = style({
  '@layer': {
    [layers.components]: {
      minWidth: '300px',
      paddingLeft: '0',
      borderLeftWidth: '0',

      '@container': {
        '(min-width: 1220px)': {
          paddingLeft: vars.spacing.lg,
          borderLeftWidth: vars['border-width'][1],
        },
      },
    },
  },
});
