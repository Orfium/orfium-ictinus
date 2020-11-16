import { Theme } from '../../../../theme';
import { rem } from 'polished';
import { NotificationTypes } from '../../Notification';
import { CompactNotificationVariants } from './CompactNotification';
import { css, SerializedStyles } from '@emotion/core';

export const notificationsContainer = (
  withFilling: boolean,
  variant: CompactNotificationVariants,
  type: NotificationTypes
) => (theme: Theme): SerializedStyles => css`
  display: grid;
  grid-gap: ${rem(13)};
  justify-content: space-between;
  width: ${variant === 'inline' ? rem(315) : rem(489)};
  height: ${rem(56)};

  //without fill
  border-left: ${withFilling === false
      ? type === 'success'
        ? theme.palette.success['400']
        : type === 'error'
        ? theme.palette.error['400']
        : type === 'info'
        ? theme.palette.flat.darkBlue['400']
        : theme.palette.warning['400']
      : 'none'}
    4px solid;

  //with fill
  border: ${withFilling === true
      ? type === 'success'
        ? theme.palette.success['400']
        : type === 'error'
        ? theme.palette.error['400']
        : type === 'info'
        ? theme.palette.flat.darkBlue['400']
        : theme.palette.warning['400']
      : 'none'}
    1px solid;

  background: ${withFilling === true
    ? type === 'success'
      ? 'rgba(107,188,21,0.1)'
      : type === 'error'
      ? 'rgba(212,0,0,0.1)'
      : type === 'info'
      ? 'rgba(35,45,125,0.1)'
      : 'rgba(245,120,27,0.1)'
    : 'none'};

  border-radius: ${rem(4)};
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
`;

export const infoContainer = () => (): SerializedStyles => css`
  grid-column-start: 1;
  display: flex;
  margin-left: ${rem(16)};
  margin-right: ${rem(13)};
`;

export const actionsContainer = () => (): SerializedStyles => css`
  grid-column-start: 2;
  display: flex;
  margin-right: ${rem(16)};
`;

export const infoIconContainer = () => (): SerializedStyles => css`
  margin-right: ${rem(10)};
  align-self: center;
`;

export const infoMessageContainer = () => (): SerializedStyles => css`
  align-self: center;
`;

export const headMessageContainer = () => (theme: Theme): SerializedStyles => css`
  margin-right: ${rem(4)};
  align-self: center;
  font-weight: ${theme.typography.weights.bold};
`;

export const primaryActionContainer = () => (theme: Theme): SerializedStyles => css`
  align-self: center;
  cursor: pointer;
  color: ${theme.palette.flat.blue[400]};
`;

export const closeIconContainer = () => (): SerializedStyles => css`
  align-self: center;
  cursor: pointer;
  margin-left: ${rem(21)};
`;
