import { vars } from '@orfium/tokens';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '../sprinkles';
import { style } from '../vanilla-extract';

export const filter = recipe({
  base: [
    sprinkles({
      display: 'inline-flex',
      flexDirection: 'column',
      position: 'relative',
    }),
  ],
});

export const trigger = recipe({
  base: [
    sprinkles({
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'sm',
      typography: 'label02',
      cursor: 'pointer',
      border: '1',
      borderColor: 'interactive.default',
    }),
    style({
      height: vars.sizing[9],
      padding: `0 ${vars.spacing[5]} 0 ${vars.spacing[6]}`,
      borderRadius: vars['border-radius'][7],
      backgroundColor: vars.color.palette.secondary.base,
      color: vars.color.text.default.active,
      transition: 'background-color 0.1s ease-in-out',
      outline: 'none',
      maxWidth: '20rem',

      selectors: {
        '&:hover': {
          backgroundColor: vars.color.palette.secondary.muted,
        },
        '&[data-focus-visible]': {
          outline: `${vars['border-width'][3]} solid ${vars.color['border-color'].interactive.focused}`,
        },
        '&[data-disabled]': {
          opacity: 0.5,
          cursor: 'not-allowed',
        },
      },
    }),
  ],
  variants: {
    isOpen: {
      true: style({
        backgroundColor: vars.color.palette.primary.contrast,
        color: vars.color.text.inverted.primary,

        selectors: {
          '&:hover': {
            backgroundColor: vars.color.palette.primary.contrast,
          },
        },
      }),
    },
  },
});

export const triggerLabel = recipe({
  base: [
    sprinkles({
      overflow: 'hidden',
      minWidth: '0',
      flex: '1',
    }),
    style({
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      textAlign: 'start',
    }),
  ],
});

export const selectValue = recipe({
  base: [
    sprinkles({
      display: 'flex',
      alignItems: 'center',
      gap: 'sm',
      flex: '1',
      minWidth: '0',
    }),
  ],
});

export const moreBadge = recipe({
  base: [
    sprinkles({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: '0',
      px: 'xs',
      typography: 'label03',
      border: '1',
      borderColor: 'interactive.default',
      borderRadius: '1',
    }),
    style({
      height: vars.sizing[5],
      backgroundColor: vars.color.palette.secondary.base,
      color: vars.color.text.default.active,

      selectors: {
        '[data-open] &': {
          backgroundColor: vars.color.palette.secondary.muted,
        },
      },
    }),
  ],
});

export const chevron = recipe({
  base: [
    sprinkles({
      flexShrink: '0',
    }),
    style({
      transition: 'transform 0.2s ease',
    }),
  ],
  variants: {
    isOpen: {
      true: style({
        transform: 'rotate(180deg)',
      }),
    },
  },
});

export const popover = recipe({
  base: [
    sprinkles({
      display: 'flex',
      flexDirection: 'column',
      bg: 'default',
      rounded: '2',
      overflow: 'hidden',
    }),
    style({
      width: 'var(--trigger-width)',
      minWidth: '16rem',
      maxWidth: '28rem',
      maxHeight: '20rem',
      outline: 'none',
      boxShadow: `${vars['box-shadow']['1']}, 0 0 0 ${vars['border-width']['1']} ${vars.color['border-color'].decorative.default}`,
    }),
  ],
});

export const listBox = recipe({
  base: [
    sprinkles({
      display: 'flex',
      flexDirection: 'column',
      typography: 'body02',
      overflowY: 'auto',
    }),
    style({
      maxHeight: 'inherit',
      flex: 1,
      overscrollBehavior: 'contain',
      outline: 'none',
    }),
  ],
});

export const emptyState = recipe({
  base: [
    sprinkles({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      px: 'md',
      py: 'xl',
      typography: 'body02',
      color: 'secondary',
    }),
  ],
});

export const item = recipe({
  base: [
    sprinkles({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'sm',
      position: 'relative',
      px: 'md',
      py: 'lg',
      cursor: 'pointer',
      userSelect: 'none',
    }),
    style({
      backgroundColor: vars.color.background.default,
      outline: 'none',

      selectors: {
        '&[data-focused]': {
          backgroundColor: vars.color.background.alt,
        },
      },
    }),
  ],
});

export const searchField = recipe({
  base: [
    sprinkles({
      display: 'flex',
      flexDirection: 'column',
      gap: 'sm',
      px: 'md',
      py: 'sm',
      borderB: '1',
      borderColor: 'decorative.default',
    }),
    style({
      backgroundColor: vars.color.background.default,
    }),
  ],
});

export const tagsRow = recipe({
  base: [
    sprinkles({
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'sm',
    }),
  ],
});

export const searchTags = recipe({
  base: [
    sprinkles({
      display: 'flex',
      flex: '1',
      minWidth: '0',
    }),
  ],
});

export const searchInputRow = recipe({
  base: [
    sprinkles({
      display: 'flex',
      alignItems: 'center',
      gap: 'sm',
      minWidth: '0',
    }),
  ],
});

export const searchInput = recipe({
  base: [
    sprinkles({
      flex: '1',
      minWidth: '0',
      typography: 'body02',
      color: 'primary',
    }),
    style({
      border: 'none',
      background: 'transparent',
      outline: 'none',
      padding: 0,
      height: vars.sizing[6],

      selectors: {
        '&::placeholder': {
          color: vars.color.text.default.secondary,
        },
      },
    }),
  ],
});

export const searchIcon = recipe({
  base: [
    sprinkles({
      flexShrink: '0',
      color: 'secondary',
    }),
  ],
});

export const searchClearButton = recipe({
  base: [
    sprinkles({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '7',
      cursor: 'pointer',
      flexShrink: '0',
      color: 'secondary',
    }),
    style({
      border: 'none',
      background: 'none',
      padding: 0,

      selectors: {
        '&[data-focus-visible]': {
          outline: `${vars['border-width'][2]} solid ${vars.color['border-color'].interactive.focused}`,
        },
      },
    }),
  ],
});
