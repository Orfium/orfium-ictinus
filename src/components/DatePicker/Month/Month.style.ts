import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import { getDatePickerTokens } from '../DatePicker.tokens';

export const weekDaysWrapperStyle = (): SerializedStyles =>
  css`
    display: flex;
    justify-content: space-around;
  `;

export const weekDayStyle =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDatePickerTokens(theme);

    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.tokens.colors.get('textColor.default.secondary')};
      width: ${tokens('dateSize')};
      height: ${tokens('dateSize')};
      font-size: ${theme.globals.typography.fontSize.get('3')};
      line-height: ${theme.globals.typography.lineHeight.get('4')};
      text-align: center;
      font-weight: ${theme.globals.typography.fontWeight.get('medium')};
    `;
  };

export const datesWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles => {
    return css`
      border-collapse: separate;
      border-spacing: 0 ${theme.dimension.spacing.get('md')};
    `;
  };
