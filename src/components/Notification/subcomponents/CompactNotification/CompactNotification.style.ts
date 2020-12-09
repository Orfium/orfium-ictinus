import { Theme } from '../../../../theme';
import { rem, transparentize } from 'polished';
import { NotificationTypes } from '../../Notification';
import { css, SerializedStyles } from '@emotion/core';

export const typeToThemePalette = (theme: Theme, type: NotificationTypes): string =>
  theme.utils.getColor(type, 400, 'normal');

export const notificationsContainer = (withFilling: boolean, type: NotificationTypes) => (
  theme: Theme
): SerializedStyles => css`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  height: ${rem(56)};
  border-left: ${!withFilling ? typeToThemePalette(theme, type) : 'none'} 4px solid;
  border: ${withFilling ? typeToThemePalette(theme, type) : 'none'} 1px solid;
  background: ${withFilling ? transparentize(0.9, typeToThemePalette(theme, type)) : 'none'};
  border-radius: ${theme.spacing.xsm};
  // TODO: box-shadow's last parameter to change when elevated is introduced
  box-shadow: ${rem(0)} ${rem(2)} ${rem(4)} ${rem(0)} ${transparentize(0.85, theme.palette.black)};
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
