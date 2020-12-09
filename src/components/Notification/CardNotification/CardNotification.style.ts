import { Theme } from '../../../theme';
import { rem, transparentize } from 'polished';
import { NotificationTypes } from '../Notification';
import { css, SerializedStyles } from '@emotion/core';
import { typeToThemePalette } from '../subcomponents/CompactNotification/CompactNotification.style';

export const cardContainer = (type: NotificationTypes) => (theme: Theme): SerializedStyles => css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: ${theme.spacing.md};
  width: ${rem(336)};
  min-height: ${rem(164)};
  max-height: ${rem(294)};
  border-left: ${typeToThemePalette(theme, type)} 4px solid;
  background: ${theme.palette.white};
  border-radius: ${theme.spacing.xsm};
  // TODO: box-shadow's last parameter to change when elevated is introduced
  box-shadow: ${rem(0)} ${rem(2)} ${rem(4)} ${rem(0)} ${transparentize(0.85, theme.palette.black)};
`;

export const topContainer = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${theme.spacing.md};
`;

export const infoContainer = () => (): SerializedStyles => css`
  display: flex;
  align-items: center;
`;

export const iconContainer = () => (theme: Theme): SerializedStyles => css`
  padding-right: ${theme.spacing.sm};
`;

export const infoMessageContainer = () => (theme: Theme): SerializedStyles => css`
  font-weight: ${theme.typography.weights.bold};
`;

export const closeActionContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin-left: ${theme.spacing.lg};
`;

export const descriptionContainer = () => (theme: Theme): SerializedStyles => css`
  padding-bottom: ${theme.spacing.md};
  font-size: ${theme.typography.fontSizes['14']};
  max-height: ${rem(194)};
  overflow: auto;
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
