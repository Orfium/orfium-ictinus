import { Theme } from 'theme';
import { css, SerializedStyles } from '@emotion/core';
import { Props } from './TextField';
import { rem, transparentize } from 'polished';

export const wrapperStyle = ({ label, error, disabled }: Props) => (
  theme: Theme
): SerializedStyles => css`
  transition: background-color 0.25s, border 0.25s;
  background-color: ${error ? transparentize(0.85, theme.palette.error) : theme.palette.gray};
  padding: ${label ? rem(24) : rem(18.5)} ${rem(12)} ${label ? theme.spacing.sm : rem(18.5)};
  border-radius: ${theme.spacing.xsm};
  border: ${error ? `1px solid ${theme.palette.error}` : 'none'};
  cursor: ${disabled ? 'not-allowed' : 'auto'};
  user-select: none;
  position: relative;
`;

export const textFieldStyle = () => (theme: Theme): SerializedStyles => css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  vertical-align: top;

  > img {
    margin-right: ${rem(5)};
  }
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
