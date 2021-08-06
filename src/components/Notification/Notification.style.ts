import { css, SerializedStyles } from '@emotion/react';
import { rem, tint } from 'polished';
import { Theme } from 'theme';
import { BASE_SHADE } from 'theme/palette';

import { NotificationStyleType, NotificationTypes } from './Notification';

export const typeToThemePalette = (theme: Theme, type: NotificationTypes): string =>
  theme.utils.getColor(type, BASE_SHADE, 'normal');

// Generic SerializedStyles for all Notification Types

export const notificationsContainerPerType = (
  type: NotificationTypes,
  styleType: NotificationStyleType,
  theme: Theme
): string =>
  styleType === 'outlined'
    ? `
        border: ${rem(2)} solid ${typeToThemePalette(theme, type)};
        background: white;
      `
    : `
        border-left: ${typeToThemePalette(theme, type)} 4px solid;
        background: ${tint(0.95, typeToThemePalette(theme, type))};
        box-shadow: ${theme.elevation['02']};
`;

export const actionsContainer = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: ${theme.spacing.md};
  position: sticky;
  bottom: ${theme.spacing.md};
  top: 100%;
`;

export const actionContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin-left: ${theme.spacing.md};
`;

export const iconContainer = () => (theme: Theme): SerializedStyles => css`
  padding-right: ${theme.spacing.sm};
`;

export const closeActionContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin-left: ${theme.spacing.lg};
`;

export const boldMessageContainer = () => (theme: Theme): SerializedStyles => css`
  font-weight: ${theme.typography.weights.bold};
`;
