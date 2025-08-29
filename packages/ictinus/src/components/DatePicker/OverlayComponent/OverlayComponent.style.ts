import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import { flex } from '../../../theme/functions';
import { getDatePickerTokens } from '../DatePicker.tokens';
import { label02 } from 'components/Typography/Typography.config.styles';

export const overlayWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      ${flex};
      border: ${theme.dimension.borderWidth.get('default')} solid
        ${theme.tokens.colors.get('borderColor.decorative.default')};
      border-radius: ${theme.dimension.borderRadius.get('md')};
      width: fit-content;
      background-color: ${theme.tokens.colors.get('backgroundColor.default')};
    `;
  };

export const optionsWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      border-right: ${theme.dimension.borderWidth.get('default')} solid
        ${theme.tokens.colors.get('borderColor.decorative.default')};
    `;
  };

export const optionStyle =
  ({ isSelected }: { isSelected?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    return css`
      ${label02(theme)};
      white-space: nowrap;
      padding: ${theme.globals.spacing.get('6')};
      font-weight: ${isSelected
        ? theme.globals.typography.fontWeight.get('medium')
        : theme.globals.typography.fontWeight.get('regular')};
      color: ${isSelected && theme.tokens.colors.get('textColor.default.active')};
      cursor: pointer;
      background-color: ${isSelected
        ? theme.tokens.colors.get('palette.tertiary.muted')
        : 'transparent'};
      position: relative;

      &:hover {
        background-color: ${theme.tokens.colors.get('palette.tertiary.muted')};
      }
    `;
  };

export const buttonsMonthsWrapperStyle = (): SerializedStyles =>
  css`
    display: flex;
    flex-direction: column;
    position: relative;
  `;

export const monthsWrapperStyle = (): SerializedStyles => {
  return css`
    display: flex;
    flex-direction: row;
    position: relative;
    z-index: 10;
  `;
};

export const buttonsWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDatePickerTokens(theme);

    return css`
      display: flex;
      justify-content: flex-end;
      height: ${tokens('actionsContainer')};
      align-items: center;
      gap: ${theme.dimension.spacing.get('sm')};
      padding: 0 ${theme.dimension.spacing.get('xl')};
      border-top: ${theme.dimension.borderWidth.get('default')} solid
        ${theme.tokens.colors.get('borderColor.decorative.default')};
    `;
  };
