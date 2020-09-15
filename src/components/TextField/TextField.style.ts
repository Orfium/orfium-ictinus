import { Theme } from 'theme';
import { css, SerializedStyles } from '@emotion/core';
import { Props } from './TextField';
import { rem, transparentize } from 'polished';

/**
 * this wrapper must remain simple and not mess with children properties as it will be used
 * if custom implementation needed eg: datepicker
 * */
export const wrapperStyle = ({ error, disabled, lean }: Props) => (
  theme: Theme
): SerializedStyles => css`
  transition: background-color 0.25s, border 0.25s;
  background-color: ${lean ? 'transparent' : theme.palette.flat.lightGray[200]};
  border-radius: ${theme.spacing.xsm};
  border: ${error ? `1px solid ${theme.palette.error[400]}` : 'none'};
  cursor: ${disabled ? 'not-allowed' : 'auto'};
  user-select: none;
  position: relative;

  &:before {
    background-color: ${error ? transparentize(0.85, theme.palette.error[400]) : 'transparent'};
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export const textFieldStyle = ({ label, leftIcon }: Props) => (
  theme: Theme
): SerializedStyles => css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  vertical-align: top;
  margin: ${label ? rem(24) : rem(18.5)} ${rem(12)} ${label ? theme.spacing.sm : rem(18.5)};

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
  display: block;
  width: 100%;
  position: relative;
  z-index: 2000;
  border: none;
  background: transparent;
  padding-top: ${label ? rem(5) : 0};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${!label && placeholder ? theme.palette.flat.lightGray[700] : 'transparent'};
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
  color: ${theme.palette.error};
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
