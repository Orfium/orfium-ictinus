import { vars } from '@orfium/tokens';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../sprinkles';
import { style } from '../vanilla-extract';
import * as groupStyles from './AvatarGroup.css';

export const avatar = recipe({
  base: [
    sprinkles({
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
      borderRadius: '7',
      border: '1',
      borderStyle: 'solid',
      overflow: 'hidden',
      userSelect: 'none',
    }),
  ],
  variants: {
    colorScheme: {
      blue: [
        sprinkles({
          bg: 'palette.primary-alt',
          color: 'active',
        }),
        style({
          borderColor: vars.color.palette['primary-alt'].contrast,
        }),
      ],
      red: [
        sprinkles({
          bg: 'palette.error',
          color: 'error',
        }),
        style({
          borderColor: vars.color.palette.error.contrast,
        }),
      ],
      purple: [
        sprinkles({
          bg: 'palette.upsell',
          color: 'visited',
        }),
        style({
          borderColor: vars.color.palette.upsell.contrast,
        }),
      ],
      teal: [
        sprinkles({
          bg: 'palette.success',
          color: 'success',
        }),
        style({
          borderColor: vars.color.palette.success.contrast,
        }),
      ],
      orange: [
        sprinkles({
          bg: 'palette.warning',
          color: 'warning',
        }),
        style({
          borderColor: vars.color.palette.warning.contrast,
        }),
      ],
    },
    size: {
      '1': [
        sprinkles({
          w: '5',
          h: '5',
          fontSize: '1',
          lineHeight: '1',
          letterSpacing: '1',
        }),
        style({
          selectors: {
            [`${groupStyles.className} &:not(:first-child)`]: {
              marginLeft: '-2px',
            },
          },
        }),
      ],
      '2': [
        sprinkles({
          w: '6',
          h: '6',
          fontSize: '2',
          lineHeight: '3',
          letterSpacing: '2',
        }),
        style({
          selectors: {
            [`${groupStyles.className} &:not(:first-child)`]: {
              marginLeft: '-4px',
            },
          },
        }),
      ],
      '3': [
        sprinkles({
          w: '8',
          h: '8',
          fontSize: '3',
          lineHeight: '4',
          letterSpacing: '2',
        }),
        style({
          selectors: {
            [`${groupStyles.className} &:not(:first-child)`]: {
              marginLeft: '-6px',
            },
          },
        }),
      ],
      '4': [
        sprinkles({
          w: '12',
          h: '12',
          fontSize: '4',
          lineHeight: '5',
          letterSpacing: '1',
        }),
        style({
          selectors: {
            [`${groupStyles.className} &:not(:first-child)`]: {
              marginLeft: '-8px',
            },
          },
        }),
      ],
      '5': [
        sprinkles({
          w: '15',
          h: '15',
          fontSize: '8',
          lineHeight: '8',
          letterSpacing: '0',
        }),
        style({
          selectors: {
            [`${groupStyles.className} &:not(:first-child)`]: {
              marginLeft: '-12px',
            },
          },
        }),
      ],
      '6': [
        sprinkles({
          w: '18',
          h: '18',
          fontSize: '10',
          lineHeight: '10',
          letterSpacing: '0',
        }),
        style({
          selectors: {
            [`${groupStyles.className} &:not(:first-child)`]: {
              marginLeft: '-16px',
            },
          },
        }),
      ],
    },
  },
  defaultVariants: {
    colorScheme: 'blue',
    size: '1',
  },
});

export const image = style([
  sprinkles({
    borderRadius: '7',
    width: 'full',
    height: 'full',
    objectFit: 'cover',
  }),
]);

export const icon = recipe({
  base: style({
    fill: 'currentColor',
  }),
  variants: {
    size: {
      '1': style({
        width: `calc(${vars.sizing['5']} * 0.8)`,
        height: `calc(${vars.sizing['5']} * 0.8)`,
      }),
      '2': style({
        width: `calc(${vars.sizing['6']} * 0.8)`,
        height: `calc(${vars.sizing['6']} * 0.8)`,
      }),
      '3': style({
        width: `calc(${vars.sizing['8']} * 0.8)`,
        height: `calc(${vars.sizing['8']} * 0.8)`,
      }),
      '4': style({
        width: `calc(${vars.sizing['12']} * 0.8)`,
        height: `calc(${vars.sizing['12']} * 0.8)`,
      }),
      '5': style({
        width: `calc(${vars.sizing['15']} * 0.8)`,
        height: `calc(${vars.sizing['15']} * 0.8)`,
      }),
      '6': style({
        width: `calc(${vars.sizing['18']} * 0.8)`,
        height: `calc(${vars.sizing['18']} * 0.8)`,
      }),
    },
  },
});

export type AvatarVariants = RecipeVariants<typeof avatar>;
