import { Theme } from '../../../../theme';
import { rem, tint } from 'polished';
import { NotificationTypes } from '../../Notification';
import { css, SerializedStyles } from '@emotion/react';

export const typeToThemePalette = (theme: Theme, type: NotificationTypes): string =>
  theme.utils.getColor(type, 400, 'normal');

export const notificationsContainer = (type: NotificationTypes) => (
  theme: Theme
): SerializedStyles => css`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  height: ${rem(56)};
  border-left: ${typeToThemePalette(theme, type)} 4px solid;
  background: ${tint(0.95, typeToThemePalette(theme, type))};
  border-radius: ${theme.spacing.xsm};
  box-shadow: ${theme.elevation['02']};
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
