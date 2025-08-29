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
      color: ${isSelected
        ? theme.tokens.colors.get('textColor.inverted.primary')
        : theme.tokens.colors.get('textColor.default.primary')};
      width: ${tokens('dateSize')};
      font-weight: ${isToday && 'bold'};
      opacity: ${isDisabled ? 0.5 : 1};
      background: ${isLast || isFirst
        ? theme.tokens.colors.get('palette.primary.contrast')
        : (isSelected || isBetween) &&
          typeof isBetween !== 'undefined' &&
          theme.tokens.colors.get('palette.tertiary.muted')};
      border-bottom-right-radius: ${isLast && isSelected && '100%'};
      border-top-right-radius: ${isLast && isSelected && '100%'};
      border-bottom-left-radius: ${isFirst && isSelected && '100%'};
      border-top-left-radius: ${isFirst && isSelected && '100%'};

      &:focus-visible {
        background-color: ${theme.tokens.colors.get('palette.tertiary.muted')};
        border-radius: ${theme.dimension.borderRadius.get('circle')};
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
    return css`
      vertical-align: middle;
      text-align: center;
      cursor: pointer;
      position: relative;
      background: ${isBetween
        ? theme.tokens.colors.get('palette.tertiary.muted')
        : theme.tokens.colors.get('palette.tertiary.base')};
    `;
  };

export const dayStyle =
  ({ isSelected, isToday, isDisabled, isBetween }: DayStyleProps) =>
  (theme: Theme) => {
    const tokens = getDatePickerTokens(theme);

    return css`
      ${label02(theme)};
      border: ${isSelected ? 0 : theme.dimension.borderWidth.get('default')} solid
        ${isToday
          ? theme.tokens.colors.get('borderColor.interactive.active')
          : theme.tokens.colors.get('borderColor.decorative.transparent')};
      border-radius: ${(isToday || isSelected) && theme.dimension.borderRadius.get('circle')};
      width: ${tokens('dateSize')};
      height: ${tokens('dateSize')};
      color: ${isSelected
        ? theme.tokens.colors.get('textColor.inverted.primary')
        : theme.tokens.colors.get('textColor.default.primary')};
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${isSelected
        ? theme.tokens.colors.get('palette.primary.contrast')
        : 'transparent'};

      ${!isDisabled &&
      `&:hover {
            border-radius: ${theme.dimension.borderRadius.get('circle')};
            background: ${
              !isSelected &&
              (!isBetween ? theme.tokens.colors.get('palette.tertiary.muted') : 'transparent')
            };
          }`}
    `;
  };
