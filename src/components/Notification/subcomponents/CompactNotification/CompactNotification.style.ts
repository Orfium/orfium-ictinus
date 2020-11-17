import { Theme } from '../../../../theme';
import { rem, transparentize } from 'polished';
import { NotificationTypes } from '../../Notification';
import { CompactNotificationVariants } from './CompactNotification';
import { css, SerializedStyles } from '@emotion/core';

const typeToThemePalette = (theme: Theme, type: NotificationTypes) =>
  type === 'success'
    ? theme.palette.success['400']
    : type === 'error'
    ? theme.palette.error['400']
    : type === 'info'
    ? theme.palette.flat.darkBlue['400']
    : theme.palette.warning['400'];

export const notificationsContainer = (
  withFilling: boolean,
  variant: CompactNotificationVariants,
  type: NotificationTypes
) => (theme: Theme): SerializedStyles => css`
  display: grid;
  grid-gap: ${theme.spacing.md};
  justify-content: space-between;
  width: ${variant === 'inline' ? '100%' : rem(489)};
  height: ${rem(56)};
  border-left: ${!withFilling ? typeToThemePalette(theme, type) : 'none'} 4px solid;
  border: ${withFilling ? typeToThemePalette(theme, type) : 'none'} 1px solid;
  background: ${withFilling
    ? type === 'success'
      ? transparentize(0.9, typeToThemePalette(theme, type))
      : type === 'error'
      ? transparentize(0.9, typeToThemePalette(theme, type))
      : type === 'info'
      ? transparentize(0.9, typeToThemePalette(theme, type))
      : transparentize(0.9, typeToThemePalette(theme, type))
    : 'none'};
  border-radius: ${theme.spacing.xsm};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
`;

export const infoContainer = () => (theme: Theme): SerializedStyles => css`
  grid-column-start: 1;
  display: flex;
  padding: 0 ${theme.spacing.md};
`;

export const actionsContainer = () => (theme: Theme): SerializedStyles => css`
  grid-column-start: 2;
  display: flex;
  padding-right: ${theme.spacing.md};
`;

export const infoIconContainer = () => (theme: Theme): SerializedStyles => css`
  padding-right: ${theme.spacing.sm};
  align-self: center;
`;

export const infoMessageContainer = () => (): SerializedStyles => css`
  align-self: center;
`;

export const headMessageContainer = () => (theme: Theme): SerializedStyles => css`
  padding-right: ${theme.spacing.xsm};
  align-self: center;
  font-weight: ${theme.typography.weights.bold};
`;

export const primaryActionContainer = () => (theme: Theme): SerializedStyles => css`
  align-self: center;
  cursor: pointer;
  color: ${theme.palette.flat.blue[400]};
`;

export const closeIconContainer = () => (theme: Theme): SerializedStyles => css`
  align-self: center;
  cursor: pointer;
  padding-left: ${theme.spacing.lg};
`;
