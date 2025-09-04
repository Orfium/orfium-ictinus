import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { AcceptedColorComponentTypes, SemanticColorsKey } from '@orfium/tokens';
import { flexCenter, rem, transition } from '@orfium/tokens';
import {
  typeToBackgroundStyle,
  typeToColorStyle,
} from 'components/Notification/Notification.style';
import { label01 } from 'components/Typography/Typography.config.styles';
import type { Theme } from '../../theme';
import type { NotificationStyleType } from '../Notification/Notification';
import { isNotificationTypes } from './ToastV4';

const maxHeightOptions = {
  notification: `max-height: ${rem(294)};`,
  generic: `max-height: none;`,
};

const toastContainerPerType = (
  type: AcceptedColorComponentTypes,
  styleType: NotificationStyleType,
  theme: Theme
) => {
  const borderColor = isNotificationTypes(type)
    ? theme.tokens.colors.get(
        `borderColor.interactive.${typeToColorStyle(type)}` as SemanticColorsKey
      )
    : /** @TODO: remove this when Toast component is either removed or refactored */
      theme.utils.getColor(type, 500, 'normal');

  return styleType === 'outlined'
    ? `border: ${theme.globals.borderWidth.get('2')} solid ${borderColor}`
    : `box-shadow: ${theme.tokens.boxShadow.get('2')}
`;
};

export const toastContainer =
  (type: AcceptedColorComponentTypes, styleType: NotificationStyleType) =>
  (theme: Theme): SerializedStyles => css`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: ${rem(8)};
    ${toastContainerPerType(type, styleType, theme)};
  `;

export const topContainer =
  (type: AcceptedColorComponentTypes) =>
  (theme: Theme): SerializedStyles => css`
    ${label01(theme)};
    color: ${isNotificationTypes(type)
      ? theme.tokens.colors.get(`textColor.default.${typeToColorStyle(type)}` as SemanticColorsKey)
      : theme.globals.oldColors.white};
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    height: ${rem(58)};
    background: ${isNotificationTypes(type)
      ? theme.tokens.colors.get(`palette.${typeToBackgroundStyle(type)}.muted` as SemanticColorsKey)
      : /** @TODO: remove this when Toast component is either removed or refactored */
        theme.utils.getColor(type, 500, 'normal')};
  `;

export const infoContainer =
  () =>
  (theme: Theme): SerializedStyles => css`
    ${flexCenter};
    padding: 0 ${theme.globals.spacing.get('6')};
  `;

export const infoIconContainer =
  () =>
  (theme: Theme): SerializedStyles => css`
    padding-right: ${theme.globals.spacing.get('4')};
  `;

export const actionIconsContainer =
  () =>
  (theme: Theme): SerializedStyles => css`
    display: flex;
    align-items: center;
    padding-right: ${theme.globals.spacing.get('6')};
  `;

export const chevronIconContainer = (isExpanded: boolean) => (): SerializedStyles => css`
  cursor: pointer;
  transform: rotate(${isExpanded ? '180' : '0'}deg);
  ${transition(0.2)}
`;

export const expandedContainer =
  (type: AcceptedColorComponentTypes, isExpanded: boolean, hasMinimumHeight: boolean) =>
  (theme: Theme): SerializedStyles => css`
    ${transition(0.1)};
    min-height: ${hasMinimumHeight && isExpanded ? rem(146) : rem(0)};
    ${isNotificationTypes(type) ? maxHeightOptions['notification'] : maxHeightOptions['generic']}
    height: ${!isExpanded ? rem(0) : 'inherit'};
    font-size: ${theme.globals.typography.fontSize.get('3')};
    position: relative;
    background: ${theme.globals.oldColors.white};
  `;
