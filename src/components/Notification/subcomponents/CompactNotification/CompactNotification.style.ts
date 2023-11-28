import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import type { Theme } from '../../../../theme';
import type { NotificationStyleType, NotificationTypes } from '../../Notification';
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
      border-radius: ${theme.globals.spacing.get('3')};
      color: ${theme.utils.getColor('darkGrey', 850)};
      font-size: ${theme.globals.typography.fontSize.get('3')};
      ${notificationsContainerPerType(type, styleType, theme)};
    `;

export const infoContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      align-items: center;
      padding: 0 ${theme.globals.spacing.get('6')};
    `;

export const messageContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      padding: ${theme.globals.spacing.get('6')} 0;
    `;

export const actionsContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      align-items: center;
      padding-right: ${theme.globals.spacing.get('6')};
      font-weight: ${theme.globals.typography.fontWeight.get('medium')};
    `;

export const headContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      padding-right: ${theme.globals.spacing.get('3')};
      font-weight: ${theme.globals.typography.fontWeight.get('medium')};
    `;

export const primaryActionContainer = () => (): SerializedStyles =>
  css`
    cursor: pointer;
  `;
