import { Theme } from '../../../../theme';
import { rem, transparentize } from 'polished';
import { NotificationTypes } from '../../Notification';
import { css, SerializedStyles } from '@emotion/core';
import { typeToThemePalette } from '../CompactNotification/CompactNotification.style';
import { transition } from '../../../../theme/functions';

export const toastContainer = () => (theme: Theme): SerializedStyles => css`
  overflow: hidden;
  width: ${rem(336)};
  border-radius: ${theme.spacing.xsm};
  // TODO: box-shadow's last parameter to change when elevated is introduced
  box-shadow: ${rem(0)} ${rem(2)} ${rem(4)} ${rem(0)} ${transparentize(0.85, theme.palette.black)};
`;

export const topContainer = (type: NotificationTypes) => (theme: Theme): SerializedStyles => css`
  color: ${theme.palette.white};
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: ${rem(58)};
  background: ${typeToThemePalette(theme, type)};
`;

export const infoContainer = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  align-items: center;
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

export const closeIconContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin-left: ${theme.spacing.md};
`;

// expanded container css

export const expandedContainer = () => (theme: Theme): SerializedStyles => css`
  padding: ${theme.spacing.md};
  min-height: ${rem(146)};
  font-size: ${theme.typography.fontSizes['14']};
  position: relative;
`;

export const headingContainer = () => (theme: Theme): SerializedStyles => css`
  font-weight: ${theme.typography.weights.bold};
`;

export const descriptionContainer = () => (theme: Theme): SerializedStyles => css`
  padding-top: ${theme.spacing.sm};
`;

export const actionsContainer = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: ${theme.spacing.md};
`;

export const actionContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin-left: ${theme.spacing.md};
`;
