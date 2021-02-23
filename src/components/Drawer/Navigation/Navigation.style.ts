import { rem } from 'polished';
import { Theme } from 'theme';
import { css, SerializedStyles } from '@emotion/core';
import { flexCenter, flexCenterVertical, transition } from 'theme/functions';
import { backgroundPickerBasedOnType } from 'utils/themeFunctions';
import { pickTextColorFromSwatches } from 'theme/palette';

export const navigationContainerStyle = (): SerializedStyles => css`
  ${transition(0.2)};
  width: 100%;
  background-color: white;
  height: 100%;
  padding: ${rem(24)} 0;
  box-sizing: border-box;
`;

const itemStyle = css`
  ${flexCenterVertical};
  height: ${rem(44)};
  color: black;
  cursor: default;
`;

export const menuItemStyle = css`
  ${itemStyle};
  font-size: ${rem(16)};
  font-weight: 500;
  padding-left: ${rem(4)};
`;

export const menuLinkStyle = (): SerializedStyles => css`
  ${menuItemStyle};
  text-decoration: none;
`;

export const menuItemTextStyle = (current: boolean) => (theme: Theme): SerializedStyles => css`
  ${transition(0.2)};
  font-weight: ${current ? theme.typography.weights.bold : 'initial'};
`;

export const subMenuLinkStyle = () => (theme: Theme): SerializedStyles => css`
  ${itemStyle};
  ${transition(0.2)};
  box-sizing: border-box;
  font-size: ${theme.typography.fontSizes['14']};
  margin: ${theme.spacing.md} 0 ${theme.spacing.md} ${theme.spacing.md};
  padding-left: ${rem(12)};

  &.active,
  &:hover {
    border-radius: ${rem(25)};
    background-color: ${theme.utils.getColor('lightGray', 100)};

    path {
      fill: ${pickTextColorFromSwatches('lightGray', 100)} !important;
    }
  }
  &.active {
    font-weight: ${theme.typography.weights.bold};
  }
  text-decoration: none;
`;

export const arrowContainerStyle = (open: boolean, show: boolean): SerializedStyles => css`
  ${transition(0.2)};
  ${flexCenter};
  width: ${rem(24)};
  height: ${rem(24)};
  opacity: ${show ? '1' : '0'};
  transform: ${open ? 'rotate(90deg)' : 'rotate(0deg);'};
`;

export const menuIconStyle = (current: boolean) => (theme: Theme): SerializedStyles => css`
  ${transition(0.2)};
  ${flexCenter};
  margin-right: ${theme.spacing.sm};
  width: ${rem(32)};
  height: ${rem(32)};
  border-radius: 50%;
  ${current ? `background-color: ${backgroundPickerBasedOnType('branded1')(theme)}; ` : ''}
`;

export const subMenuIconStyle = () => (theme: Theme): SerializedStyles => css`
  ${flexCenter};
  width: ${rem(32)};
  height: ${rem(32)};
  margin-right: ${theme.spacing.sm};
`;
