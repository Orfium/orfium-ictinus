import { Theme } from '../../../../theme';
import { rem, transparentize } from 'polished';
import { NotificationTypes } from '../../Notification';
import { css, SerializedStyles } from '@emotion/core';

const typeToThemePalette = (theme: Theme, type: NotificationTypes) => theme.palette[type][400];

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
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15); //to change when elevated is introduced
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

export const infoIconContainer = () => (theme: Theme): SerializedStyles => css`
  padding-right: ${theme.spacing.sm};
`;

export const headMessageContainer = () => (theme: Theme): SerializedStyles => css`
  padding-right: ${theme.spacing.xsm};
  font-weight: ${theme.typography.weights.bold};
`;

export const primaryActionContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  color: ${theme.palette.flat.lightBlue[400]};
`;

export const closeIconContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  padding-left: ${theme.spacing.lg};
`;
