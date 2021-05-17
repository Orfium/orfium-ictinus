import { Theme } from '../../../../theme';
import { rem } from 'polished';
import { NotificationStyleType, NotificationTypes } from '../../Notification';
import { css, SerializedStyles } from '@emotion/react';
import { notificationsContainerPerType } from '../../Notification.style';

export const notificationsContainer = (
  type: NotificationTypes,
  styleType: NotificationStyleType
) => (theme: Theme): SerializedStyles => css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  height: ${rem(56)};
  border-radius: ${theme.spacing.xsm};
  ${notificationsContainerPerType(type, styleType, theme)};
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

export const headContainer = () => (theme: Theme): SerializedStyles => css`
  padding-right: ${theme.spacing.xsm};
  font-weight: ${theme.typography.weights.bold};
`;

export const primaryActionContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  color: ${theme.utils.getColor('lightBlue', 400)};
`;
