import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import { getDatePickerTokens } from '../DatePicker.tokens';
import { label02 } from 'components/Typography/Typography.config.styles';

type DayStyleProps = {
  day?: number;
  isSelected?: boolean;
  isBetween?: boolean;
  isLast?: boolean;
  isFirst?: boolean;
  isDisabled?: boolean;
  isToday: boolean;
};

export const dayWrapperStyle =
  ({
    isSelected,
    isBetween,
    isLast,
    isFirst,
    isToday,
    isDisabled,
  }: DayStyleProps & { isToday: boolean }) =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDatePickerTokens(theme);

    return css`
      vertical-align: middle;
      text-align: center;
      cursor: pointer;
      position: relative;
      color: ${isSelected ? tokens('date.textColor.active') : tokens('date.textColor.default')};
      width: ${tokens('dateSize')};
      font-weight: ${isToday && 'bold'};
      opacity: ${isDisabled ? 0.5 : 1};
      background: ${isLast || isFirst
        ? tokens('date.backgroundColor.active')
        : (isSelected || isBetween) &&
          typeof isBetween !== 'undefined' &&
          tokens('date.backgroundColor.focused')};
      border-bottom-right-radius: ${isLast && isSelected && '100%'};
      border-top-right-radius: ${isLast && isSelected && '100%'};
      border-bottom-left-radius: ${isFirst && isSelected && '100%'};
      border-top-left-radius: ${isFirst && isSelected && '100%'};

      &:focus-visible {
        background-color: ${tokens('date.backgroundColor.focused')};
        border-radius: ${tokens('date.borderRadius.2')};
      }

      ${(isSelected || isLast || isFirst) &&
      `&:after {
          z-index: -1;
          content: ' ';
          height: 100%;
          width: 50%;
          position: absolute;
          top: 0;
          left: ${isLast ? '0' : 'initial'};
          right: ${isFirst ? '0' : 'initial'};
          border-bottom-right-radius: ${isLast && isSelected && '100%'};
          border-top-right-radius: ${isLast && isSelected && '100%'};
          border-bottom-left-radius: ${isFirst && isSelected && '100%'};
          border-top-left-radius: ${isFirst && isSelected && '100%'};
      }`}
    `;
  };

export const emptyDayStyle =
  ({ isBetween }: { isBetween: boolean }) =>
  (theme: Theme) => {
    const tokens = getDatePickerTokens(theme);

    return css`
      vertical-align: middle;
      text-align: center;
      cursor: pointer;
      position: relative;
      background: ${isBetween
        ? tokens('date.backgroundColor.focused')
        : tokens('date.backgroundColor.default')};
    `;
  };

export const dayStyle =
  ({ isSelected, isToday, isDisabled, isBetween }: DayStyleProps) =>
  (theme: Theme) => {
    const tokens = getDatePickerTokens(theme);

    return css`
      ${label02(theme)};
      border: ${isSelected ? 0 : tokens('date.borderWidth')} solid
        ${isToday ? tokens('date.borderColor.present') : tokens('date.borderColor.default')};
      border-radius: ${(isToday || isSelected) && tokens('date.borderRadius.2')};
      width: ${tokens('dateSize')};
      height: ${tokens('dateSize')};
      color: ${isSelected ? tokens('date.textColor.active') : tokens('date.textColor.default')};
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${isSelected ? tokens('date.backgroundColor.active') : 'transparent'};

      ${!isDisabled &&
      `&:hover {
            border-radius: ${tokens('date.borderRadius.2')};
            background: ${
              !isSelected && (!isBetween ? tokens('date.backgroundColor.focused') : 'transparent')
            };
          }`}
    `;
  };
