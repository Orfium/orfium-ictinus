import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { SemanticColorsKey } from 'theme/tokens/semantic/colors';
import { rem } from 'theme/utils';

import type { Theme } from '../../../theme';
import type { NotificationStyleType, NotificationTypes } from '../Notification';
import { typeToColorStyle } from '../Notification.style';

const snackbarContainerPerType = (
  type: NotificationTypes,
  styleType: NotificationStyleType,
  theme: Theme
) =>
  styleType === 'outlined'
    ? `
    border: ${theme.globals.borderWidth.get('2')} solid
    ${theme.tokens.colors.get(
      `borderColor.interactive.${typeToColorStyle(type)}` as SemanticColorsKey
    )};
      `
    : `
    border-left: ${theme.tokens.colors.get(
      `borderColor.interactive.${typeToColorStyle(type)}` as SemanticColorsKey
    )} ${theme.globals.borderWidth.get('3')} solid;
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
      border-radius: ${theme.globals.borderRadius.get('3')};
      background: ${theme.tokens.colors.get('backgroundColor.default')};
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
      font-size: ${theme.globals.typography.fontSize.get('3')};
      max-height: ${rem(194)};
      overflow: auto;
      width: ${rem(547)};
    `;
