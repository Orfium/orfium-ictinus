import { Theme } from 'src/theme';
import { css } from '@emotion/core';
import { Props } from './TextField';
import { rem, transparentize } from 'polished';

export const wrapperStyle = ({ label, error, disabled }: Props) => (theme: Theme) => css`
  transition: background-color 0.25s, border 0.25s;
  background-color: ${error ? transparentize(0.85, theme.palette.error) : theme.palette.gray};
  padding: ${label ? rem(19) : rem(12)} ${rem(12)} ${label ? theme.spacing.sm : rem(12)};
  border-radius: ${theme.spacing.xsm};
  border: ${error ? `1px solid ${theme.palette.error}` : 'none'};
  cursor: ${disabled ? 'not-allowed' : 'auto'};
  user-select: none;
`;

export const textFieldStyle = () => (theme: Theme) => css`
  display: inline-flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  vertical-align: top;
  position: relative;

  > img {
    margin-right: ${rem(5)};
  }
`;

export const inputStyle = ({ label, placeholder }: Props) => (theme: Theme) => css`
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
    color: ${!label && placeholder ? theme.palette.gray100 : 'transparent'};
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

export const labelStyle = () => (theme: Theme) => css`
  transition: transform 0.25s, opacity 0.25s ease-in-out;
  transform-origin: 0 0;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
  z-index: 1500;
  transform: translate(1%, 0);
  font-size: ${theme.typography.fontSizes['14']};
  font-weight: ${theme.typography.weights.black};
  color: ${theme.palette.gray100};
`;
