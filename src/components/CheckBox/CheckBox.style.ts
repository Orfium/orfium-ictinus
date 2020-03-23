import { Theme } from 'src/theme';
import { css } from '@emotion/core';
import { Props } from './CheckBox';
import { rem, transparentize } from 'polished';

export const wrapperStyle = ({ disabled }: Props) => (theme: Theme) => css`
  opacity: ${disabled ? 0.3 : 1};
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const checkboxWrapperStyle = (hovered: boolean) => (theme: Theme) => css`
  border-radius: 100%;
  width: ${rem(50)};
  height: ${rem(50)};
  background: ${hovered && transparentize(0.7, theme.palette.gray50)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const checkboxStyle = ({ multi, checked }: Props) => (theme: Theme) => css`
  background: ${checked
    ? multi
      ? theme.palette.gray200
      : theme.palette.brand1
    : theme.palette.gray50};
  border: 0;
  border-radius: 2px;
  width: ${rem(26)};
  height: ${rem(26)};

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: inherit;
  }
`;

export const labelStyle = () => (theme: Theme) => css`
  padding-left: ${rem(4)};
  font-size: ${theme.typography.fontSizes['15']};
  font-weight: ${theme.typography.weights.regular};
  color: ${theme.palette.gray300};
`;
