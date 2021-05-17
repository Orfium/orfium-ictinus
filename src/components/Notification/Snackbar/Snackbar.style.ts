import { Theme } from '../../../theme';
import { rem } from 'polished';
import { NotificationStyleType, NotificationTypes } from '../Notification';
import { css, SerializedStyles } from '@emotion/react';
import { typeToThemePalette } from '../Notification.style';

const snackbarContainerPerType = (
  type: NotificationTypes,
  styleType: NotificationStyleType,
  theme: Theme
) =>
  styleType === 'outlined'
    ? `
        border: ${rem(2)} solid ${typeToThemePalette(theme, type)};
      `
    : ` 
    border-left: ${typeToThemePalette(theme, type)} ${rem(4)} solid;
    box-shadow: ${theme.elevation['02']};
`;

export const cardContainer = (type: NotificationTypes, styleType: NotificationStyleType) => (
  theme: Theme
): SerializedStyles => css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: ${theme.spacing.md};
  box-sizing: border-box;
  min-height: ${rem(164)};
  max-height: ${rem(294)};
  border-radius: ${rem(8)};
  background: ${theme.palette.white};
  ${snackbarContainerPerType(type, styleType, theme)};
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

export const descriptionContainer = () => (theme: Theme): SerializedStyles => css`
  padding-bottom: ${theme.spacing.md};
  font-size: ${theme.typography.fontSizes['14']};
  max-height: ${rem(194)};
  overflow: auto;
  max-width: fit-content;
`;
