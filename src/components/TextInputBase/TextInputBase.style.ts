import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';
import { DEFAULT_SIZE, getTextFieldSize } from 'utils/size-utils';

import { getDisabled, getHover, getPressed } from '../../theme/states';
import { ColorScheme } from '../../theme/types';
import { textInputConfig } from './config';
import { Props } from './TextInputBase';
import { LABEL_TRANSFORM_LEFT_SPACING } from 'components/Label/Label.style';

const wrapperStyleSwitch = (
  theme: Theme,
  colorScheme: ColorScheme = 'light',
  lean?: boolean,
  error?: boolean,
  disabled?: boolean
) => {
  if (lean) {
    return {
      backgroundColor: 'transparent',
    };
  }
  const borderConfig = textInputConfig.types[colorScheme].outlined.border;

  const backgroundColor =
    colorScheme === 'dark' ? theme.utils.getColor('darkGrey', 700) : theme.palette.white;
  const borderColorName = !error ? borderConfig.color.pressed.name : borderConfig.color.error.name;
  const borderColorShade = !error
    ? borderConfig.color.pressed.shade
    : borderConfig.color.error.shade;

  const events = disabled
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
export const wrapperStyle = ({
  disabled,
  locked,
  status,
  lean,
  dark,
  size,
  sx,
  hasMinWidthCompat,
}: Props) => (theme: Theme): SerializedStyles => {
  const colorScheme = dark ? 'dark' : theme.colorScheme;
  const error = status === 'error';
  const textFieldSize = !lean
    ? getTextFieldSize(hasMinWidthCompat, size)
    : getTextFieldSize(hasMinWidthCompat);
  const borderConfig = textInputConfig.types[colorScheme].outlined.border;

  return css({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    transition: `background-color 0.25s, box-shadow 0.25s, border-color 0.25s`,
    boxShadow: `0 0 0 ${rem(borderConfig.width)} ${
      error
        ? theme.utils.getColor(borderConfig.color.error.name, borderConfig.color.error.shade)
        : theme.utils.getColor(borderConfig.color.default.name, borderConfig.color.default.shade)
    }`,
    borderRadius: theme.spacing.xsm,
    userSelect: 'none',
    opacity: disabled ? getDisabled().opacity : 1,
    cursor: disabled || locked ? getDisabled().cursor : 'auto',
    ...textFieldSize,
    ...wrapperStyleSwitch(theme, colorScheme, lean, error, Boolean(disabled || locked)),
    ...sx?.wrapper,
  });
};

export const textFieldStyle = ({ lean, sx }: Props) => (theme: Theme): SerializedStyles => {
  return css({
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    verticalAlign: 'top',
    width: 'fill-available',
    padding: !lean ? `0 ${theme.spacing.md}` : '',

    '> div': {
      position: 'relative',
    },

    ...sx?.textField,
  });
};

export const inputStyle = ({ label, placeholder, size = DEFAULT_SIZE, dark, sx }: Props) => (
  theme: Theme
): SerializedStyles =>
  css({
    background: 'transparent',
    border: 'none',
    color:
      theme.colorScheme === 'dark' || dark
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
        fontWeight: theme.typography.weights.bold,
      },
    },

    '&:disabled': {
      cursor: 'not-allowed',
    },
    ...sx?.input,
  });

export const errorMsgStyle = ({ status }: Props) => (theme: Theme): SerializedStyles =>
  css({
    display: 'flex',
    color:
      status === 'error'
        ? theme.utils.getColor('error', 550, 'normal')
        : theme.utils.getColor('lightGrey', 650),
    fontSize: theme.typography.fontSizes['12'],
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
