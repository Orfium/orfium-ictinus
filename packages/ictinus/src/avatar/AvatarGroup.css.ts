import { vars } from '@orfium/tokens';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { sprinkles } from '../sprinkles';
import { style } from '../vanilla-extract';

export const avatarGroup = recipe({
  base: [
    sprinkles({
      display: 'flex',
      alignItems: 'center',
    }),
  ],
  variants: {
    size: {
      '1': style({}),
      '2': style({}),
      '3': style({}),
      '4': style({}),
      '5': style({}),
      '6': style({}),
    },
  },
  defaultVariants: {
    size: '1',
  },
});

export const avatarWrapper = recipe({
  base: [
    sprinkles({
      position: 'relative',
    }),
  ],
  variants: {
    size: {
      '1': style({
        width: `calc(${vars.sizing['5']} * 0.8)`,
        selectors: {
          '&:last-child': {
            width: vars.sizing['5'],
          },
        },
      }),
      '2': style({
        width: `calc(${vars.sizing['6']} * 0.8)`,
        selectors: {
          '&:last-child': {
            width: vars.sizing['6'],
          },
        },
      }),
      '3': style({
        width: `calc(${vars.sizing['8']} * 0.8)`,
        selectors: {
          '&:last-child': {
            width: vars.sizing['8'],
          },
        },
      }),
      '4': style({
        width: `calc(${vars.sizing['12']} * 0.8)`,
        selectors: {
          '&:last-child': {
            width: vars.sizing['12'],
          },
        },
      }),
      '5': style({
        width: `calc(${vars.sizing['15']} * 0.8)`,
        selectors: {
          '&:last-child': {
            width: vars.sizing['15'],
          },
        },
      }),
      '6': style({
        width: `calc(${vars.sizing['18']} * 0.8)`,
        selectors: {
          '&:last-child': {
            width: vars.sizing['18'],
          },
        },
      }),
    },
    zIndex: {
      '0': style({ zIndex: 0 }),
      '1': style({ zIndex: 1 }),
      '2': style({ zIndex: 2 }),
      '3': style({ zIndex: 3 }),
      '4': style({ zIndex: 4 }),
      '5': style({ zIndex: 5 }),
      '6': style({ zIndex: 6 }),
      '7': style({ zIndex: 7 }),
      '8': style({ zIndex: 8 }),
      '9': style({ zIndex: 9 }),
      '10': style({ zIndex: 10 }),
    },
  },
});

export type AvatarGroupVariants = RecipeVariants<typeof avatarGroup>;
export type AvatarWrapperVariants = RecipeVariants<typeof avatarWrapper>;
