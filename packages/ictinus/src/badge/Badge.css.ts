import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';

import { sprinkles } from '../sprinkles';
import { style } from '../vanilla-extract';

const className = style({});

export const badge = recipe({
  base: [
    className,
    sprinkles({
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      flexShrink: '0',
      px: 'xs',
      border: '1',
      cursor: 'default',
      isolation: 'isolate',
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
        gap: 'xs',
        borderRadius: '1',
      }),
    },
    colorScheme: {
      neutral: sprinkles({
        backgroundColor: 'default',
        borderColor: 'decorative.default',
        color: 'active',
      }),
      blue: sprinkles({
        backgroundColor: 'palette.primary-alt.muted',
        borderColor: 'decorative.default',
        color: 'active',
      }),
      red: sprinkles({
        backgroundColor: 'palette.error.muted',
        borderColor: 'interactive.error',
        color: 'error',
      }),
      purple: sprinkles({
        backgroundColor: 'palette.upsell.muted',
        borderColor: 'interactive.upsell',
        color: 'visited',
      }),
      teal: sprinkles({
        backgroundColor: 'palette.success.muted',
        borderColor: 'interactive.success',
        color: 'success',
      }),
      orange: sprinkles({
        backgroundColor: 'palette.warning.muted',
        borderColor: 'interactive.warning',
        color: 'warning',
      }),
    },
  },
  defaultVariants: {
    size: 'normal',
    colorScheme: 'neutral',
  },
});

export const badgeText = recipe({
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

export const codeBadge = recipe({
  base: [
    sprinkles({
      position: 'relative',
      px: 'xs',
      display: 'inline-flex',
      alignItems: 'center',
      flexShrink: '0',
      backgroundColor: 'palette.secondary.contrast',
      cursor: 'default',
      isolation: 'isolate',
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
        gap: 'xs',
        borderRadius: '1',
      }),
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

export const codeBadgeText = recipe({
  base: [
    sprinkles({
      fontFamily: 'mono',
    }),
  ],
  variants: {
    size: {
      normal: sprinkles({
        px: 'xs',
        typography: 'body02',
      }),
      small: sprinkles({
        typography: 'body03',
      }),
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

export type BadgeVariants = RecipeVariants<typeof badge>;
