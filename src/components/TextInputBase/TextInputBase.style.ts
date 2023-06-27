import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import { MIN_WIDTH } from './config';
import { TextInputBaseProps } from './TextInputBase';
import { getTextInputBaseTokens, TextInputBaseTokens } from './TextInputBase.tokens';
import { ColorScheme } from '../../theme/types';
import { LABEL_TRANSFORM_LEFT_SPACING } from 'components/Label/Label.style';
import { body02, body03 } from 'components/Typography/Typography.config.styles';

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
  ({ isDisabled, status, isInteractive, sx }: Partial<TextInputBaseProps>) =>
  (theme: Theme): SerializedStyles => {
    const colorScheme = theme.colorScheme;
    const isLocked = status?.type === 'read-only';
    const hasError = status?.type === 'error';

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
      cursor: isDisabled || isLocked ? 'not-allowed' : 'text',
      height: tokens('container'),
      minWidth: rem(MIN_WIDTH),
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
      /** TODO: revisit this when TextField's add-on is implemented */
      padding: `0 0 0 ${tokens('paddingContentLeft')}`,

      '> div': {
        position: 'relative',
      },

      ...sx?.textField,
    });
  };

export const inputStyle =
  ({ label, placeholder, sx }: Partial<TextInputBaseProps>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getTextInputBaseTokens(theme);

    return css(body02(theme), {
      background: 'transparent',
      border: 'none',
      color: tokens('textColor.inputColor'),
      display: 'block',
      position: 'relative',
      /**
       * TODO revisit this when field components are implemented, Label is part of (Multi)TextField component
       */
      top: label ? rem(7) : undefined,
      zIndex: 1,
      textOverflow: 'ellipsis',
      width: 0,
      minWidth: '100%',

      '& + label': {
        fontSize: theme.globals.typography.fontSize[15],
      },

      '&::placeholder': {
        color: 'transparent',
        ...(!label && placeholder ? body02(theme) : {}),
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
        '& + label': {
          transform: `translate(${LABEL_TRANSFORM_LEFT_SPACING}, -35%) scale(0.8)`,
          fontWeight: theme.globals.typography.fontWeight.get('bold'),
        },
      },

      '&:focus-within': {
        '& + label': {
          color: tokens('textColor.labelActive'),
        },
      },

      '&:disabled': {
        cursor: 'not-allowed',
      },
      ...sx?.input,
    });
  };

export const hintMessageStyle =
  ({ status }: Partial<TextInputBaseProps>) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getTextInputBaseTokens(theme);

    return css(
      {
        display: 'flex',
        alignItems: 'center',
        gap: tokens('hintGap'),
        color:
          status?.type === 'error'
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
