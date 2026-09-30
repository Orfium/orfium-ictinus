import { vars } from '@orfium/tokens';
import { recipe } from '@vanilla-extract/recipes';

import { sprinkles } from '../../sprinkles';
import { style } from '../../vanilla-extract';

// marker class used to target the compact input variant from other recipes without a circular reference
const inputCompact = style({});

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

export const inputGroup = recipe({
  base: [
    sprinkles({
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
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
      borderRadius: vars['border-radius']['2'],
      isolation: 'isolate',
      transition: 'border-color 150ms ease-out, background-color 150ms ease-out',
      paddingLeft: vars.spacing.md,
      paddingRight: vars.spacing.md,

      selectors: {
        '&:hover:not(:has(input[data-disabled]))': {
          backgroundColor: vars.color.palette.secondary.muted,
          borderColor: vars.color['border-color'].interactive.active,
        },
        '&:has(input[data-focused])': {
          backgroundColor: vars.color.palette.secondary.base,
          borderColor: vars.color['border-color'].interactive.active,
          outline: `${vars['border-width'][1]} solid ${vars.color['border-color'].interactive.active}`,
        },
        '&:has(input[data-focus-visible])': {
          transition: 'none',
          borderColor: vars.color['border-color'].interactive.focused,
          outline: `${vars['border-width'][3]} solid ${vars.color['border-color'].interactive.focused}`,
        },
        '&:has(input[data-invalid])': {
          backgroundColor: vars.color.palette.error.base,
          borderColor: vars.color['border-color'].interactive.error,
        },
        '&:has(input[data-invalid]):hover:not(:has(input[data-disabled]))': {
          backgroundColor: vars.color.palette.error.muted,
          borderColor: vars.color['border-color'].interactive.error,
        },
        '&:has(input[data-invalid][data-focused])': {
          backgroundColor: vars.color.palette.error.base,
          borderColor: vars.color['border-color'].interactive.error,
          outline: `${vars['border-width'][1]} solid ${vars.color['border-color'].interactive.error}`,
        },
        '&:has(input[data-invalid][data-focus-visible])': {
          transition: 'none',
          borderColor: vars.color['border-color'].interactive.focused,
          outline: `${vars['border-width'][3]} solid ${vars.color['border-color'].interactive.focused}`,
        },
      },
    }),
  ],
});

export const floatingLabelWrapper = recipe({
  base: [
    sprinkles({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: 'full',
    }),
    style({
      isolation: 'isolate',
      overflow: 'hidden',
      selectors: {
        [`${inputGroup.classNames.base} > &`]: {
          flex: 1,
          minWidth: 0,
        },
      },
    }),
  ],
});

export const floatingLabel = recipe({
  base: [
    style({
      position: 'absolute',
      left: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 20,
      transformOrigin: '0 0',
      transition: 'transform 250ms, opacity 250ms ease-in-out',
      fontSize: vars['font-size'][3],
      color: vars.color.text.default.secondary,
      pointerEvents: 'none',
      background: 'transparent',
      paddingLeft: vars.spacing.md,
      paddingRight: vars.spacing.md,
      selectors: {
        [`${floatingLabelWrapper.classNames.base}:has(> :is(input, textarea)[data-focused]) > &, ${floatingLabelWrapper.classNames.base}:has(> :is(input, textarea):not(:placeholder-shown)) > &`]:
          {
            color: vars.color.text.default.active,
            transform: `translate(calc(${vars.spacing.md} * 0.2), -115%) scale(0.8)`,
            transformOrigin: '0 0',
            fontWeight: vars.weight.bold,
            lineHeight: vars['line-height'][1],
          },
        [`${floatingLabelWrapper.classNames.base}:has(> :is(input, textarea)[data-invalid]) > &`]: {
          color: vars.color.text.default.error,
        },
        [`${floatingLabelWrapper.classNames.base}:has(> textarea) > &`]: {
          top: vars.spacing.lg,
          transform: 'translateY(0)',
          boxSizing: 'border-box',
          width: 'var(--floating-label-clip-width, 100%)',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        },
        [`${floatingLabelWrapper.classNames.base}:has(> textarea[data-focused]) > &, ${floatingLabelWrapper.classNames.base}:has(> textarea:not(:placeholder-shown)) > &`]:
          {
            transform: `translate(calc(${vars.spacing.md} * 0.2), -35%) scale(0.8)`,
          },
        [`${inputGroup.classNames.base} &`]: {
          paddingLeft: vars.spacing.none,
          paddingRight: vars.spacing.none,
        },
        [`${inputGroup.classNames.base} ${floatingLabelWrapper.classNames.base}:has(> :is(input, textarea)[data-focused]) &, ${inputGroup.classNames.base} ${floatingLabelWrapper.classNames.base}:has(> :is(input, textarea):not(:placeholder-shown)) &`]:
          {
            transform: 'translate(0, -115%) scale(0.8)',
          },
        [`${inputGroup.classNames.base} ${floatingLabelWrapper.classNames.base}:has(> textarea[data-focused]) &, ${inputGroup.classNames.base} ${floatingLabelWrapper.classNames.base}:has(> textarea:not(:placeholder-shown)) &`]:
          {
            transform: 'translate(0, -50%) scale(0.8)',
          },
        [`${floatingLabelWrapper.classNames.base}:has(> :is(input, textarea).${inputCompact}[data-focused]) > &, ${inputGroup.classNames.base} ${floatingLabelWrapper.classNames.base}:has(> :is(input, textarea).${inputCompact}[data-focused]) &, ${floatingLabelWrapper.classNames.base}:has(> :is(input, textarea).${inputCompact}:not(:placeholder-shown)) > &, ${inputGroup.classNames.base} ${floatingLabelWrapper.classNames.base}:has(> :is(input, textarea).${inputCompact}:not(:placeholder-shown)) &`]:
          {
            transition: 'none',
            opacity: 0,
          },
        [`${floatingLabelWrapper.classNames.base}:has(> :is(input, textarea).${inputCompact}) > &, ${inputGroup.classNames.base} ${floatingLabelWrapper.classNames.base}:has(> :is(input, textarea).${inputCompact}) &`]:
          {
            fontSize: vars['font-size'][2],
            lineHeight: vars['line-height'][2],
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
        [`${inputGroup.classNames.base} &`]: {
          minWidth: 0,
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderStyle: 'none',
          borderWidth: 0,
          outline: 'none',
          paddingLeft: vars.spacing.none,
          paddingRight: vars.spacing.none,
        },
        [`${inputGroup.classNames.base} &[data-hovered], ${inputGroup.classNames.base} &[data-focused], ${inputGroup.classNames.base} &[data-focus-visible], ${inputGroup.classNames.base} &[data-invalid]`]:
          {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderWidth: 0,
            outline: 'none',
          },
        [`${floatingLabelWrapper.classNames.base}:has(> ${floatingLabel.classNames.base}) > &::placeholder`]:
          {
            color: 'transparent',
          },
        [`${floatingLabelWrapper.classNames.base}:has(> ${floatingLabel.classNames.base}) > &[data-focused]::placeholder`]:
          {
            color: vars.color.text.default.secondary,
          },
        [`${floatingLabelWrapper.classNames.base}:has(> ${floatingLabel.classNames.base}) > &:not(textarea):not(.${inputCompact})`]:
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
      compact: [
        inputCompact,
        sprinkles({
          typography: 'body03',
          h: '7',
        }),
      ],
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
