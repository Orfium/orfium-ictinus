import { vars } from '@orfium/tokens';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles';
import { style } from '../../vanilla-extract';

export const textField = recipe({
  base: [
    sprinkles({
      display: 'flex',
      flexDirection: 'column',
      gap: 'xs',
    }),
    style({
      selectors: {
        '&[data-disabled]': {
          opacity: 0.5,
        },
      },
    }),
  ],
});

export const label = recipe({
  base: [
    sprinkles({
      typography: 'label02',
    }),
    style({
      color: vars.color.text.default.primary,
      selectors: {
        [`${textField.classNames.base}[data-invalid] &`]: {
          color: vars.color.text.default.error,
        },
      },
    }),
  ],
});

export const floatingLabel = recipe({
  base: [
    sprinkles({
      typography: 'label02',
      color: 'primary',
      px: 'sm',
    }),
    style({
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      zIndex: 20,
      background: `linear-gradient(to right, ${vars.color.background.default} 0%, ${vars.color.background.default} 100%)`,
      backgroundClip: 'padding-box',
      transition: 'all 150ms ease-out',

      selectors: {
        '&[data-floating="true"]': {
          top: 0,
          fontSize: vars['font-size'][1],
          lineHeight: vars['line-height'][1],
          transform: 'translateY(-50%)',
          fontWeight: vars.weight.medium,
          color: vars.color.text.default.secondary,
        },
        '&[data-floating="true"][data-invalid]': {
          color: vars.color.text.default.error,
        },
        '&[data-disabled]': {
          opacity: 0.5,
        },
      },
    }),
  ],
});

export const inputWrapper = recipe({
  base: [
    sprinkles({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    }),
    style({
      isolation: 'isolate',
    }),
  ],
});

export const inputGroup = recipe({
  base: [
    sprinkles({
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      width: 'full',
    }),
    style({
      backgroundColor: vars.color.palette.secondary.base,
      borderColor: vars.color['border-color'].interactive.default,
      borderStyle: 'solid',
      borderWidth: vars['border-width'][1],
      borderRadius: vars['border-radius']['2'],
      isolation: 'isolate',
      transition: 'background-color 150ms ease-out',
      paddingLeft: vars.spacing.md,
      paddingRight: vars.spacing.md,

      selectors: {
        '&:has(> input[data-hovered]):not(:has(> input[data-disabled]))': {
          backgroundColor: vars.color.palette.secondary.muted,
          borderColor: vars.color['border-color'].interactive.active,
        },
        '&:hover:not(:has(> input[data-disabled]))': {
          backgroundColor: vars.color.palette.secondary.muted,
          borderColor: vars.color['border-color'].interactive.active,
        },
        '&:has(> input[data-focused])': {
          backgroundColor: vars.color.palette.secondary.base,
          borderWidth: vars['border-width'][2],
          borderColor: vars.color['border-color'].interactive.active,
        },
        '&:has(> input[data-focus-visible])': {
          borderColor: vars.color['border-color'].interactive.focused,
          outline: `${vars['border-width'][2]} solid ${vars.color['border-color'].interactive.focused}`,
          outlineOffset: '1px',
        },
        '&:has(> input[data-invalid])': {
          backgroundColor: vars.color.palette.error.base,
          borderColor: vars.color['border-color'].interactive.error,
        },
        '&:has(> input[data-invalid][data-hovered]):not(:has(> input[data-disabled]))': {
          backgroundColor: vars.color.palette.error.muted,
          borderColor: vars.color['border-color'].interactive.error,
        },
        '&:has(> input[data-invalid]):hover:not(:has(> input[data-disabled]))': {
          backgroundColor: vars.color.palette.error.muted,
          borderColor: vars.color['border-color'].interactive.error,
        },
        '&:has(> input[data-invalid][data-focus-visible])': {
          transition: 'none',
          borderColor: vars.color['border-color'].interactive.focused,
          outline: `${vars['border-width'][2]} solid ${vars.color['border-color'].interactive.focused}`,
        },
      },
    }),
  ],
});

export const input = recipe({
  base: [
    sprinkles({
      typography: 'body02',
      color: 'primary',
      rounded: '2',
      cursor: 'default',
      width: 'full',
    }),
    style({
      backgroundColor: vars.color.palette.secondary.base,
      borderColor: vars.color['border-color'].interactive.default,
      borderStyle: 'solid',
      borderWidth: vars['border-width'][1],
      outline: 'none',
      transition: 'border-color 150ms ease-out, background-color 150ms ease-out',
      paddingLeft: vars.spacing.md,
      paddingRight: vars.spacing.md,

      selectors: {
        '&[data-hovered]:not([data-disabled])': {
          backgroundColor: vars.color.palette.secondary.muted,
          borderColor: vars.color['border-color'].interactive.active,
        },
        '&[data-focused]': {
          backgroundColor: vars.color.palette.secondary.base,
          borderWidth: vars['border-width'][2],
          borderColor: vars.color['border-color'].interactive.active,
        },
        '&[data-focus-visible]': {
          transition: 'none',
          borderColor: vars.color['border-color'].interactive.focused,
          outline: `${vars['border-width'][2]} solid ${vars.color['border-color'].interactive.focused}`,
        },
        '&[data-invalid]': {
          backgroundColor: vars.color.palette.error.base,
          borderColor: vars.color['border-color'].interactive.error,
        },
        '&[data-invalid][data-hovered]:not([data-disabled])': {
          backgroundColor: vars.color.palette.error.muted,
          borderColor: vars.color['border-color'].interactive.error,
        },
        '&[data-invalid][data-focused]': {
          backgroundColor: vars.color.palette.error.base,
          borderWidth: vars['border-width'][2],
          borderColor: vars.color['border-color'].interactive.error,
        },
        '&[data-invalid][data-focus-visible]': {
          transition: 'none',
          borderColor: vars.color['border-color'].interactive.focused,
          outline: `${vars['border-width'][2]} solid ${vars.color['border-color'].interactive.focused}`,
        },
        [`${inputGroup.classNames.base} > &`]: {
          minWidth: 0,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderStyle: 'none',
          borderWidth: 0,
          outline: 'none',
          paddingLeft: vars.spacing.none,
          paddingRight: vars.spacing.none,
        },
        [`${inputGroup.classNames.base} > &[data-hovered]`]: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: 0,
        },
        [`${inputGroup.classNames.base} > &[data-focused]`]: {
          borderColor: 'transparent',
          borderWidth: 0,
        },
        [`${inputGroup.classNames.base} > &[data-invalid]`]: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: 0,
        },
      },
    }),
  ],
  variants: {
    type: {
      normal: sprinkles({
        typography: 'body02',
        h: '13',
      }),
      compact: sprinkles({
        typography: 'body03',
        h: '7',
      }),
    },
  },
  defaultVariants: {
    type: 'normal',
  },
});

export const description = recipe({
  base: [
    sprinkles({
      typography: 'body03',
      color: 'secondary',
    }),
  ],
});

export const error = recipe({
  base: [
    sprinkles({
      typography: 'body03',
      color: 'error',
      mt: 'xs',
    }),
  ],
});

export const addon = recipe({
  base: [
    sprinkles({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'xs',
    }),
    style({
      position: 'relative',
      flexShrink: 0,
      pointerEvents: 'auto',
      color: vars.color.text.default.primary,
      transition: 'color 150ms ease-out',

      selectors: {
        '&[data-align="inline-start"]': {
          order: -1,
        },
        '&[data-align="inline-end"]': {
          order: 1,
        },
        '&[data-align="block-start"]': {
          width: '100%',
          order: -1,
        },
        '&[data-align="block-end"]': {
          width: '100%',
          order: 1,
        },
        '&[data-invalid]': {
          color: vars.color.text.default.error,
        },
        '&[data-disabled]': {
          opacity: 0.5,
        },
      },
    }),
  ],
});
