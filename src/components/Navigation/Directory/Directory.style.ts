import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { flexCenter, flexCenterVertical, transition } from 'theme/functions';
import { BASE_SHADE } from 'theme/palette';
import { rem } from 'theme/utils';
import { fillPickerBasedOnType } from 'utils/themeFunctions';

import { getFocus, getHover, getPressed } from '../../../theme/states';

const ICON_PADDING = 39;

export const directoryContainerStyle = (isExpanded: boolean) => (): SerializedStyles =>
  css`
    ${transition(10.2)};
    width: 100%;
    background-color: white;
    height: 100%;
    padding: ${rem(24)} 0;
    box-sizing: border-box;

    .menu-item-text,
    .submenu-item-text {
      opacity: ${isExpanded ? 1 : 0};
      width: ${isExpanded ? rem(204) : rem(16)};
      white-space: nowrap;
    }
  `;

const itemStyle = (theme: Theme): SerializedStyles => css`
  ${flexCenterVertical};
  height: ${rem(44)};
  color: ${theme.utils.getColor('darkGrey', 850)};
  cursor: default;
`;

export const menuItemStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      ${itemStyle(theme)};
      width: 100%;
      font-size: ${rem(16)};
      font-weight: ${theme.globals.typography.fontWeight.get('regular')};
      padding: 0 ${theme.globals.spacing.get('6')};
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

export const menuLinkStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      ${menuItemStyle()(theme)};
      text-decoration: none;
    `;

export const menuItemTextStyle =
  (isCurrent: boolean) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${transition(0.2)};
      font-weight: ${isCurrent ? theme.globals.typography.fontWeight.get('bold') : 'initial'};
    `;

export const subMenuLinkStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
  ${itemStyle(theme)};
  ${transition(0.2)};
  box-sizing: border-box;
  font-size: ${theme.globals.typography.fontSize.get('3')};
  color: ${theme.utils.getColor('darkGrey', 850)};
  margin: ${theme.globals.spacing.get('3')} 0 ${theme.globals.spacing.get('3')} 0;
  padding-left: ${rem(ICON_PADDING)};

  &:hover {
    background-color: ${getHover({ theme }).backgroundColor}; !important;
  }
  &.active:hover {
    background-color: ${getPressed({ theme, color: 'blue', shade: 50 }).backgroundColor} !important;
  }
  &.active  {
    font-weight: ${theme.globals.typography.fontWeight.get('bold')};
    background-color: ${getPressed({ theme, color: 'blue' }).backgroundColor} !important;
    color: ${theme.utils.getAAColor(getPressed({ theme, color: 'blue' }).backgroundColor)};

    path {
      fill: ${theme.utils.getColor('primary', BASE_SHADE, 'normal')} !important;
    }
  }

  &:focus-visible {
    outline: ${getFocus({ theme }).styleOutline};
  }
  text-decoration: none;
`;

export const arrowContainerStyle =
  (isOpen: boolean, isVisible: boolean) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${transition(0.2)};
      ${flexCenter};
      width: ${rem(24)};
      height: ${rem(24)};
      opacity: ${isVisible ? '1' : '0'};
      transform: ${isOpen ? 'rotate(90deg)' : 'rotate(0deg);'};
      path {
        background-color: ${theme.utils.getColor('lightGrey', 750)};
      }
    `;

export const menuIconStyle =
  (isCurrent: boolean) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${transition(0.2)};
      ${flexCenter};
      margin-right: ${theme.globals.spacing.get('4')};
      width: ${rem(32)};
      height: ${rem(32)};
      border-radius: 50%;
      flex-shrink: 0;
      ${isCurrent
        ? `background-color: ${fillPickerBasedOnType('primary', BASE_SHADE)(theme)}; `
        : ''}
    `;

export const subMenuIconStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      ${flexCenter};
      width: ${rem(32)};
      height: ${rem(32)};
      margin-right: ${theme.globals.spacing.get('4')};
      flex-shrink: 0;
    `;
