import { vars } from '@orfium/tokens';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { sprinkles } from '../sprinkles';
import { style } from '../vanilla-extract';

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
    style({
      boxSizing: 'border-box',
    }),
  ],
  variants: {
    color: {
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
        }),
        style({
          fontSize: vars['font-size']['1'],
          lineHeight: vars['line-height']['1'],
          letterSpacing: vars['letter-spacing']['1'],
        }),
      ],
      '2': [
        sprinkles({
          w: '6',
          h: '6',
        }),
        style({
          fontSize: vars['font-size']['2'],
          lineHeight: vars['line-height']['3'],
          letterSpacing: vars['letter-spacing']['2'],
        }),
      ],
      '3': [
        sprinkles({
          w: '8',
          h: '8',
        }),
        style({
          fontSize: vars['font-size']['3'],
          lineHeight: vars['line-height']['4'],
          letterSpacing: vars['letter-spacing']['2'],
        }),
      ],
      '4': [
        sprinkles({
          w: '12',
          h: '12',
        }),
        style({
          fontSize: vars['font-size']['4'],
          lineHeight: vars['line-height']['5'],
          letterSpacing: vars['letter-spacing']['1'],
        }),
      ],
      '5': [
        sprinkles({
          w: '15',
          h: '15',
        }),
        style({
          fontSize: vars['font-size']['8'],
          lineHeight: vars['line-height']['8'],
          letterSpacing: vars['letter-spacing']['0'],
        }),
      ],
      '6': [
        sprinkles({
          w: '18',
          h: '18',
        }),
        style({
          fontSize: vars['font-size']['10'],
          lineHeight: vars['line-height']['10'],
          letterSpacing: vars['letter-spacing']['0'],
        }),
      ],
    },
  },
  defaultVariants: {
    color: 'blue',
    size: '1',
  },
});

export const image = style([
  sprinkles({
    borderRadius: '7',
  }),
  style({
    width: '100%',
    height: '100%',
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
