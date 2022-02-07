import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';
import { DEFAULT_SIZE, getTextFieldPadding, getTextFieldSize } from 'utils/size-utils';

import { getDisabled, getHover, getPressed } from '../../theme/states';
import { textInputConfig } from './config';
import { Props } from './TextInputBase';
import { LABEL_TRANSFORM_LEFT_SPACING } from 'components/Label/Label.style';

const borderConfig = textInputConfig.types.outlined.border;

const wrapperStyleSwitch = (
  theme: Theme,
  dark?: boolean,
  lean?: boolean,
  error?: boolean,
  disabled?: boolean
) => {
  if (lean) {
    return {
      backgroundColor: 'transparent',
    };
  }

  const backgroundColor = dark ? theme.utils.getColor('darkGrey', 750) : theme.palette.white;
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
  isSearch,
  isTextArea,
  size,
}: Props) => (theme: Theme): SerializedStyles => {
  const error = status === 'error';
  const textFieldSize = !(lean || isTextArea) ? getTextFieldSize(size) : getTextFieldSize();

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
    borderRadius: isSearch ? rem(100) : theme.spacing.xsm,
    flex: '1 1 100%',
    userSelect: 'none',
    opacity: disabled ? getDisabled().opacity : 1,
    cursor: disabled || locked ? getDisabled().cursor : 'auto',
    ...textFieldSize,
    ...wrapperStyleSwitch(theme, dark, lean, error, Boolean(disabled || locked)),
  });
};

export const textFieldStyle = ({ lean, isTextArea }: Props) => (theme: Theme): SerializedStyles => {
  return css`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    vertical-align: top;
    width: fill-available;
    ${!lean && `${getTextFieldPadding(theme, isTextArea)};`}

    > div {
      position: relative;
    }
  `;
};

export const inputStyle = ({ label, placeholder, size, dark }: Props) => (
  theme: Theme
): SerializedStyles => css`
  background: transparent;
  border: none;
  color: ${dark ? theme.palette.white : theme.utils.getColor('darkGrey', 850)};
  display: block;
  position: relative;
  top: ${label && rem(7)};
  z-index: 1;
  font-size: ${theme.typography.fontSizes[size === 'md' ? '15' : '13']};
  text-overflow: ellipsis;

  & + label {
    font-size: ${theme.typography.fontSizes[size === 'md' ? '15' : '13']};
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${!label && placeholder ? theme.utils.getColor('lightGrey', 650) : 'transparent'};
  }

  &:not(:focus):placeholder-shown {
    & + label {
      font-weight: normal;
    }
  }

  &:focus,
  &:not(:placeholder-shown) {
    & + label {
      transform: translate(${LABEL_TRANSFORM_LEFT_SPACING}, -35%) scale(0.8);
      font-weight: ${theme.typography.weights.bold};
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const errorMsgStyle = ({ status }: Props) => (theme: Theme): SerializedStyles => css`
  display: flex;
  color: ${status === 'error'
    ? theme.utils.getColor('error', 550, 'normal')
    : theme.utils.getColor('lightGrey', 650)};
  font-size: ${theme.typography.fontSizes['12']};
  line-height: 1;
  padding: ${rem(8)} 0 0;
  svg {
    padding: 0 ${rem(2)};
  }

  span {
    align-items: stretch;
    padding: 0 ${rem(2)};
  }
`;
