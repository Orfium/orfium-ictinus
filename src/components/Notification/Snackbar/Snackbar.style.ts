import { Theme } from '../../../theme';
import { rem, transparentize } from 'polished';
import { NotificationTypes } from '../Notification';
import { css, SerializedStyles } from '@emotion/core';
import { typeToThemePalette } from '../Notification.style';

export const cardContainer = (type: NotificationTypes) => (theme: Theme): SerializedStyles => css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: ${theme.spacing.md};
  box-sizing: border-box;
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

export const descriptionContainer = () => (theme: Theme): SerializedStyles => css`
  padding-bottom: ${theme.spacing.md};
  font-size: ${theme.typography.fontSizes['14']};
  max-height: ${rem(194)};
  overflow: auto;
  max-width: fit-content;
`;
