import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { vars, type SemanticColorsKey } from '@orfium/tokens';
import type { Theme } from 'theme';

import type { NotificationStyleType, NotificationTypes } from './Notification';

export const typeToColorStyle = (type: NotificationTypes): string =>
  type === 'info' ? 'active' : type;

export const typeToBackgroundStyle = (type: NotificationTypes): string =>
  type === 'info' ? 'primaryAlt' : type;
// Generic SerializedStyles for all Notification Types

export const notificationsContainerPerType = (
  type: NotificationTypes,
  styleType: NotificationStyleType,
  theme: Theme
): SerializedStyles => css`
  border: ${vars['border-width']['2']} solid
    ${theme.tokens.colors.get(
      `borderColor.interactive.${typeToColorStyle(type)}` as SemanticColorsKey
    )};

  &[notification-type='banner'] {
    box-shadow: ${theme.globals.elevation['02']};
  }

  ${styleType === 'outlined'
    ? `
    background: ${vars.color.background.default};
      `
    : `
    background: ${theme.tokens.colors.get(
      `palette.${typeToBackgroundStyle(type)}.muted` as SemanticColorsKey
    )};
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

export const boldMessageContainer =
  (type?: NotificationTypes) =>
  (theme: Theme): SerializedStyles => css`
    color: ${type
      ? theme.tokens.colors.get(`textColor.default.${typeToColorStyle(type)}` as SemanticColorsKey)
      : undefined};
    font-weight: ${vars.weight.bold};
  `;
