import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';
import { DEFAULT_SIZE, getTextFieldSize } from 'utils/size-utils';

import { getDisabled, getHover, getPressed } from '../../theme/states';
import { ColorScheme } from '../../theme/types';
import { textInputConfig } from './config';
import { Props } from './TextInputBase';
import { LABEL_TRANSFORM_LEFT_SPACING } from 'components/Label/Label.style';

const wrapperStyleSwitch = ({
  theme,
  colorScheme = 'light',
  isLean,
  hasError,
  isDisabled,
}: {
  theme: Theme;
  colorScheme: ColorScheme;
  hasError?: boolean;
} & Pick<Props, 'isLean' | 'isDisabled'>) => {
  if (isLean) {
    return {
      backgroundColor: 'transparent',
    };
  }
  const borderConfig = textInputConfig.types[colorScheme].outlined.border;

  const backgroundColor =
    colorScheme === 'dark' ? theme.utils.getColor('darkGrey', 700) : theme.palette.white;
  const borderColorName = !hasError
    ? borderConfig.color.pressed.name
    : borderConfig.color.error.name;
  const borderColorShade = !hasError
    ? borderConfig.color.pressed.shade
    : borderConfig.color.error.shade;

  const events = isDisabled
    ? {
        '&:focus-within': {
          boxShadow: `0 0 0 ${rem(1)} transparent`,
        },
      }
    : {
        '&:hover': {
          backgroundColor: getHover({ theme }).backgroundColor,
        },
        '&:focus-within': {
          boxShadow: `0 0 0 ${rem(borderConfig.width + 1)} ${theme.utils.getColor(
            borderColorName,
            borderColorShade
          )}`,
          backgroundColor: getPressed({ theme }).backgroundColor,
        },
      };

  return {
    backgroundColor: backgroundColor,
    ...events,
  };
};

/**
 * this wrapper must remain simple and not mess with children properties as it will be used
 * in custom implementation needed eg: datepicker
 * */
export const wrapperStyle =
  ({ isDisabled, isLocked, status, isLean, isDark, size, sx, hasMinWidthCompat }: Props) =>
  (theme: Theme): SerializedStyles => {
    const colorScheme = isDark ? 'dark' : theme.colorScheme;
    const hasError = status === 'error';
    const textFieldSize = !isLean
      ? getTextFieldSize(hasMinWidthCompat, size)
      : getTextFieldSize(hasMinWidthCompat);
    const borderConfig = textInputConfig.types[colorScheme].outlined.border;

    return css({
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      transition: `background-color 0.25s, box-shadow 0.25s, border-color 0.25s`,
      boxShadow: `0 0 0 ${rem(borderConfig.width)} ${
        hasError
          ? theme.utils.getColor(borderConfig.color.error.name, borderConfig.color.error.shade)
          : theme.utils.getColor(borderConfig.color.default.name, borderConfig.color.default.shade)
      }`,
      borderRadius: theme.spacing.get('3'),
      userSelect: 'none',
      opacity: isDisabled ? getDisabled().opacity : 1,
      cursor: isDisabled || isLocked ? getDisabled().cursor : 'auto',
      ...textFieldSize,
      ...wrapperStyleSwitch({
        theme,
        colorScheme,
        isLean,
        hasError,
        isDisabled: Boolean(isDisabled || isLocked),
      }),
      ...sx?.wrapper,
    });
  };

export const textFieldStyle =
  ({ isLean, sx }: Props) =>
  (theme: Theme): SerializedStyles => {
    return css({
      position: 'relative',
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      verticalAlign: 'top',
      width: 'fill-available',
      padding: !isLean ? `0 ${theme.spacing.get('6')}` : '',

      '> div': {
        position: 'relative',
      },

      ...sx?.textField,
    });
  };

export const inputStyle =
  ({ label, placeholder, size = DEFAULT_SIZE, isDark, sx }: Props) =>
  (theme: Theme): SerializedStyles =>
    css({
      background: 'transparent',
      border: 'none',
      color:
        theme.colorScheme === 'dark' || isDark
          ? theme.palette.white
          : theme.utils.getColor('darkGrey', 850),
      display: 'block',
      position: 'relative',
      top: label ? rem(7) : undefined,
      zIndex: 1,
      fontSize: theme.typography.fontSizes[size === 'md' ? '15' : '13'],
      textOverflow: 'ellipsis',
      width: 0,
      minWidth: '100%',

      '& + label': {
        fontSize: theme.typography.fontSizes[size === 'md' ? '15' : '13'],
      },

      '&:focus': {
        outline: 'none',
      },

      '&::placeholder': {
        color: !label && placeholder ? theme.utils.getColor('lightGrey', 650) : 'transparent',
      },

      '&:not(:focus):placeholder-shown': {
        '& + label': {
          fontWeight: 'normal',
        },
      },

      '&:focus, &:not(:placeholder-shown)': {
        '& + label': {
          transform: `translate(${LABEL_TRANSFORM_LEFT_SPACING}, -35%) scale(0.8)`,
          fontWeight: theme.typography.weights.get('bold'),
        },
      },

      '&:disabled': {
        cursor: 'not-allowed',
      },
      ...sx?.input,
    });

export const errorMsgStyle =
  ({ status }: Props) =>
  (theme: Theme): SerializedStyles =>
    css({
      display: 'flex',
      color:
        status === 'error'
          ? theme.utils.getColor('error', 550, 'normal')
          : theme.utils.getColor('lightGrey', 650),
      fontSize: theme.typography.fontSizes.get('2'),
      lineHeight: 1,
      padding: `${rem(8)} 0 0`,
      svg: {
        padding: `0 ${rem(2)}`,
      },

      span: {
        alignItems: 'stretch',
        padding: `0 ${rem(2)}`,
      },
    });
