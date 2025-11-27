import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';
import type { Theme } from 'theme';
import { flexCenter, flexCenterVertical, transition } from 'theme/functions';

import { getFocus } from '@orfium/tokens';

const ICON_PADDING = 39;

export const directoryContainerStyle = (isExpanded: boolean) => (): SerializedStyles => css`
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

const itemStyle = (): SerializedStyles => css`
  ${flexCenterVertical};
  height: ${rem(44)};
  color: ${vars.color.text.default.primary};
  cursor: default;
`;

export const menuItemStyle = (): SerializedStyles => css`
  ${itemStyle()};
  width: 100%;
  font-size: ${rem(16)};
  font-weight: ${vars.weight.regular};
  padding: 0 ${vars.spacing['6']};
  background: transparent;
  border: 0 solid transparent;
  display: flex;
  text-align: left;
  text-decoration: none;

  &:hover {
    background-color: ${vars.color.palette.tertiary.muted};
  }

  &:focus-visible {
    outline: ${vars.color.palette.tertiary.muted};
  }
`;

export const menuLinkStyle = (): SerializedStyles => css`
  ${menuItemStyle()};
  text-decoration: none;
`;

export const menuItemTextStyle = (isCurrent: boolean): SerializedStyles => css`
  ${transition(0.2)};
  color: ${isCurrent ? vars.color.text.default.active : vars.color.text.default.primary};
  font-weight: ${isCurrent ? vars.weight.bold : 'initial'};
`;

export const subMenuLinkStyle =
  () =>
  (theme: Theme): SerializedStyles => css`
    ${itemStyle()};
    ${transition(0.2)};
    box-sizing: border-box;
    font-size: ${vars['font-size']['3']};
    color: ${vars.color.text.default.primary};
    margin: ${vars.spacing['3']} 0 ${vars.spacing['3']} 0;
    padding-left: ${rem(ICON_PADDING)};

    &:hover {
      background-color: ${vars.color.palette.tertiary.muted} !important;
    }
    &.active:hover {
      background-color: ${vars.color.palette.tertiary.contrast} !important;
    }
    &.active {
      font-weight: ${vars.weight.bold};
      background-color: ${vars.color.palette.tertiary.muted} !important;
      color: ${vars.color.text.default.active};

      path {
        fill: ${vars.color.text.default.active} !important;
      }
    }

    &:focus-visible {
      outline: ${getFocus({ theme }).styleOutline};
    }

    text-decoration: none;
  `;

export const arrowContainerStyle =
  (isOpen: boolean, isVisible: boolean) => (): SerializedStyles => css`
    ${transition(0.2)};
    opacity: ${isVisible ? '1' : '0'};
    transform: ${isOpen ? 'rotate(90deg)' : 'rotate(0deg);'};
  `;

export const menuIconStyle = (): SerializedStyles => css`
  ${transition(0.2)};
  ${flexCenter};
  margin-right: ${vars.spacing['4']};
  width: ${rem(32)};
  height: ${rem(32)};
  border-radius: 50%;
  flex-shrink: 0;
`;

export const subMenuIconStyle = (): SerializedStyles => css`
  ${flexCenter};
  width: ${rem(32)};
  height: ${rem(32)};
  margin-right: ${vars.spacing['4']};
  flex-shrink: 0;
`;
