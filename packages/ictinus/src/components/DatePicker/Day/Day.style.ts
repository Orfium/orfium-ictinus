import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import { vars } from '@orfium/tokens';
import { label02 } from 'components/Typography/Typography.config.styles';
import { getDatePickerTokens } from '../DatePicker.tokens';

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
      color: ${isSelected ? vars.color.text.inverted.primary : vars.color.text.default.primary};
      width: ${tokens('dateSize')};
      font-weight: ${isToday && 'bold'};
      opacity: ${isDisabled ? 0.5 : 1};
      background: ${isLast || isFirst
        ? vars.color.palette.primary.contrast
        : (isSelected || isBetween) &&
          typeof isBetween !== 'undefined' &&
          vars.color.palette.tertiary.muted};
      border-bottom-right-radius: ${isLast && isSelected && '100%'};
      border-top-right-radius: ${isLast && isSelected && '100%'};
      border-bottom-left-radius: ${isFirst && isSelected && '100%'};
      border-top-left-radius: ${isFirst && isSelected && '100%'};

      &:focus-visible {
        background-color: ${vars.color.palette.tertiary.muted};
        border-radius: ${vars['border-radius']['7']};
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

export const emptyDayStyle = ({ isBetween }: { isBetween: boolean }) => {
  return css`
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    position: relative;
    background: ${isBetween ? vars.color.palette.tertiary.muted : vars.color.palette.tertiary.base};
  `;
};

export const dayStyle =
  ({ isSelected, isToday, isDisabled, isBetween }: DayStyleProps) =>
  (theme: Theme) => {
    const tokens = getDatePickerTokens(theme);

    return css`
      ${label02(theme)};
      border: ${isSelected ? 0 : vars['border-width']['1']} solid
        ${isToday
          ? vars.color['border-color'].interactive.active
          : vars.color['border-color'].decorative.transparent};
      border-radius: ${(isToday || isSelected) && vars['border-radius']['7']};
      width: ${tokens('dateSize')};
      height: ${tokens('dateSize')};
      color: ${isSelected ? vars.color.text.inverted.primary : vars.color.text.default.primary};
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${isSelected ? vars.color.palette.primary.contrast : 'transparent'};

      ${!isDisabled &&
      `&:hover {
            border-radius: ${vars['border-radius']['7']};
            background: ${
              !isSelected && (!isBetween ? vars.color.palette.tertiary.muted : 'transparent')
            };
          }`}
    `;
  };
