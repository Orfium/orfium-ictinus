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

const bannerPositionToCss = (bannerPosition: boolean[]): SerializedStyles => css`
  position: absolute;
  top: ${bannerPosition[0] ? 0 : 'auto'};
  bottom: ${bannerPosition[1] ? 0 : 'auto'};
  left: ${bannerPosition[2] ? 0 : 'auto'};
  right: ${bannerPosition[3] ? 0 : 'auto'};
`;

export const notificationsContainer = (
  withFilling: boolean,
  variant: CompactNotificationVariants,
  type: NotificationTypes,
  bannerPosition: boolean[]
) => (theme: Theme): SerializedStyles => css`
  ${variant === 'banner' ? bannerPositionToCss(bannerPosition) : null};
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: ${variant === 'inline' ? '100%' : null};
  min-width: ${variant === 'banner' ? rem(489) : null};
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
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15); //to change when elevated is introduced
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

export const infoIconContainer = () => (theme: Theme): SerializedStyles => css`
  padding-right: ${theme.spacing.sm};
`;

// export const infoMessageContainer = () => (): SerializedStyles => css`
// `;

export const headMessageContainer = () => (theme: Theme): SerializedStyles => css`
  padding-right: ${theme.spacing.xsm};
  font-weight: ${theme.typography.weights.bold};
`;

export const primaryActionContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  color: ${theme.palette.flat.lightBlue[400]};
`;

export const closeIconContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  padding-left: ${theme.spacing.lg};
`;
