import { vars } from '@orfium/tokens';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles';
import { style } from '../../vanilla-extract';

export const tagGroup = recipe({
  base: [
    sprinkles({
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
    }),
    style({
      outline: 'none',
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
    style({
      outline: 'none',
    }),
  ],
});

export const tag = recipe({
  base: [
    sprinkles({
      display: 'inline-flex',
      alignItems: 'center',
      py: '2',
      gap: 'xs',
      cursor: 'default',
      userSelect: 'none',
      borderStyle: 'solid',
      borderBottomWidth: '1',
      borderLeftWidth: '1',
      borderRightWidth: '1',
      borderTopWidth: '1',
    }),
  ],
  variants: {
    size: {
      normal: sprinkles({
        h: '6',
        px: '4',
        borderRadius: '2',
      }),
      small: [
        sprinkles({
          h: '5',
          px: '3',
          borderRadius: '1',
        }),
      ],
    },
    color: {
      neutral: [],
      blue: [],
      red: [],
      purple: [],
      teal: [],
      orange: [],
    },
    interactive: {
      true: [
        sprinkles({
          borderColor: 'interactive.default',
          color: 'active',
          cursor: 'pointer',
        }),
        style({
          backgroundColor: vars.color.palette.secondary.base,

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
            },
            '&[data-react-aria-pressable]': {
              touchAction: 'pan-x pan-y pinch-zoom',
            },
          },
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
  compoundVariants: [
    {
      variants: { interactive: false, color: 'neutral' },
      style: [
        sprinkles({
          backgroundColor: 'default',
          borderColor: 'decorative.default',
          color: 'active',
        }),
      ],
    },
    {
      variants: { interactive: false, color: 'blue' },
      style: [
        sprinkles({
          backgroundColor: 'palette.primary-alt.muted',
          borderColor: 'decorative.default',
          color: 'active',
        }),
      ],
    },
    {
      variants: { interactive: false, color: 'red' },
      style: [
        sprinkles({
          backgroundColor: 'palette.error.muted',
          borderColor: 'interactive.error',
          color: 'error',
        }),
      ],
    },
    {
      variants: { interactive: false, color: 'purple' },
      style: [
        sprinkles({
          backgroundColor: 'palette.upsell.muted',
          borderColor: 'interactive.upsell',
          color: 'visited',
        }),
      ],
    },
    {
      variants: { interactive: false, color: 'teal' },
      style: [
        sprinkles({
          backgroundColor: 'palette.success.muted',
          borderColor: 'interactive.success',
          color: 'success',
        }),
      ],
    },
    {
      variants: { interactive: false, color: 'orange' },
      style: [
        sprinkles({
          backgroundColor: 'palette.warning.muted',
          borderColor: 'interactive.warning',
          color: 'warning',
        }),
      ],
    },
  ],
  defaultVariants: {
    size: 'normal',
    color: 'neutral',
    interactive: false,
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
      transition: 'background-color 0.2s ease',

      selectors: {
        '&:hover': {
          backgroundColor: vars.color.palette.secondary.contrast,
        },
        '&[data-focused]': {
          backgroundColor: vars.color.palette.secondary.contrast,
          outline: `${vars['border-width'][2]} solid ${vars.color['border-color'].interactive.focused}`,
          outlineOffset: '1px',
        },
      },
    }),
  ],
});

export const text = recipe({
  base: [sprinkles({})],
  variants: {
    size: {
      normal: sprinkles({
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

export const codeTag = recipe({
  base: [
    sprinkles({
      display: 'inline-flex',
      alignItems: 'center',
      py: '1',
      cursor: 'default',
      userSelect: 'none',
      backgroundColor: 'palette.secondary.contrast',
      borderRadius: '1',
    }),
  ],
  variants: {
    size: {
      normal: sprinkles({
        borderRadius: '2',
        px: '4',
      }),
      small: sprinkles({
        borderRadius: '1',
        px: '3',
      }),
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

export const codeTagText = recipe({
  base: [
    sprinkles({
      fontFamily: 'mono',
    }),
  ],
  variants: {
    size: {
      normal: sprinkles({
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
