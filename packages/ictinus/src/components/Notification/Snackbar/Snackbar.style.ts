import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import { rem, vars } from '@orfium/tokens';

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
    border: ${vars['border-width']['2']} solid
    ${vars.color['border-color'].interactive[typeToColorStyle(type)]};
      `
    : `
    border-left: ${vars.color['border-color'].interactive[typeToColorStyle(type)]} ${vars['border-width']['3']} solid;
    box-shadow: ${theme.globals.elevation['02']};
`;

export const cardContainer =
  (type: NotificationTypes, styleType: NotificationStyleType) =>
  (theme: Theme): SerializedStyles => css`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: ${vars.spacing['6']};
    box-sizing: border-box;
    max-height: ${rem(294)};
    border-radius: ${vars['border-radius']['3']};
    background: ${vars.color.background.default};
    ${snackbarContainerPerType(type, styleType, theme)};
  `;

export const topContainer = (): SerializedStyles => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: ${vars.spacing['6']};
`;

export const infoContainer = () => (): SerializedStyles => css`
  display: flex;
  align-items: center;
`;

export const descriptionContainer = (): SerializedStyles => css`
  font-size: ${vars['font-size']['3']};
  max-height: ${rem(194)};
  overflow: auto;
  width: ${rem(547)};
`;
