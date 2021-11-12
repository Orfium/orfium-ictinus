import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';
import { DEFAULT_SIZE, getTextFieldSize } from 'utils/size-utils';

import { Props } from './TextInputBase';
import { LABEL_TRANSFORM_LEFT_SPACING } from 'components/Label/Label.style';

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
        box-shadow: 0 0 0 ${rem(1)}
          ${error ? 'transparent' : theme.utils.getColor('lightGrey', 200)};
        &:focus-within, &:hover {
          box-shadow: 0 0 0 ${rem(1)} ${
        !disabled ? 'transparent' : theme.utils.getColor('lightGrey', 200)
      };
        }
      `;
    case 'elevated':
      return `
        box-shadow: ${disabled ? 'initial' : theme.elevation['01']};
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
export const wrapperStyle = ({
  disabled,
  locked,
  status,
  lean,
  styleType,
  dark,
  isSearch,
  rightIcon,
  size,
}: Props) => (theme: Theme): SerializedStyles => {
  const error = status === 'error';
  const backgroundColor = dark ? theme.utils.getColor('darkGrey', 750) : theme.palette.white;

  return css`
    transition: background-color 0.25s, box-shadow 0.25s, border-color 0.25s;
    border-radius: ${isSearch ? rem(100) : theme.spacing.xsm};
    cursor: ${disabled || locked ? 'not-allowed' : 'auto'};
    flex: 1 1 100%;
    user-select: none;
    position: relative;
    background-color: ${lean ? 'transparent' : backgroundColor};
    opacity: ${disabled && 0.5};
    border: ${rem(2)} solid transparent;
    ${wrapperStyleSwitch(theme, lean, error, styleType, Boolean(disabled || locked))}
    border-color: ${error ? theme.utils.getColor('error', 550, 'normal') : undefined};

    /** This is added to prevent the field from growing/shrinking when the Clear icon shows/hides. 
        The values used are the minimum widths of this field */ 
    ${isSearch &&
      Boolean(rightIcon) &&
      `&{
      min-width: ${size === 'sm' ? rem(286) : rem(264)}
      }`}
    
    
    ${!lean &&
      !disabled &&
      !locked &&
      `&:hover {
      background-color: ${theme.utils.getColor('lightGrey', 50)} !important;
      border-color: ${styleType === 'outlined' && !error && theme.utils.getColor('lightGrey', 200)};
      box-shadow: ${styleType === 'elevated' && theme.elevation['02']};
    }
    `}

    &:focus-within {
      border-color: ${!lean &&
        !error &&
        (isSearch ? theme.utils.getColor('blue', 550) : theme.utils.getColor('lightGrey', 200))};
      box-shadow: ${styleType === 'elevated' && theme.elevation['02']};
      background-color: ${
        isSearch ? theme.utils.getColor('blue', null, 'pale') : theme.palette.white
      };
    }

    ${(disabled || locked) &&
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
      > input, > textarea {
        color: ${theme.utils.getColor('lightGrey', 750)};
        fill: ${theme.utils.getColor('lightGrey', 750)};
      }
  `}
  `;
};

export const textFieldStyle = ({ size = DEFAULT_SIZE, label = '', leftIcon, lean }: Props) => (
  theme: Theme
): SerializedStyles => {
  return css`
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    vertical-align: top;
    width: fill-available;
    ${!lean && getTextFieldSize(theme, label, Boolean(leftIcon))[size]}

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
  width: 100%;
  z-index: 1;
  font-size: ${theme.typography.fontSizes[size === 'md' ? '16' : '14']};
  text-overflow: ellipsis;

  & + label {
    font-size: ${theme.typography.fontSizes[size === 'md' ? '16' : '14']};
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${!label && placeholder ? theme.utils.getColor('lightGrey', 750) : 'transparent'};
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
