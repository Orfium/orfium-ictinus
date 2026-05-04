import { vars } from '@orfium/tokens';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '~/sprinkles';
import { style } from '~/vanilla-extract';

export const nav = recipe({
  base: [
    sprinkles({
      display: 'inline-flex',
      flexDirection: 'column',
    }),
  ],
});

export const navList = recipe({
  base: [
    sprinkles({
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 'lg',
    }),
  ],
});

export const navItem = recipe({
  base: [
    sprinkles({
      position: 'relative',
      isolation: 'isolate',
      display: 'inline-flex',
      flexDirection: 'column',
    }),
    style({
      selectors: {
        '&::before': {
          content: '',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '2px',
          height: '100%',
        },
        '&:hover::before': {
          backgroundColor: vars.color['border-color'].interactive.default,
        },
      },
    }),
  ],
  variants: {
    isDisabled: {
      true: style({
        selectors: {
          '&::before': {
            content: 'unset',
          },
        },
      }),
    },
    isActive: {
      true: style({
        selectors: {
          '&::before': {
            backgroundColor: vars.color['border-color'].interactive.active,
          },
          '&:hover::before': {
            backgroundColor: vars.color['border-color'].interactive.active,
          },
        },
      }),
    },
  },
});

export const navLink = recipe({
  base: [
    sprinkles({
      position: 'relative',
      isolation: 'isolate',
      display: 'inline-flex',
      alignItems: 'center',
      px: 'lg',
      py: 'md',
      typography: 'label01',
      color: 'primary',
      gap: 'sm',
      fontWeight: 'regular',
    }),
    style({
      selectors: {
        '&:focus-visible': {
          outline: `${vars['border-width'][3]} solid ${vars.color['border-color'].interactive.focused}`,
        },
      },
    }),
  ],
  variants: {
    isActive: {
      true: sprinkles({
        color: 'active',
        fontWeight: 'medium',
      }),
    },
    isDisabled: {
      true: sprinkles({
        opacity: '0.5',
        cursor: 'not-allowed',
        pointerEvents: 'none',
      }),
    },
  },
});

export const counter = recipe({
  base: [
    sprinkles({
      display: 'inline-flex',
      alignItems: 'center',
      px: 'sm',
      py: 'xs',
      typography: 'label01',
      rounded: '1',
    }),
  ],
  variants: {
    isActive: {
      true: sprinkles({
        bg: 'palette.primary.contrast',
        color: 'inverted.primary',
      }),
      false: sprinkles({
        bg: 'palette.primary-alt.contrast',
        color: 'primary',
      }),
    },
  },
});

export const subList = recipe({
  base: [
    sprinkles({
      display: 'inline-flex',
      flexDirection: 'column',
      pl: 'lg',
      pb: 'md',
    }),
    style({
      marginTop: '-4px',
    }),
  ],
});

export const subItem = recipe({
  base: [
    sprinkles({
      position: 'relative',
      isolation: 'isolate',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'sm',
    }),
  ],
});

const subLinkBase = style({});

export const subLink = recipe({
  base: [
    subLinkBase,
    sprinkles({
      position: 'relative',
      isolation: 'isolate',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'sm',
      typography: 'label02',
      color: 'primary',
      fontWeight: 'regular',
    }),
    style({
      selectors: {
        '&:focus-visible': {
          outline: `${vars['border-width'][3]} solid ${vars.color['border-color'].interactive.focused}`,
        },
      },
    }),
  ],
  variants: {
    isActive: {
      true: sprinkles({
        fontWeight: 'medium',
        color: 'active',
      }),
    },
    isDisabled: {
      true: sprinkles({
        opacity: '0.5',
        cursor: 'not-allowed',
        pointerEvents: 'none',
      }),
    },
  },
});

export const subLinkStatusIndicator = recipe({
  base: [
    sprinkles({
      flexShrink: '0',
    }),
    style({
      opacity: 0,

      '@media': {
        '(hover: hover)': {
          selectors: {
            [`${subLinkBase}:hover &`]: {
              opacity: 1,
              color: vars.color['border-color'].interactive.default,
            },
          },
        },
      },
    }),
  ],
  variants: {
    isActive: {
      true: sprinkles({
        color: 'active',
        opacity: '1',
      }),
    },
  },
});
