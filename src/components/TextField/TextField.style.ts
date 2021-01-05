import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';
import { Props } from './TextField';
import { Theme } from '../../theme';
import { getTextFieldSize, DEFAULT_SIZE } from '../../utils/size-utils';
import { colorShades, flatColors, pickTextColorFromSwatches } from '../../theme/palette';

type ColorConfig = {
  fill: typeof flatColors[number];
  fillShade: typeof colorShades[number];
};

type GeneratedTextFieldColors = {
  backgroundColor: (theme: Theme, lean?: boolean, error?: boolean) => string;
  color: () => string;
};

export type TextFieldColors = { textFieldColors?: GeneratedTextFieldColors };

export const DEFAULT_COLOR_CONFIG: ColorConfig = {
  fill: 'lightGray',
  fillShade: 100,
};

export const generateTextFieldColors: (colorConfig?: ColorConfig) => GeneratedTextFieldColors = (
  colorConfig = DEFAULT_COLOR_CONFIG
) => {
  const { fill, fillShade } = colorConfig;

  return {
    color: () => pickTextColorFromSwatches(fill, fillShade),
    backgroundColor: (theme, lean, error) =>
      lean
        ? 'transparent'
        : error
        ? theme.palette.error[fillShade]
        : theme.utils.getColor(fill, fillShade),
  };
};

// @todo replace all hex colors with palette colors
const wrapperStyleSwitch = (theme: Theme, lean?: boolean, error?: boolean, styleType?: string) => {
  if (lean) {
    return `
      box-shadow: inset 0 0 0 1px transparent;
    `;
  }

  switch (styleType) {
    case 'outlined':
      return `
        box-shadow: inset 0 0 0 1px
          ${error ? theme.utils.getColor('error', 400, 'normal') : '#dfdfdf'};
        
         &:focus-within {
          box-shadow: inset 0 0 0 1px
              ${error ? theme.utils.getColor('error', 400, 'normal') : '#dfdfdf'},
            0px 2px 6px 0px #ebeeee;
        }
      `;
    case 'elevated':
      return `
        box-shadow: ${
          error ? `inset 0 0 0 1px ${theme.utils.getColor('error', 400, 'normal')},` : ''
        }
          0px 2px 6px 0px #ebeeee;
        
        &:focus-within {
          box-shadow: ${
            error ? `inset 0 0 0 1px ${theme.utils.getColor('error', 400, 'normal')},` : ''
          }
            0px 6px 16px 0px #ebeeee;
        }
      `;
    case 'filled':
    default:
      return `
        box-shadow: inset 0 0 0 1px ${
          error ? theme.utils.getColor('error', 400, 'normal') : 'transparent'
        };
        
        &:focus-within {
          box-shadow: inset 0 0 0 1px ${
            error ? theme.utils.getColor('error', 400, 'normal') : 'transparent'
          },
            0px 2px 6px 0px rgba(67, 67, 67, 0.15);
        }
      `;
  }
};
/**
 * this wrapper must remain simple and not mess with children properties as it will be used
 * in custom implementation needed eg: datepicker
 * */
export const wrapperStyle = ({
  textFieldColors,
  disabled,
  error,
  lean,
  styleType,
}: Props & TextFieldColors) => (theme: Theme): SerializedStyles => css`
  transition: background-color 0.25s, box-shadow 0.25s;
  border-radius: ${theme.spacing.xsm};
  cursor: ${disabled ? 'not-allowed' : 'auto'};
  flex: 1 1 100%;
  user-select: none;
  position: relative;
  background-color: ${textFieldColors?.backgroundColor(theme, lean, error)};
  ${wrapperStyleSwitch(theme, lean, error, styleType)}

  ${disabled &&
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
  `}
`;

export const textFieldStyle = ({ size = DEFAULT_SIZE, label = '', leftIcon }: Props) => (
  theme: Theme
): SerializedStyles => {
  return css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    vertical-align: top;
    width: fill-available;
    ${getTextFieldSize(theme, label, Boolean(leftIcon))[size]}
  `;
};

export const iconWrapperStyle = ({ textFieldColors, rightIcon }: Props & TextFieldColors) => (
  theme: Theme
): SerializedStyles => css`
  color: ${textFieldColors?.color()};
  line-height: 0.8;
  margin-right: ${!rightIcon ? theme.spacing.xsm : 0};
  margin-left: ${rightIcon ? theme.spacing.md : 'inherit'};
`;

export const inputStyle = ({ textFieldColors, label, placeholder }: Props & TextFieldColors) => (
  theme: Theme
): SerializedStyles => css`
  background: transparent;
  border: none;
  color: ${textFieldColors?.color()};
  display: block;
  position: relative;
  width: 100%;
  z-index: 2000;

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
      transform: translate(1%, -95%) scale(0.8);
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
  padding: ${rem(8)} 0 0 ${rem(8)};
  svg {
    padding: 0 ${rem(2)};
  }
`;

export const indicatorStyle = (): SerializedStyles => css`
  display: inline-flex;
  padding-left: ${rem(16)};
  position: absolute;
  left: 100%;
`;
