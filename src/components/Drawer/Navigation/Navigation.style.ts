import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { flexCenter, flexCenterVertical, transition } from 'theme/functions';
import { BASE_SHADE } from 'theme/palette';
import { rem } from 'theme/utils';
import { fillPickerBasedOnType } from 'utils/themeFunctions';

import { getFocus, getHover } from '../../../theme/states';

const ICON_PADDING = 39;

//TODO The whole logic and styling here is off compared to the designs and needs to be changed in the next version.

export const navigationContainerStyle = (expanded: boolean) => (): SerializedStyles => css`
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
`;

const itemStyle = (theme: Theme): SerializedStyles => css`
  ${flexCenterVertical};
  height: ${rem(44)};
  color: ${theme.utils.getColor('darkGrey', 850)};
  cursor: default;
`;

const menuStateStyles = (theme: Theme): SerializedStyles => css`
  &:hover {
    background-color: ${getHover({ theme }).backgroundColor}; !important;
  }
  &.active:hover {
    background-color: ${theme.utils.getColor('primary', 100, 'normal')} !important;
  }
  &.active  {
    font-weight: ${theme.typography.weights.bold};
    background-color: ${theme.utils.getColor('primary', 50, 'normal')} !important;
    color: ${theme.utils.getColor('primary', BASE_SHADE, 'normal')};

    path {
      fill: ${theme.utils.getColor('primary', BASE_SHADE, 'normal')} !important;
    }
  }

  &:focus-visible {
    outline: ${getFocus({ theme }).styleOutline};
  }
`;

export const menuItemStyle = (isCurrent?: boolean) => (theme: Theme): SerializedStyles => css`
  ${itemStyle(theme)};
  ${transition(0.2, 'background-color')};
  color: ${isCurrent ? theme.utils.getColor('primary', BASE_SHADE, 'normal') : ''};
  width: 100%;
  font-size: ${rem(16)};
  font-weight: ${theme.typography.weights.regular};
  padding: 0 ${theme.spacing.md};
  background: transparent;
  border: 0 solid transparent;
  display: flex;
  text-align: left;
  text-decoration: none;

  &:hover {
    background-color: ${getHover({ theme }).backgroundColor};
  }

  &:focus-visible {
    outline: ${getFocus({ theme }).styleOutline};
  }
`;

export const menuLinkStyle = () => (theme: Theme): SerializedStyles => css`
  ${menuItemStyle()(theme)};
  ${menuStateStyles(theme)};

  text-decoration: none;
`;

export const menuItemTextStyle = (current: boolean) => (theme: Theme): SerializedStyles => css`
  font-weight: ${current ? theme.typography.weights.bold : 'initial'};
`;

export const subMenuLinkStyle = () => (theme: Theme): SerializedStyles => css`
  ${itemStyle(theme)};
  ${transition(0.2, 'background-color')};
  ${menuStateStyles(theme)};
  box-sizing: border-box;
  font-size: ${theme.typography.fontSizes['14']};
  color: ${theme.utils.getColor('darkGrey', 850)};
  margin: ${theme.spacing.xsm} 0 ${theme.spacing.xsm} 0;
  padding-left: ${rem(ICON_PADDING)};

  text-decoration: none;
`;

export const arrowContainerStyle = (open: boolean, show: boolean) => (
  theme: Theme
): SerializedStyles => css`
  ${transition(0.2, 'background-color')};
  ${flexCenter};
  width: ${rem(24)};
  height: ${rem(24)};
  opacity: ${show ? '1' : '0'};
  transform: ${open ? 'rotate(90deg)' : 'rotate(0deg);'};
  path {
    background-color: ${theme.utils.getColor('lightGrey', 750)};
  }
`;

export const menuIconStyle = (shouldFill: boolean) => (theme: Theme): SerializedStyles => css`
  ${transition(0.2)};
  ${flexCenter};
  margin-right: ${theme.spacing.sm};
  width: ${rem(32)};
  height: ${rem(32)};
  border-radius: 50%;
  flex-shrink: 0;
  ${shouldFill ? `background-color: ${fillPickerBasedOnType('primary', BASE_SHADE)(theme)}; ` : ''}
`;

export const subMenuIconStyle = () => (theme: Theme): SerializedStyles => css`
  ${flexCenter};
  width: ${rem(32)};
  height: ${rem(32)};
  margin-right: ${theme.spacing.sm};
  flex-shrink: 0;
`;
