import { css, SerializedStyles } from '@emotion/core';
import { darken, lighten, rem } from 'polished';
import { Props } from './TextField';
import { Theme } from '../../theme';
import { getTextFieldSize, DEFAULT_SIZE } from '../../utils/size-utils';

const wrapperStyleSwitch = (
  theme: Theme,
  lean?: boolean,
  error?: boolean,
  styleType?: string,
  disabled?: boolean
) => {
  if (lean) {
    return `
    `;
  }

  switch (styleType) {
    case 'outlined':
      return `
        box-shadow: 0 0 0 1px
          ${theme.utils.getColor('lightGray', 400)};
        &:focus-within, &:hover {
          box-shadow: 0 0 0 1px ${
            !disabled ? 'transparent' : theme.utils.getColor('lightGray', 400)
          };
        }
      `;
    case 'elevated':
      return `
        box-shadow: ${theme.elevation['01']};
      `;
    case 'filled':
    default:
      return ``;
  }
};
/**
 * this wrapper must remain simple and not mess with children properties as it will be used
 * in custom implementation needed eg: datepicker
 * */
export const wrapperStyle = ({ disabled, locked, error, lean, styleType, dark }: Props) => (
  theme: Theme
): SerializedStyles => {
  const backgroundColor = dark ? theme.utils.getColor('darkGray', 600) : theme.palette.white;

  return css`
    transition: background-color 0.25s, box-shadow 0.25s, border-color 0.25s;
    border-radius: ${theme.spacing.xsm};
    cursor: ${disabled || locked ? 'not-allowed' : 'auto'};
    flex: 1 1 100%;
    user-select: none;
    position: relative;
    background-color: ${backgroundColor};
    opacity: ${disabled && 0.5};
    border: 2px solid transparent;
    ${wrapperStyleSwitch(theme, lean, error, styleType, Boolean(disabled || locked))}
    border-color: ${error ? theme.utils.getColor('error', 400, 'normal') : undefined};

    ${!disabled &&
      !locked &&
      `&:hover {
      background-color: ${styleType === 'filled' &&
        (dark ? lighten(0.1, backgroundColor) : darken(0.1, backgroundColor))};
      border-color: ${styleType === 'outlined' && !error && theme.utils.getColor('lightGray', 400)};
      box-shadow: ${styleType === 'elevated' && theme.elevation['02']};
    }`}

  &:focus-within {
      border-color: ${!error && theme.utils.getColor('lightGray', 500)};
      box-shadow: ${styleType === 'elevated' && theme.elevation['02']};
    }

    ${disabled ||
      (locked &&
        `
      &:before {
        content: '';
        background-color: rgba(255, 255, 255, 0.15);
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
      * {
        color: ${theme.utils.getColor('lightGray', 600)} !important;
        fill: ${theme.utils.getColor('lightGray', 600)} !important;
      }
  `)}
  `;
};

export const textFieldStyle = ({ size = DEFAULT_SIZE, label = '', leftIcon }: Props) => (
  theme: Theme
): SerializedStyles => {
  return css`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    vertical-align: top;
    width: fill-available;
    ${getTextFieldSize(theme, label, Boolean(leftIcon))[size]}

    > div {
      position: relative;
    }
  `;
};

export const iconWrapperStyle = ({ rightIcon, leftIcon }: Props) => (
  theme: Theme
): SerializedStyles => css`
  line-height: 0.8;
  margin-left: ${leftIcon ? theme.spacing.xsm : 'inherit'};
  margin-right: ${rightIcon ? theme.spacing.xsm : 0};
`;

export const inputStyle = ({ label, placeholder, size, dark }: Props) => (
  theme: Theme
): SerializedStyles => css`
  background: transparent;
  border: none;
  color: ${dark ? theme.palette.white : theme.palette.black};
  display: block;
  position: relative;
  top: ${label && '7px'};
  width: 100%;
  z-index: 2000;
  font-size: ${theme.typography.fontSizes[size === 'md' ? '16' : '14']};

  & + label {
    font-size: ${theme.typography.fontSizes[size === 'md' ? '16' : '14']};
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${!label && placeholder ? theme.utils.getColor('lightGray', 500) : 'transparent'};
  }

  &:not(:focus):placeholder-shown {
    & + label {
      font-weight: normal;
    }
  }

  &:focus,
  &:not(:placeholder-shown) {
    & + label {
      transform: translate(1%, -35%) scale(0.8);
      font-weight: ${theme.typography.weights.black};
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const errorMsgStyle = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  align-items: center;
  color: ${theme.utils.getColor('error', 400, 'normal')};
  font-size: ${theme.typography.fontSizes['12']};
  line-height: 1;
  padding: ${rem(8)} 0 0;
  svg {
    padding: 0 ${rem(2)};
  }
`;
