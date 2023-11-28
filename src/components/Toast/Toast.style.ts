import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem } from 'theme/utils';

import { isNotificationTypes } from './Toast';
import type { Theme } from '../../theme';
import { transition, flexCenter } from '../../theme/functions';
import type { AcceptedColorComponentTypes } from '../../utils/themeFunctions';
import type { NotificationStyleType } from '../Notification/Notification';

const maxHeightOptions = {
  notification: `max-height: ${rem(294)};`,
  generic: `max-height: none;`,
};

const toastContainerPerType = (
  type: AcceptedColorComponentTypes,
  styleType: NotificationStyleType,
  theme: Theme
) =>
  styleType === 'outlined'
    ? `border: ${rem(2)} solid ${theme.utils.getColor(type, 500, 'normal')}`
    : `box-shadow: ${theme.globals.elevation['02']}
`;

export const toastContainer =
  (type: AcceptedColorComponentTypes, styleType: NotificationStyleType) =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      flex-direction: column;
      overflow: hidden;
      border-radius: ${rem(8)};
      ${toastContainerPerType(type, styleType, theme)};
    `;

export const topContainer =
  (type: AcceptedColorComponentTypes) =>
  (theme: Theme): SerializedStyles =>
    css`
      color: ${theme.globals.oldColors.white};
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      height: ${rem(58)};
      background: ${theme.utils.getColor(type, 500, 'normal')};
    `;

export const infoContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      ${flexCenter};
      padding: 0 ${theme.globals.spacing.get('6')};
    `;

export const infoIconContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      padding-right: ${theme.globals.spacing.get('4')};
    `;

export const actionIconsContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      align-items: center;
      padding-right: ${theme.globals.spacing.get('6')};
    `;

export const chevronIconContainer = (isExpanded: boolean) => (): SerializedStyles =>
  css`
    cursor: pointer;
    transform: rotate(${isExpanded ? '180' : '0'}deg);
    ${transition(0.2)}
  `;

export const expandedContainer =
  (type: AcceptedColorComponentTypes, isExpanded: boolean, hasMinimumHeight: boolean) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${transition(0.1)};
      min-height: ${hasMinimumHeight && isExpanded ? rem(146) : rem(0)};
      ${isNotificationTypes(type) ? maxHeightOptions['notification'] : maxHeightOptions['generic']}
      height: ${!isExpanded ? rem(0) : 'inherit'};
      font-size: ${theme.globals.typography.fontSize.get('3')};
      position: relative;
      background: ${theme.globals.oldColors.white};
    `;
