import { css } from '@emotion/react';
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
  min-width: ${rem(150)};
  width: 100%;
  height: auto;
  background-color: ${theme.palette.white};
  box-shadow: ${theme.elevation['02']};
  border-radius: ${rem(4)};
  z-index: 1;
  & > button {
    padding: ${rem(8)} ${rem(16)};
    height: ${rem(48)};
    font-size: ${theme.typography.fontSizes['14']};
    display: block;
    width: 100%;
    text-align: left;
  }

  & > button:hover {
    background-color: ${darken(0.05, theme.palette.white)};
  }
`;
