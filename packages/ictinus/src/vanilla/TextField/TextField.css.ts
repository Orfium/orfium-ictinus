import { vars } from '@orfium/tokens';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles';
import { style } from '../../vanilla-extract';

export const textField = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    gap: 'xs',
  }),
  {
    selectors: {
      '&[data-disabled]': {
        opacity: 0.5,
      },
    },
  },
]);

export const label = style([
  sprinkles({
    typography: 'label02',
  }),
  {
    color: vars.color.text.default.primary,
    selectors: {
      [`${textField}[data-invalid] &`]: {
        color: vars.color.text.default.error,
      },
    },
  },
]);

export const inputGroup = style([
  sprinkles({
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flexWrap: 'wrap',
    typography: 'body02',
    color: 'primary',
    rounded: '2',
    width: 'full',
    border: '1',
    borderStyle: 'solid',
    isolation: 'isolate',
  }),
  {
    backgroundColor: vars.color.palette.secondary.base,
    borderColor: vars.color['border-color'].interactive.default,
    transition: 'border-color 150ms ease-out, background-color 150ms ease-out',

    selectors: {
      '&:has(> [data-align="block-start"]), &:has(> [data-align="block-end"])': {
        flexDirection: 'column',
        height: 'auto',
      },
      '&[data-hovered]:not([data-disabled])': {
        backgroundColor: vars.color.palette.secondary.muted,
        borderColor: vars.color['border-color'].interactive.active,
      },
      '&[data-focus-within]': {
        backgroundColor: vars.color.palette.secondary.base,
        borderColor: vars.color['border-color'].interactive.active,
        outline: `${vars['border-width'][1]} solid ${vars.color['border-color'].interactive.active}`,
      },
      '&[data-focus-visible]': {
        transition: 'none',
        borderColor: vars.color['border-color'].interactive.focused,
        outline: `${vars['border-width'][3]} solid ${vars.color['border-color'].interactive.focused}`,
      },
      '&[data-invalid]': {
        backgroundColor: vars.color.palette.error.base,
        borderColor: vars.color['border-color'].interactive.error,
      },
      '&[data-invalid][data-hovered]:not([data-disabled])': {
        backgroundColor: vars.color.palette.error.muted,
        borderColor: vars.color['border-color'].interactive.error,
      },
      '&[data-invalid][data-focus-within]': {
        backgroundColor: vars.color.palette.error.base,
        borderColor: vars.color['border-color'].interactive.error,
        outline: `${vars['border-width'][1]} solid ${vars.color['border-color'].interactive.error}`,
      },
      '&[data-invalid][data-focus-visible]': {
        transition: 'none',
        borderColor: vars.color['border-color'].interactive.focused,
        outline: `${vars['border-width'][3]} solid ${vars.color['border-color'].interactive.focused}`,
      },
    },
  },
]);

export const control = style([
  sprinkles({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: 'full',
    isolation: 'isolate',
  }),
  {
    selectors: {
      [`${inputGroup} > &`]: {
        flex: 1,
        minWidth: 0,
      },
    },
  },
]);

export const floatingLabel = style([
  sprinkles({
    position: 'absolute',
    zIndex: '20',
    pointerEvents: 'none',
    bg: 'transparent',
  }),
  {
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    transformOrigin: '0 0',
    transition: 'transform 250ms, opacity 250ms ease-in-out',
    fontSize: vars['font-size'][3],
    color: vars.color.text.default.secondary,
    paddingLeft: vars.spacing.md,
    paddingRight: vars.spacing.md,
    selectors: {
      [`${control}:has(> :is(input, textarea)[data-focused]) > &, ${control}:has(> :is(input, textarea):not(:placeholder-shown)) > &`]:
        {
          color: vars.color.text.default.active,
          transform: `translate(calc(${vars.spacing.md} * 0.2), -115%) scale(0.8)`,
          transformOrigin: '0 0',
          fontWeight: vars.weight.bold,
          lineHeight: vars['line-height'][1],
        },
      [`${control}:has(> :is(input, textarea)[data-invalid]) > &`]: {
        color: vars.color.text.default.error,
      },
      [`${control}:has(> textarea) > &`]: {
        top: vars.spacing.lg,
        transform: 'translateY(0)',
        boxSizing: 'border-box',
        width: 'var(--floating-label-clip-width, 100%)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      },
      [`${control}:has(> textarea[data-focused]) > &, ${control}:has(> textarea:not(:placeholder-shown)) > &`]:
        {
          transform: `translate(calc(${vars.spacing.md} * 0.2), -35%) scale(0.8)`,
        },
      [`${inputGroup} &`]: {
        paddingLeft: vars.spacing.md,
        paddingRight: vars.spacing.md,
      },
      [`${inputGroup}:has(> [data-align="inline-start"]) &`]: {
        paddingLeft: vars.spacing.sm,
      },
      [`${inputGroup}:has(> [data-align="inline-end"]) &`]: {
        paddingRight: vars.spacing.sm,
      },
      [`${inputGroup} ${control}:has(> :is(input, textarea)[data-focused]) &, ${inputGroup} ${control}:has(> :is(input, textarea):not(:placeholder-shown)) &`]:
        {
          transform: 'translate(0, -115%) scale(0.8)',
        },
      [`${inputGroup} ${control}:has(> textarea[data-focused]) &, ${inputGroup} ${control}:has(> textarea:not(:placeholder-shown)) &`]:
        {
          transform: 'translate(0, -50%) scale(0.8)',
        },
      [`${control}:has(> :is(input, textarea)[data-variant="compact"][data-focused]) > &, ${inputGroup} ${control}:has(> :is(input, textarea)[data-variant="compact"][data-focused]) &, ${control}:has(> :is(input, textarea)[data-variant="compact"]:not(:placeholder-shown)) > &, ${inputGroup} ${control}:has(> :is(input, textarea)[data-variant="compact"]:not(:placeholder-shown)) &`]:
        {
          transition: 'none',
          opacity: 0,
        },
      [`${control}:has(> :is(input, textarea)[data-variant="compact"]) > &, ${inputGroup} ${control}:has(> :is(input, textarea)[data-variant="compact"]) &`]:
        {
          fontSize: vars['font-size'][2],
          lineHeight: vars['line-height'][2],
        },
    },
  },
]);

export const input = recipe({
  base: [
    sprinkles({
      typography: 'body02',
      color: 'primary',
      rounded: '2',
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
          borderColor: vars.color['border-color'].interactive.active,
          outline: `${vars['border-width'][1]} solid ${vars.color['border-color'].interactive.active}`,
        },
        '&[data-focus-visible]': {
          transition: 'none',
          borderColor: vars.color['border-color'].interactive.focused,
          outline: `${vars['border-width'][3]} solid ${vars.color['border-color'].interactive.focused}`,
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
          borderColor: vars.color['border-color'].interactive.error,
          outline: `${vars['border-width'][1]} solid ${vars.color['border-color'].interactive.error}`,
        },
        '&[data-invalid][data-focus-visible]': {
          transition: 'none',
          borderColor: vars.color['border-color'].interactive.focused,
          outline: `${vars['border-width'][3]} solid ${vars.color['border-color'].interactive.focused}`,
        },
        [`${inputGroup} > &[data-slot="input-group-control"]`]: {
          flex: 1,
        },
        [`${inputGroup} &[data-slot="input-group-control"]`]: {
          minWidth: 0,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderStyle: 'none',
          borderWidth: 0,
          outline: 'none',
          paddingLeft: vars.spacing.sm,
          paddingRight: vars.spacing.sm,
        },
        [`${inputGroup} &[data-slot="input-group-control"][data-hovered], ${inputGroup} &[data-slot="input-group-control"][data-focused], ${inputGroup} &[data-slot="input-group-control"][data-focus-visible], ${inputGroup} &[data-slot="input-group-control"][data-invalid]`]:
          {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderWidth: 0,
            outline: 'none',
          },
        [`${control}:has(> ${floatingLabel}) > &::placeholder`]: {
          color: 'transparent',
        },
        [`${control}:has(> ${floatingLabel}) > &[data-focused]::placeholder`]: {
          color: vars.color.text.default.secondary,
        },
        [`${control}:has(> ${floatingLabel}) > &:not(textarea):not([data-variant="compact"])`]:
          {
            paddingTop: vars.spacing.md,
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
      textarea: sprinkles({
        typography: 'body02',
      }),
    },
  },
  defaultVariants: {
    type: 'normal',
  },
});

export const textArea = style({
  paddingTop: vars.spacing.lg,
  paddingBottom: vars.spacing.lg,
  selectors: {
    [`${control}:has(> ${floatingLabel}) > &`]: {
      paddingTop: vars.spacing['2xl'],
    },
  },
});

export const description = style([
  sprinkles({
    typography: 'body03',
    color: 'secondary',
  }),
]);

export const error = style([
  sprinkles({
    typography: 'body03',
    color: 'error',
  }),
]);

export const addon = style([
  sprinkles({
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    gap: 'sm',
    flexShrink: '0',
    pointerEvents: 'auto',
    userSelect: 'none',
    transitionProperty: 'colors',
    transitionDuration: '150ms',
    transitionTimingFunction: 'out',
  }),
  {
    cursor: 'text',
    color: vars.color.text.default.primary,
    height: 'auto',

    selectors: {
      '&[data-align="inline-start"]': {
        order: -1,
        paddingLeft: vars.spacing.md,
      },
      '&[data-align="inline-start"]:has(> button)': {
        marginLeft: '-0.45rem',
      },
      '&[data-align="inline-end"]': {
        order: 1,
        paddingRight: vars.spacing.md,
      },
      '&[data-align="inline-end"]:has(> button)': {
        marginRight: '-0.45rem',
      },
      '&[data-align="block-start"]': {
        width: '100%',
        order: -1,
        justifyContent: 'flex-start',
        alignSelf: 'auto',
        paddingLeft: vars.spacing.md,
        paddingRight: vars.spacing.md,
        paddingTop: vars.spacing.md,
        paddingBottom: vars.spacing.sm,
      },
      '&[data-align="block-end"]': {
        width: '100%',
        order: 1,
        justifyContent: 'flex-start',
        alignSelf: 'auto',
        paddingLeft: vars.spacing.md,
        paddingRight: vars.spacing.md,
        paddingTop: vars.spacing.sm,
        paddingBottom: vars.spacing.md,
      },
      [`${textField}[data-invalid] &`]: {
        color: vars.color.text.default.error,
      },
    },
  },
]);
