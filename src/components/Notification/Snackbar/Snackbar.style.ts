import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

import { Theme } from '../../../theme';
import { NotificationStyleType, NotificationTypes } from '../Notification';
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
    box-shadow: ${theme.globals.elevation['02']};
`;

export const cardContainer =
  (type: NotificationTypes, styleType: NotificationStyleType) =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      flex-direction: column;
      overflow: hidden;
      padding: ${theme.globals.spacing.get('6')};
      box-sizing: border-box;
      max-height: ${rem(294)};
      border-radius: ${rem(8)};
      background: ${theme.globals.colors.white};
      ${snackbarContainerPerType(type, styleType, theme)};
    `;

export const topContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: ${theme.globals.spacing.get('6')};
    `;

export const infoContainer = () => (): SerializedStyles =>
  css`
    display: flex;
    align-items: center;
  `;

export const descriptionContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      font-size: ${theme.globals.typography.fontSizes.get('3')};
      max-height: ${rem(194)};
      overflow: auto;
      width: ${rem(547)};
    `;
