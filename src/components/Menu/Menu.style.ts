import { css } from '@emotion/core';
import { darken, rem } from 'polished';
import { Theme } from '../../theme';
import { RequiredProperties } from '../../utils/common';
import { Props } from '../Button/Button';

export const wrapperStyle = () => () => css`
  position: relative;
  display: inline-block;
`;

export const buttonSpanStyle = ({
  size,
  iconLeft,
  iconRight,
  hasChildren,
}: RequiredProperties<Props & { hasChildren: boolean }>) => (theme: Theme) => ({
  display: iconLeft || iconRight ? 'flex' : 'block',
  flexDirection: iconLeft || iconRight ? 'row' : 'column',
  alignItems: iconLeft || iconRight ? ('center' as const) : ('flex-start' as const),
  '> :first-child': {
    marginLeft: iconLeft || iconRight ? (size === 'sm' ? theme.spacing.sm : theme.spacing.md) : 0,
    marginRight: hasChildren ? theme.spacing.sm : 0,
  },
});

export type MenuPositionAllowed = 'left' | 'right';

export type MenuOptions = {
  menuPosition?: MenuPositionAllowed;
};

export const optionsStyle = ({ menuPosition }: MenuOptions) => (theme: Theme) => css`
  max-height: 400px;
  overflow-y: auto;
  position: absolute;
  top: ${rem(48)};
  left: ${menuPosition === 'left' ? 0 : 'initial'};
  right: 0;
  width: ${rem(148)};
  height: auto;
  background-color: ${theme.palette.white};
  box-shadow: ${theme.elevation['02']};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  border-radius: ${rem(4)};
  z-index: 1;
  & > button {
    padding: ${rem(8)} 0;
    height: ${rem(48)};
    margin-left: 0;
    font-size: ${theme.typography.fontSizes['14']};
  }

  & > button:hover {
    background-color: ${darken(0.05, theme.palette.white)};
  }
`;
