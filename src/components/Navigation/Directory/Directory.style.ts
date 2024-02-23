import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import { flexCenter, flexCenterVertical, transition } from 'theme/functions';
import { rem } from 'theme/utils';

import { getFocus } from '../../../theme/states';

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
  color: ${theme.tokens.colors.get('textColor.default.primary')};
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
        background-color: ${theme.tokens.colors.get('palette.tertiary.light')};
      }

      &:focus-visible {
        outline: ${theme.tokens.colors.get('palette.tertiary.light')};
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
      color: ${isCurrent
        ? theme.tokens.colors.get('textColor.default.active')
        : theme.tokens.colors.get('textColor.default.primary')};
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
      color: ${theme.tokens.colors.get('textColor.default.primary')};
      margin: ${theme.globals.spacing.get('3')} 0 ${theme.globals.spacing.get('3')} 0;
      padding-left: ${rem(ICON_PADDING)};

      &:hover {
        background-color: ${theme.tokens.colors.get('palette.tertiary.light')} !important;
      }
      &.active:hover {
        background-color: ${theme.tokens.colors.get('palette.tertiary.dark')} !important;
      }
      &.active {
        font-weight: ${theme.globals.typography.fontWeight.get('bold')};
        background-color: ${theme.tokens.colors.get('palette.tertiary.light')} !important;
        color: ${theme.tokens.colors.get('textColor.default.active')};

        path {
          fill: ${theme.tokens.colors.get('textColor.default.active')} !important;
        }
      }

      &:focus-visible {
        outline: ${getFocus({ theme }).styleOutline};
      }

      text-decoration: none;
    `;

export const arrowContainerStyle = (isOpen: boolean, isVisible: boolean) => (): SerializedStyles =>
  css`
    ${transition(0.2)};
    opacity: ${isVisible ? '1' : '0'};
    transform: ${isOpen ? 'rotate(90deg)' : 'rotate(0deg);'};
  `;

export const menuIconStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      ${transition(0.2)};
      ${flexCenter};
      margin-right: ${theme.globals.spacing.get('4')};
      width: ${rem(32)};
      height: ${rem(32)};
      border-radius: 50%;
      flex-shrink: 0;
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
