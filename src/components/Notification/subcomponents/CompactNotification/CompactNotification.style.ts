import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../../../theme';
import { NotificationStyleType, NotificationTypes } from '../../Notification';
import { notificationsContainerPerType } from '../../Notification.style';

export const notificationsContainer =
  (type: NotificationTypes, styleType: NotificationStyleType) =>
  (theme: Theme): SerializedStyles =>
    css`
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      width: 100%;
      min-height: ${rem(46)};
      border-radius: ${theme.spacing.xsm};
      color: ${theme.utils.getColor('darkGrey', 850)};
      font-size: ${theme.typography.fontSizes[14]};
      ${notificationsContainerPerType(type, styleType, theme)};
    `;

export const infoContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      align-items: center;
      padding: 0 ${theme.spacing.md};
    `;

export const messageContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      padding: ${theme.spacing.md} 0;
    `;

export const actionsContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      align-items: center;
      padding-right: ${theme.spacing.md};
      font-weight: ${theme.typography.weights.medium};
    `;

export const headContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      padding-right: ${theme.spacing.xsm};
      font-weight: ${theme.typography.weights.medium};
    `;

export const alternativeActionContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      margin-left: ${theme.spacing.sm};
    `;
