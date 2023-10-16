import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

import { flex } from '../../../theme/functions';
import { getDatePickerTokens, getDateTokens } from '../DatePicker.tokens';
import { getListItemTokens } from 'components/List/List.tokens';
import { label02 } from 'components/Typography/Typography.config.styles';

export const overlayWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDateTokens(theme);

    return css`
      ${flex};
      border: ${tokens('borderWidth')} solid ${tokens('container.borderColor')};
      border-radius: ${tokens('container.borderRadius')};
      width: fit-content;
    `;
  };

export const optionsWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDateTokens(theme);

    return css`
      border-right: ${tokens('borderWidth')} solid ${tokens('container.borderColor')};
    `;
  };

export const optionStyle =
  ({ isSelected }: { isSelected?: boolean }) =>
  (theme: Theme): SerializedStyles => {
    const listItemTokens = getListItemTokens(theme);

    return css`
      ${label02(theme)};
      white-space: nowrap;
      padding: ${theme.globals.spacing.get('6')};
      font-weight: ${isSelected
        ? theme.globals.typography.fontWeight.get('medium')
        : theme.globals.typography.fontWeight.get('regular')};
      color: ${isSelected && listItemTokens('textColor.active')};
      cursor: pointer;
      background-color: ${isSelected ? listItemTokens('backgroundColor.active') : 'transparent'};
      position: relative;

      &:hover {
        background-color: ${listItemTokens('backgroundColor.active')};
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
    const dateTokens = getDateTokens(theme);
    const datePickerTokens = getDatePickerTokens(theme);

    return css`
      display: flex;
      justify-content: flex-end;
      height: ${datePickerTokens('actionsContainer')};
      align-items: center;
      gap: ${dateTokens('actionsSpacing')};
      padding: 0 ${dateTokens('horizontalPadding')};
      border-top: ${dateTokens('borderWidth')} solid ${dateTokens('container.borderColor')};
    `;
  };
