import { Theme } from '../../theme';
import { rem, transparentize } from 'polished';
import { css, SerializedStyles } from '@emotion/react';
import { transition, flexCenter } from '../../theme/functions';
import { AcceptedColorComponentTypes } from '../../utils/themeFunctions';
import { isNotificationTypes } from './Toast';

const maxHeightOptions = {
  notification: `max-height: ${rem(294)};`,
  generic: `max-height: none;`,
};

export const toastContainer = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: ${theme.spacing.xsm};
  // TODO: box-shadow's last parameter to change when elevated is introduced
  box-shadow: ${rem(0)} ${rem(2)} ${rem(4)} ${rem(0)} ${transparentize(0.85, theme.palette.black)};
`;

export const topContainer = (type: AcceptedColorComponentTypes) => (
  theme: Theme
): SerializedStyles => css`
  color: ${theme.palette.white};
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: ${rem(58)};
  background: ${theme.utils.getColor(type, 400, 'normal')};
`;

export const infoContainer = () => (theme: Theme): SerializedStyles => css`
  ${flexCenter};
  padding: 0 ${theme.spacing.md};
`;

export const infoIconContainer = () => (theme: Theme): SerializedStyles => css`
  padding-right: ${theme.spacing.sm};
`;

export const actionIconsContainer = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  align-items: center;
  padding-right: ${theme.spacing.md};
`;

export const chevronIconContainer = (expanded: boolean) => (): SerializedStyles => css`
  cursor: pointer;
  transform: rotate(${expanded ? '180' : '0'}deg);
  ${transition(0.2)}
`;

export const expandedContainer = (type: AcceptedColorComponentTypes, isExpanded: boolean) => (
  theme: Theme
): SerializedStyles => css`
  ${transition(0.1)};
  min-height: ${isExpanded ? rem(146) : rem(0)};
  ${isNotificationTypes(type) ? maxHeightOptions['notification'] : maxHeightOptions['generic']}
  height: ${!isExpanded ? rem(0) : 'inherit'};
  font-size: ${theme.typography.fontSizes['14']};
  position: relative;
  background: ${theme.palette.white};
`;
