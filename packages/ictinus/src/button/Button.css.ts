import { vars } from '@orfium/tokens';
import { recipe, type RecipeVariants } from '@vanilla-extract/recipes';
import { sprinkles } from '../sprinkles';
import { style } from '../vanilla-extract';

export const button = recipe({
  base: [
    sprinkles({
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      flexShrink: '0',
      borderRadius: '2',
      transitionDuration: '150ms',
      transitionTimingFunction: 'out',
      userSelect: 'none',
      isolation: 'isolate',
    }),
    style({
      willChange: 'transform',
      transitionProperty: 'background-color, border-color, color, fill, stroke',

      selectors: {
        '&[data-focus-visible]': {
          outline: `${vars['border-width'][3]} solid ${vars.color['border-color'].interactive.focused}`,
        },
        '&[data-react-aria-pressable]': {
          touchAction: 'pan-x pan-y pinch-zoom',
        },
        '&[data-pressed][data-size=normal]': {
          transitionProperty: 'transform, background-color, border-color, color, fill, stroke',
          transform: `perspective(${vars.sizing[9]}) translate3d(0, 0, -1px)`,
        },
        '&[data-pressed][data-size=compact]': {
          transitionProperty: 'transform, background-color, border-color, color, fill, stroke',
          transform: `perspective(${vars.sizing[7]}) translate3d(0, 0, -1px)`,
        },
      },
    }),
  ],
  variants: {
    variant: {
      primary: sprinkles({
        bg: {
          base: 'palette.primary',
          hover: 'palette.primary.muted',
          active: 'palette.primary.contrast',
        },
        color: 'inverted.primary',
      }),
      secondary: sprinkles({
        bg: {
          base: 'palette.secondary',
          hover: 'palette.secondary.muted',
          active: 'palette.secondary.contrast',
        },
        color: 'active',
      }),
      tertiary: sprinkles({
        bg: {
          base: 'palette.tertiary',
          hover: 'palette.tertiary.muted',
          active: 'palette.tertiary.contrast',
        },
        color: 'active',
      }),
    },
    size: {
      normal: sprinkles({
        h: '9',
        px: 'md',
      }),
      compact: sprinkles({
        h: '7',
        px: 'xs',
      }),
    },
    iconOnly: {
      true: sprinkles({
        px: '0',
        justifyContent: 'center',
      }),
    },
    circle: {
      true: sprinkles({ rounded: '7' }),
    },
    isPending: {
      true: sprinkles({
        cursor: 'default',
      }),
    },
    isDisabled: {
      true: sprinkles({
        cursor: 'not-allowed',
        opacity: '0.5',
      }),
    },
  },
  compoundVariants: [
    {
      variants: { iconOnly: true, size: 'normal' },
      style: sprinkles({ w: '9' }),
    },
    {
      variants: { iconOnly: true, size: 'compact' },
      style: sprinkles({ w: '7' }),
    },
    {
      variants: { isPending: true, variant: 'primary' },
      style: sprinkles({
        bg: {
          base: 'palette.primary.contrast',
          hover: 'palette.primary.contrast',
          active: 'palette.primary.contrast',
        },
      }),
    },
    {
      variants: { isPending: true, variant: 'secondary' },
      style: sprinkles({
        bg: {
          base: 'palette.secondary.contrast',
          hover: 'palette.secondary.contrast',
          active: 'palette.secondary.contrast',
        },
      }),
    },
    {
      variants: { isPending: true, variant: 'tertiary' },
      style: sprinkles({
        bg: {
          base: 'palette.tertiary.contrast',
          hover: 'palette.tertiary.contrast',
          active: 'palette.tertiary.contrast',
        },
      }),
    },
    {
      variants: { isDisabled: true, variant: 'primary' },
      style: sprinkles({
        bg: {
          base: 'palette.primary',
          hover: 'palette.primary',
          active: 'palette.primary',
        },
      }),
    },
    {
      variants: { isDisabled: true, variant: 'secondary' },
      style: sprinkles({
        bg: {
          base: 'palette.secondary',
          hover: 'palette.secondary',
          active: 'palette.secondary',
        },
      }),
    },
    {
      variants: { isDisabled: true, variant: 'tertiary' },
      style: sprinkles({
        bg: {
          base: 'palette.tertiary',
          hover: 'palette.tertiary',
          active: 'palette.tertiary',
        },
      }),
    },
  ],
});

export const text = recipe({
  base: [sprinkles({})],
  variants: {
    size: {
      normal: sprinkles({
        px: 'xs',
        typography: 'label02',
      }),
      compact: sprinkles({
        px: 'xs',
        typography: 'label03',
      }),
    },
    isPending: {
      true: sprinkles({
        visibility: 'hidden',
      }),
    },
  },
});

export const progress = style([
  sprinkles({
    position: 'absolute',
  }),
  style({
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
  }),
]);

export type ButtonVariants = RecipeVariants<typeof button>;
