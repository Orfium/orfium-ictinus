import { vars } from '@orfium/tokens';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../sprinkles';
import { style } from '../vanilla-extract';

export const tagGroup = recipe({
  base: [
    sprinkles({
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
    }),
  ],
});

export const tagList = recipe({
  base: [
    sprinkles({
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'sm',
    }),
  ],
});

export const tag = recipe({
  base: [
    sprinkles({
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'default',
      userSelect: 'none',
      px: 'xs',
      border: '1',
      color: 'active',
    }),
    style({
      backgroundColor: vars.color.palette.secondary.base,
      borderColor: vars.color['border-color'].interactive.default,

      selectors: {
        '&[data-focus-visible]': {
          outline: `${vars['border-width'][3]} solid ${vars.color['border-color'].interactive.focused}`,
        },
        '&[data-hovered]': {
          backgroundColor: vars.color.palette.secondary.muted,
        },
        '&[data-pressed]': {
          backgroundColor: vars.color.palette.secondary.contrast,
        },
        '&[data-selected]': {
          backgroundColor: vars.color.palette.secondary.muted,
          borderColor: vars.color['border-color'].interactive.active,
        },
        '&[data-react-aria-pressable]': {
          touchAction: 'pan-x pan-y pinch-zoom',
        },
      },
    }),
  ],
  variants: {
    size: {
      normal: sprinkles({
        h: '6',
        borderRadius: '2',
      }),
      small: sprinkles({
        h: '5',
        borderRadius: '1',
      }),
    },
    interactive: {
      true: [
        sprinkles({
          borderColor: 'interactive.default',
          color: 'active',
          cursor: 'pointer',
        }),
      ],
      false: [
        sprinkles({ cursor: 'default' }),
        style({
          outline: 'none',
        }),
      ],
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

export const removeButton = recipe({
  base: [
    sprinkles({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '7',
      cursor: 'pointer',
    }),
    style({
      border: 'none',
      background: 'none',
      color: 'currentColor',
      transition: 'background-color 250ms ease',

      selectors: {
        '&:hover': {
          backgroundColor: vars.color.palette.secondary.contrast,
        },
        '&[data-focus-visible]': {
          backgroundColor: vars.color.palette.secondary.contrast,
          outline: `${vars['border-width'][2]} solid ${vars.color['border-color'].interactive.focused}`,
          outlineOffset: '1px',
        },
      },
    }),
  ],
});

export const tagText = recipe({
  variants: {
    size: {
      normal: sprinkles({
        px: 'xs',
        typography: 'label02',
      }),
      small: sprinkles({
        typography: 'label03',
      }),
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

export type TagVariants = RecipeVariants<typeof tag>;
