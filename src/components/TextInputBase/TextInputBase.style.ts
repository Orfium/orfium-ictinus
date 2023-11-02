import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import { TextInputBaseProps } from './TextInputBase';
import { getTextInputBaseTokens, TextInputBaseTokens } from './TextInputBase.tokens';
import { ColorScheme } from '../../theme/types';
import { LABEL_TRANSFORM_LEFT_SPACING } from 'components/Label/Label.style';
import { body02, body03 } from 'components/Typography/Typography.config.styles';
import { generateStylesFromTokens } from 'components/Typography/utils';

// TODO:MERGE: remove theme as prop and do it as (theme) => ({}) because emotion should pass
const wrapperStyleSwitch = ({
  theme,
  hasError,
  isLocked,
  isDisabled,
  isInteractive,
}: {
  theme: Theme;
  colorScheme: ColorScheme;
  isLocked?: boolean;
  hasError?: boolean;
  isInteractive?: boolean;
} & Pick<TextInputBaseProps, 'isDisabled'>) => {
  const tokens = getTextInputBaseTokens(theme);

  const borderColor = isLocked ? tokens('borderColor.readOnly') : tokens('borderColor.focused');

  const backgroundColor = hasError
    ? tokens('backgroundColor.error')
    : isLocked
    ? tokens('backgroundColor.readOnly')
    : tokens('backgroundColor.default');

  const backgroundHoveredColor = hasError
    ? tokens('backgroundColor.errorHover')
    : tokens('backgroundColor.hover');

  const events = isDisabled
    ? {
        '&:focus-within': {
          boxShadow: `0 0 0 ${tokens('borderWidth.2')} transparent`,
        },
      }
    : {
        '&:hover': {
          backgroundColor: backgroundHoveredColor,
        },
        '&:focus-within': {
          boxShadow: `0 0 0 ${tokens('borderWidth.2')} ${borderColor}`,
          backgroundColor: tokens('backgroundColor.focused'),
        },
      };

  return {
    backgroundColor: backgroundColor,
    ...(isInteractive ? events : {}),
  };
};

/**
 * this wrapper must remain simple and not mess with children properties as it will be used
 * in custom implementation needed eg: datepicker
 * */
export const wrapperStyle =
  ({ isDisabled, status, isInteractive, size = 'normal', sx }: Partial<TextInputBaseProps>) =>
  (theme: Theme): SerializedStyles => {
    const colorScheme = theme.colorScheme;
    const isLocked = !isDisabled && status?.type === 'read-only';
    const hasError = !isDisabled && status?.type === 'error';

    const tokens = getTextInputBaseTokens(theme);

    const borderColor = hasError
      ? tokens('borderColor.error')
      : isLocked
      ? tokens('borderColor.readOnly')
      : tokens('borderColor.default');

    return css({
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      transition: `background-color 0.25s, box-shadow 0.25s, border-color 0.25s`,

      boxShadow: `0 0 0 ${tokens(
        `borderWidth.${hasError ? 2 : 1}` as TextInputBaseTokens
      )} ${borderColor}`,
      borderRadius: tokens('borderRadius'),
      userSelect: 'none',
      opacity: isDisabled ? theme.tokens.disabledState.get('default') : 1,
      cursor: isDisabled ? 'not-allowed' : 'text',
      height: tokens(`container.${size}` as const),
      minWidth: rem(tokens(`minWidth.small.${size}` as const)),
      ...wrapperStyleSwitch({
        theme,
        colorScheme,
        hasError,
        isLocked,
        isDisabled,
        isInteractive,
      }),
      ...sx?.wrapper,
    });
  };

export const textFieldStyle =
  ({ sx }: Partial<TextInputBaseProps>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getTextInputBaseTokens(theme);

    return css({
      position: 'relative',
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      verticalAlign: 'top',
      width: 'fill-available',
      padding: `0 0 0 ${tokens('paddingContentLeft')}`,

      '> div': {
        position: 'relative',
      },

      ...sx?.textField,
    });
  };

export const inputStyle =
  ({
    label,
    placeholder,
    size = 'normal',
    isLocked,
    isDisabled,
    sx,
  }: Partial<TextInputBaseProps> & { isLocked?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getTextInputBaseTokens(theme);

    return css(generateStylesFromTokens(tokens(`input.${size}` as const)), {
      background: 'transparent',
      border: 'none',
      color: tokens('textColor.inputColor'),
      padding: 0,
      display: 'block',
      position: 'relative',
      top: label && size === 'normal' ? rem(7) : undefined,
      zIndex: 1,
      textOverflow: 'ellipsis',
      width: 0,
      minWidth: '100%',

      '&::placeholder': {
        color: 'transparent',
        ...(!label && placeholder
          ? generateStylesFromTokens(tokens(`input.${size}` as const))
          : {}),
      },

      '&:focus': {
        outline: 'none',
        '&::placeholder': {
          color: placeholder ? tokens('textColor.inputColorAlt') : 'transparent',
        },
      },

      '&:not(:focus):placeholder-shown': {
        '& + label': {
          fontWeight: 'normal',
        },
      },

      '&:focus-within, &:not(:placeholder-shown)': {
        '& + label':
          size === 'normal'
            ? {
                fontWeight: `${theme.globals.typography.fontWeight.get('bold')} !important`,
                transform: `translate(${LABEL_TRANSFORM_LEFT_SPACING}, -35%) scale(0.8)`,
              }
            : {
                display: 'none',
              },
      },

      '&:focus-within': {
        '& + label': {
          fontWeight: `${theme.globals.typography.fontWeight.get('bold')} !important`,
          color: tokens('textColor.labelActive'),
        },
      },

      '&:disabled': {
        cursor: isLocked && !isDisabled ? 'text' : 'not-allowed',
      },
      ...sx?.input,
    });
  };

export const hintMessageStyle =
  ({ status, isDisabled }: Partial<TextInputBaseProps>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getTextInputBaseTokens(theme);

    return css(
      {
        display: 'flex',
        alignItems: 'center',
        gap: tokens('hintGap'),
        opacity: isDisabled ? theme.tokens.disabledState.get('default') : 1,
        color:
          status?.type === 'error' && !isDisabled
            ? tokens('textColor.errorHintColor')
            : tokens('textColor.inputColorAlt'),
        padding: `${tokens('hintPadding')} 0 0`,
        span: {
          alignItems: 'stretch',
          padding: 0,
        },
      },
      body03(theme)
    );
  };
