import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { vars } from '@orfium/tokens';
import type { Theme } from 'theme';

import type { NotificationStyleType, NotificationTypes } from './Notification';

export const typeToColorStyle = (type: NotificationTypes): string =>
  type === 'info' ? 'active' : type;

export const typeToBackgroundStyle = (type: NotificationTypes): string =>
  type === 'info' ? 'primary-alt' : type;
// Generic SerializedStyles for all Notification Types

export const notificationsContainerPerType = (
  type: NotificationTypes,
  styleType: NotificationStyleType,
  theme: Theme
): SerializedStyles => css`
  border: ${vars['border-width']['2']} solid
    ${vars.color['border-color'].interactive[typeToColorStyle(type)]};

  &[notification-type='banner'] {
    box-shadow: ${theme.globals.elevation['02']};
  }

  ${styleType === 'outlined'
    ? `
    background: ${vars.color.background.default};
      `
    : `
    background:  ${vars.color.palette[typeToBackgroundStyle(type)].muted};

`}
`;

export const actionsContainer = (): SerializedStyles => css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: ${vars.spacing['6']};
  position: sticky;
  bottom: ${vars.spacing['6']};
  top: 100%;
`;

export const actionContainer = (): SerializedStyles => css`
  cursor: pointer;
  margin-left: ${vars.spacing['6']};
`;

export const iconContainer = (): SerializedStyles => css`
  padding-right: ${vars.spacing['4']};
`;

export const boldMessageContainer = (type?: NotificationTypes): SerializedStyles => css`
  color: ${type ? vars.color.text.default[typeToColorStyle(type)] : undefined};
  font-weight: ${vars.weight.bold};
`;
