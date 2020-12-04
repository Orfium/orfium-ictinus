import { Theme } from '../../../theme';
import { rem, transparentize } from 'polished';
import { css, SerializedStyles } from '@emotion/core';
import { transition } from '../../../theme/functions';
import { isNotificationTypes, ToastType } from './Toast';

export const toastContainer = () => (theme: Theme): SerializedStyles => css`
  overflow: hidden;
  width: ${rem(336)};
  border-radius: ${theme.spacing.xsm};
  // TODO: box-shadow's last parameter to change when elevated is introduced
  box-shadow: ${rem(0)} ${rem(2)} ${rem(4)} ${rem(0)} ${transparentize(0.85, theme.palette.black)};
`;

export const topContainer = (type: ToastType) => (theme: Theme): SerializedStyles => css`
  color: ${theme.palette.white};
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: ${rem(58)};
  background: ${isNotificationTypes(type)
    ? theme.utils.getColor(type, 400, 'normal')
    : theme.utils.getColor('darkGray', 700)};
`;

export const infoContainer = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing.md};
`;

export const infoIconContainer = () => (theme: Theme): SerializedStyles => css`
  padding-right: ${theme.spacing.sm};
`;

export const actionIconsContainer = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  align-items: center;
  padding-right: ${theme.spacing.md};
`;

export const chevronIconContainer = (expanded: boolean) => (): SerializedStyles => css`
  cursor: pointer;
  transform: rotate(${expanded ? '180' : '0'}deg);
  ${transition(0.2)}
`;

export const closeIconContainer = () => (theme: Theme): SerializedStyles => css`
  cursor: pointer;
  margin-left: ${theme.spacing.md};
`;

// expanded container css

export const expandedContainer = () => (theme: Theme): SerializedStyles => css`
  padding: ${theme.spacing.md};
  min-height: ${rem(146)};
  max-height: ${rem(294)};
  font-size: ${theme.typography.fontSizes['14']};
  position: relative;
`;
