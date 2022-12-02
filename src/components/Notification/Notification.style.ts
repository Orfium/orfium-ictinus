import { css, SerializedStyles } from '@emotion/react';
import { tint } from 'polished';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import { NotificationStyleType, NotificationTypes } from './Notification';

export const typeToThemePalette = (theme: Theme, type: NotificationTypes): string =>
  theme.utils.getColor(type, 550, 'normal');

// Generic SerializedStyles for all Notification Types

export const notificationsContainerPerType = (
  type: NotificationTypes,
  styleType: NotificationStyleType,
  theme: Theme
): SerializedStyles => css`
  border: ${rem(1)} solid ${theme.utils.getColor(type, 100, 'normal')};

  &[notification-type='banner'] {
    box-shadow: ${theme.elevation['02']};
  }

  ${styleType === 'outlined'
    ? `
        border: ${rem(2)} solid ${typeToThemePalette(theme, type)};
        background: white;
      `
    : `
        background: ${tint(0.95, typeToThemePalette(theme, type))};
`}
`;

export const actionsContainer = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: ${theme.spacing.get('6')};
  position: sticky;
  bottom: ${theme.spacing.get('6')};
  top: 100%;
`;

export const actionContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin-left: ${theme.spacing.get('6')};
`;

export const iconContainer = () => (theme: Theme): SerializedStyles => css`
  padding-right: ${theme.spacing.get('4')};
`;

export const boldMessageContainer = () => (theme: Theme): SerializedStyles => css`
  font-weight: ${theme.typography.weights.get('bold')};
`;
