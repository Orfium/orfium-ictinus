import { darken, rem } from 'polished';
import { Theme } from 'theme';
import { css, SerializedStyles } from '@emotion/react';
import { flexCenter, flexCenterVertical, transition } from 'theme/functions';
import { backgroundPickerBasedOnType } from 'utils/themeFunctions';

export const navigationContainerStyle = (expanded: boolean) => (
  theme: Theme
): SerializedStyles => css`
  ${transition(10.2)};
  width: 100%;
  background-color: white;
  height: 100%;
  padding: ${rem(24)} 0;
  box-sizing: border-box;

  .menu-item-text,
  .submenu-item-text {
    opacity: ${expanded ? 1 : 0};
    width: ${expanded ? rem(204) : rem(16)};
    white-space: nowrap;
  }

  #submenu-item-link {
    padding-left: ${expanded ? 'auto' : rem(40)};
  }
`;

const itemStyle = (theme: Theme): SerializedStyles => css`
  ${flexCenterVertical};
  height: ${rem(44)};
  color: ${theme.palette.black};
  cursor: default;
`;

export const menuItemStyle = () => (theme: Theme): SerializedStyles => css`
  ${itemStyle(theme)};
  font-size: ${rem(16)};
  font-weight: ${theme.typography.weights.regular};
  padding: 0 ${theme.spacing.md};

  &:hover {
    background-color: ${theme.utils.getColor('lightGray', 100)};
  }
`;

export const menuLinkStyle = () => (theme: Theme): SerializedStyles => css`
  ${menuItemStyle()(theme)};
  text-decoration: none;
`;

export const menuItemTextStyle = (current: boolean) => (theme: Theme): SerializedStyles => css`
  ${transition(0.2)};
  font-weight: ${current ? theme.typography.weights.bold : 'initial'};
`;

export const subMenuLinkStyle = () => (theme: Theme): SerializedStyles => css`
  ${itemStyle(theme)};
  ${transition(0.2)};
  box-sizing: border-box;
  font-size: ${theme.typography.fontSizes['14']};
  color: ${theme.utils.getColor('lightGray', 600)};
  margin: ${theme.spacing.xsm} 0 ${theme.spacing.xsm} 0;
  padding-left: ${rem(72)};

  &.active,
  &:hover {
    background-color: ${theme.utils.getColor('lightGray', 100)} !important;
  }
  &.active {
    font-weight: ${theme.typography.weights.bold};
    background-color: ${darken(0.03, theme.utils.getColor('lightGray', 100))};
    color: ${theme.palette.black};

    path {
      fill: ${theme.utils.getColor('primary', 400, 'normal')} !important;
    }
  }
  text-decoration: none;
`;

export const arrowContainerStyle = (open: boolean, show: boolean) => (
  theme: Theme
): SerializedStyles => css`
  ${transition(0.2)};
  ${flexCenter};
  width: ${rem(24)};
  height: ${rem(24)};
  opacity: ${show ? '1' : '0'};
  transform: ${open ? 'rotate(90deg)' : 'rotate(0deg);'};
  path {
    background-color: ${theme.utils.getColor('lightGray', 600)};
  }
`;

export const menuIconStyle = (current: boolean) => (theme: Theme): SerializedStyles => css`
  ${transition(0.2)};
  ${flexCenter};
  margin-right: ${theme.spacing.sm};
  width: ${rem(32)};
  height: ${rem(32)};
  border-radius: 50%;
  ${current ? `background-color: ${backgroundPickerBasedOnType('primary')(theme)}; ` : ''}
`;

export const subMenuIconStyle = () => (theme: Theme): SerializedStyles => css`
  ${flexCenter};
  width: ${rem(32)};
  height: ${rem(32)};
  margin-right: ${theme.spacing.sm};
`;
