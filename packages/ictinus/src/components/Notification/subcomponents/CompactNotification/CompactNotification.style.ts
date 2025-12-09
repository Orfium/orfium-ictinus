import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';

import type { Theme } from '../../../../theme';
import type { NotificationStyleType, NotificationTypes } from '../../Notification';
import { notificationsContainerPerType } from '../../Notification.style';

export const notificationsContainer =
  (type: NotificationTypes, styleType: NotificationStyleType) =>
  (theme: Theme): SerializedStyles => css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;
    min-height: ${rem(46)};
    border-radius: ${vars['border-radius']['2']};
    color: ${vars.color.text.default.primary};
    font-size: ${vars['font-size']['3']};
    ${notificationsContainerPerType(type, styleType, theme)};
  `;

export const infoContainer = (): SerializedStyles => css`
  display: flex;
  align-items: center;
  padding: 0 ${vars.spacing['6']};
`;

export const messageContainer = (): SerializedStyles => css`
  padding: ${vars.spacing['6']} 0;
`;

export const actionsContainer = (): SerializedStyles => css`
  display: flex;
  align-items: center;
  padding-right: ${vars.spacing['6']};
  font-weight: ${vars.weight.medium};
`;

export const headContainer = (): SerializedStyles => css`
  padding-right: ${vars.spacing['3']};
  font-weight: ${vars.weight.medium};
`;

export const primaryActionContainer = () => (): SerializedStyles => css`
  cursor: pointer;
`;
