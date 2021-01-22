import { css, SerializedStyles } from '@emotion/core';
import { darken } from 'polished';
import { Theme } from '../../theme';
import { Props } from '../TextField/TextField';

export const optionStyle = ({ selected }: { selected: boolean }) => (
  theme: Theme
): SerializedStyles => css`
  padding: ${theme.spacing.md};
  font-size: ${theme.typography.fontSizes['14']};
  background-color: ${selected ? darken(0.07, theme.palette.white) : theme.palette.white};
  //cursor: default;

  &:hover {
    background-color: ${darken(0.03, theme.palette.white)};
  }
`;
export const menuStyle = ({ status }: Props) => (theme: Theme): SerializedStyles => css`
  background-color: ${theme.palette.white};
  border-radius: 4px;
  box-shadow: ${theme.elevation['02']};
  margin-top: ${status !== 'normal' ? -15 : 7}px;
  z-index: 500;
  position: relative;
`;
