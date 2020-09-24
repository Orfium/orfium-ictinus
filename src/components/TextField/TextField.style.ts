import { css, SerializedStyles } from '@emotion/core';
import { rem } from 'polished';
import { Props } from './TextField';
import { Theme } from '../../theme';

// @todo replace all hex colors with palette colors

const wrapperStyleSwitch = (theme: Theme, lean?: boolean, error?: boolean, styleType?: string) => {
  if (lean) {
    return `
      background-color: transparent;
      box-shadow: inset 0 0 0 1px transparent;
    `;
  }

  switch (styleType) {
    case 'outlined':
      return `
        background-color: white;
        box-shadow: inset 0 0 0 1px
          ${error ? theme.palette.error[400] : '#dfdfdf'};
        
         &:focus-within {
          box-shadow: inset 0 0 0 1px
              ${error ? theme.palette.error[400] : '#dfdfdf'},
            0px 2px 6px 0px #ebeeee;
        }
      `;
    case 'elevated':
      return `
        background-color: white;
        box-shadow: ${error ? `inset 0 0 0 1px ${theme.palette.error[400]},` : ''}
          0px 2px 6px 0px #ebeeee;
        
        &:focus-within {
          box-shadow: ${error ? `inset 0 0 0 1px ${theme.palette.error[400]},` : ''}
            0px 6px 16px 0px #ebeeee;
        }
      `;
    case 'filled':
    default:
      return `
        background-color: ${error ? '#fdf2f2' : theme.palette.flat.lightGray[100]};
        box-shadow: inset 0 0 0 1px ${
          error ? theme.palette.error[400] : theme.palette.flat.lightGray[100]
        };
        
        &:focus-within {
          box-shadow: inset 0 0 0 1px ${
            error ? theme.palette.error[400] : theme.palette.flat.lightGray[100]
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
export const wrapperStyle = ({ disabled, error, lean, styleType }: Props) => (
  theme: Theme
): SerializedStyles => css`
  transition: background-color 0.25s, box-shadow 0.25s;
  border-radius: ${theme.spacing.xsm};
  cursor: ${disabled ? 'not-allowed' : 'auto'};
  flex: 1 1 100%;
  user-select: none;
  position: relative;

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

export const textFieldStyle = ({ label, leftIcon }: Props) => (
  theme: Theme
): SerializedStyles => css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  vertical-align: top;
  margin: ${label ? rem(24) : rem(18.5)} ${rem(12)} ${label ? theme.spacing.sm : rem(18.5)};
  width: fill-available;

  label {
    left: ${leftIcon ? '1.9rem' : 'inherit'};
  }
`;

export const iconWrapperStyle = ({ label, rightIcon }: Props) => (
  theme: Theme
): SerializedStyles => css`
  margin-top: ${label ? '-' + theme.spacing.md : 0};
  margin-right: ${!rightIcon ? rem(5) : 0};
  margin-left: ${rightIcon ? rem(12) : 'inherit'};
`;

export const inputStyle = ({ label, placeholder }: Props) => (
  theme: Theme
): SerializedStyles => css`
  background: transparent;
  border: none;
  color: #232323;
  display: block;
  padding-top: ${label ? rem(5) : 0};
  position: relative;
  width: 100%;
  z-index: 2000;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${!label && placeholder ? theme.palette.flat.lightGray[500] : 'transparent'};
  }

  &:not(:focus):placeholder-shown {
    & + label {
      font-weight: normal;
    }
  }

  &:focus,
  &:not(:placeholder-shown) {
    & + label {
      transform: translate(1%, -65%) scale(0.8);
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const errorMsgStyle = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  align-items: center;
  color: ${theme.palette.error[400]};
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
