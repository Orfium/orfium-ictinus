import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import type { SemanticTypographyKey } from 'theme/tokens/semantic/typography';
import { rem } from 'theme/utils';

import type { TextInputBaseProps } from './TextInputBase';
import { getTextInputBaseTokens } from './TextInputBase.tokens';
import type { ColorScheme } from '../../theme/types';
import { LABEL_TRANSFORM_LEFT_SPACING } from 'components/Label/Label.style';
import { body03 } from 'components/Typography/Typography.config.styles';
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
  const borderColor = isLocked
    ? theme.tokens.colors.get('borderColor.interactive.default')
    : theme.tokens.colors.get('borderColor.interactive.active');

  const backgroundColor = hasError
    ? theme.tokens.colors.get('palette.error.base')
    : isLocked
    ? theme.tokens.colors.get('palette.secondary.muted')
    : theme.tokens.colors.get('palette.secondary.base');

  const backgroundHoveredColor = hasError
    ? theme.tokens.colors.get('palette.error.muted')
    : theme.tokens.colors.get('palette.secondary.muted');

  const events = isDisabled
    ? {
        '&:focus-within': {
          boxShadow: `0 0 0 ${theme.dimension.borderWidth.get('active')} transparent`,
        },
      }
    : {
        '&:hover': {
          backgroundColor: backgroundHoveredColor,
        },
        '&:focus-within': {
          boxShadow: `0 0 0 ${theme.dimension.borderWidth.get('active')} ${borderColor}`,
          backgroundColor: theme.tokens.colors.get('palette.secondary.base'),
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
      ? theme.tokens.colors.get('borderColor.interactive.error')
      : theme.tokens.colors.get('borderColor.interactive.default');

    return css({
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      position: 'relative',
      transition: `background-color 0.25s, box-shadow 0.25s, border-color 0.25s`,

      boxShadow: `0 0 0 ${theme.dimension.borderWidth.get(
        hasError ? 'active' : 'default'
      )} ${borderColor}`,
      borderRadius: theme.dimension.borderRadius.get('md'),
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
      padding: tokens('content.padding'),

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
    const typography: SemanticTypographyKey = size === 'normal' ? 'normal.body02' : 'normal.body03';

    return css(generateStylesFromTokens(theme.tokens.typography.get(typography)), {
      background: 'transparent',
      border: 'none',
      color: theme.tokens.colors.get('textColor.default.primary'),
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
          ? generateStylesFromTokens(theme.tokens.typography.get(typography))
          : {}),
      },

      '&:focus': {
        outline: 'none',
        '&::placeholder': {
          color: placeholder
            ? theme.tokens.colors.get('textColor.default.secondary')
            : 'transparent',
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
          color: theme.tokens.colors.get('textColor.default.active'),
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
    return css(
      {
        display: 'flex',
        alignItems: 'center',
        gap: theme.dimension.spacing.get('xs'),
        opacity: isDisabled ? theme.tokens.disabledState.get('default') : 1,
        color:
          status?.type === 'error' && !isDisabled
            ? theme.tokens.colors.get('textColor.default.error')
            : theme.tokens.colors.get('textColor.default.secondary'),
        padding: `${theme.dimension.spacing.get('sm')} 0 0`,
        span: {
          alignItems: 'stretch',
          padding: 0,
        },
      },
      body03(theme)
    );
  };
