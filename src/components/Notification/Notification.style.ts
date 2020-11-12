import { Theme } from '../../theme';
import { rem } from 'polished';
import { NotificationTypes } from './Notification';
import { css, SerializedStyles } from '@emotion/core';

export const notificationsContainer = (type?: NotificationTypes) => (
  theme: Theme
): SerializedStyles => css`
  // display: 'flex';
  display: grid;
  align-items: center;
  justify-content: space-between;
  width: ${rem(315)};
  height: ${rem(56)};
  border-left: ${type === 'success'
      ? theme.palette.success['400']
      : type === 'error'
      ? theme.palette.error['400']
      : type === 'info'
      ? theme.palette.info['400']
      : theme.palette.warning['400']}
    4px solid;
  border-radius: ${rem(4)};
  border-right: 1px solid black;
`;

export const infoContainer = () => (): SerializedStyles => css`
  grid-column-start: 1;
  display: flex;
  margin-left: ${rem(16)};
`;

export const infoMessageContainer = () => (theme: Theme): SerializedStyles => css`
  // font-size: ${theme.typography.fontSizes['14']};
`;

export const actionsContainer = () => (): SerializedStyles => css`
  display: flex;
  grid-column-start: 2;

  margin-right: ${rem(16)};
`;

export const primaryActionContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  color: rgb(24, 174, 210);
`;

export const closeIconContainer = () => (): SerializedStyles => css`
  cursor: pointer;
  margin-left: ${rem(21)};
  /* color: rgb(155, 155, 155); */
`;

export const infoIconContainer = () => (): SerializedStyles => css`
  margin-right: ${rem(10)};
`;
