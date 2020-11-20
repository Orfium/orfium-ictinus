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
    ? theme.palette.info['400']
    : theme.palette.warning['400'];

export const notificationsContainer = (
  withFilling: boolean,
  variant: CompactNotificationVariants,
  type: NotificationTypes
) => (theme: Theme): SerializedStyles => css`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
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
  // TODO: box-shadow's last parameter to change when elevated is introduced
  box-shadow: ${rem(0)} ${rem(2)} ${rem(4)} ${rem(0)} ${transparentize(0.85, theme.palette.black)};
`;

export const infoContainer = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing.md};
`;

export const actionsContainer = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  align-items: center;
  padding-right: ${theme.spacing.md};
`;

export const iconContainer = () => (theme: Theme): SerializedStyles => css`
  padding-right: ${theme.spacing.sm};
`;

export const primaryActionContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  color: ${theme.palette.flat.lightBlue[400]};
`;

export const closeActionContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin-left: ${theme.spacing.lg};
`;
