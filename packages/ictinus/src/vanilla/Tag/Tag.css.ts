import { vars } from '@orfium/tokens';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles';
import { style } from '../../vanilla-extract';
import { type TagColors } from './Tag';

export const tagBase = sprinkles({
  display: 'inline-flex',
  alignItems: 'center',
  cursor: 'default',
  userSelect: 'none',
  gap: 'xs',
});

export const defaultTagBase = [
  tagBase,
  sprinkles({
    py: '2',
    borderStyle: 'solid',
    borderBottomWidth: '1',
    borderLeftWidth: '1',
    borderRightWidth: '1',
    borderTopWidth: '1',
  }),
];

export const defaultTagSizeVariants = {
  normal: sprinkles({
    h: '6',
    px: '4',
    borderRadius: '2',
  }),
  small: sprinkles({
    h: '5',
    px: '3',
    borderRadius: '1',
  }),
};

export const defaultTagColorVariants = {
  neutral: [] as string[],
  blue: [] as string[],
  red: [] as string[],
  purple: [] as string[],
  teal: [] as string[],
  orange: [] as string[],
};

export const defaultTagColorCompoundVariants: Array<{
  variants: { color: TagColors };
  style: string[];
}> = [
  {
    variants: { color: 'neutral' },
    style: [
      sprinkles({
        backgroundColor: 'default',
        borderColor: 'decorative.default',
        color: 'active',
      }),
    ],
  },
  {
    variants: { color: 'blue' },
    style: [
      sprinkles({
        backgroundColor: 'palette.primary-alt.muted',
        borderColor: 'decorative.default',
        color: 'active',
      }),
    ],
  },
  {
    variants: { color: 'red' },
    style: [
      sprinkles({
        backgroundColor: 'palette.error.muted',
        borderColor: 'interactive.error',
        color: 'error',
      }),
    ],
  },
  {
    variants: { color: 'purple' },
    style: [
      sprinkles({
        backgroundColor: 'palette.upsell.muted',
        borderColor: 'interactive.upsell',
        color: 'visited',
      }),
    ],
  },
  {
    variants: { color: 'teal' },
    style: [
      sprinkles({
        backgroundColor: 'palette.success.muted',
        borderColor: 'interactive.success',
        color: 'success',
      }),
    ],
  },
  {
    variants: { color: 'orange' },
    style: [
      sprinkles({
        backgroundColor: 'palette.warning.muted',
        borderColor: 'interactive.warning',
        color: 'warning',
      }),
    ],
  },
];

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
  base: [...defaultTagBase],
  variants: {
    size: defaultTagSizeVariants,
    color: defaultTagColorVariants,
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
    ...defaultTagColorCompoundVariants.map((cv) => ({
      ...cv,
      variants: { ...cv.variants, interactive: false },
    })),
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
    tagBase,
    sprinkles({
      py: '1',
      backgroundColor: 'palette.secondary.contrast',
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
