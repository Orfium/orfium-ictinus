import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';
import type { SemanticColorsKey } from 'theme/tokens/semantic/colors';

import type { NotificationStyleType, NotificationTypes } from './Notification';

// Generic SerializedStyles for all Notification Types

export const typeToColorStyle = (type: NotificationTypes): string =>
  type === 'info' ? 'active' : type;
export const typeToBackgroundStyle = (type: NotificationTypes): string =>
  type === 'info' ? 'primaryAlt' : type;

export const notificationsContainerPerType = (
  type: NotificationTypes,
  styleType: NotificationStyleType,
  theme: Theme
): SerializedStyles => css`
  border: ${theme.globals.borderWidth.get('2')} solid
    ${theme.tokens.colors.get(
      `borderColor.interactive.${typeToColorStyle(type)}` as SemanticColorsKey
    )};

  &[notification-type='banner'] {
    box-shadow: ${theme.globals.boxShadow.get('2')};
  }

  ${styleType === 'outlined'
    ? `
        background: ${theme.tokens.colors.get('backgroundColor.default')};
      `
    : `
        background: ${theme.tokens.colors.get(
          `palette.${typeToBackgroundStyle(type)}.light` as SemanticColorsKey
        )};
`}
`;

export const actionsContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding-top: ${theme.globals.spacing.get('6')};
      position: sticky;
      bottom: ${theme.globals.spacing.get('6')};
      top: 100%;
    `;

export const actionContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      cursor: pointer;
      margin-left: ${theme.globals.spacing.get('6')};
    `;

export const iconContainer =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      padding-right: ${theme.globals.spacing.get('4')};
    `;

export const boldMessageContainer =
  (type?: NotificationTypes) =>
  (theme: Theme): SerializedStyles =>
    css`
      color: ${type
        ? theme.tokens.colors.get(
            `textColor.default.${typeToColorStyle(type)}` as SemanticColorsKey
          )
        : undefined};
      font-weight: ${theme.globals.typography.fontWeight.get('bold')};
    `;
