import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import { getDateTokens } from '../DatePicker.tokens';

export const weekDaysWrapperStyle = (): SerializedStyles =>
  css`
    display: flex;
    justify-content: space-around;
  `;

export const weekDayStyle =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDateTokens(theme);

    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${tokens('textColor.weekday')};
      width: ${tokens('size')};
      height: ${tokens('size')};
      font-size: ${theme.globals.typography.fontSize.get('3')};
      line-height: ${theme.globals.typography.lineHeight.get('4')};
      text-align: center;
      font-weight: ${theme.globals.typography.fontWeight.get('medium')};
    `;
  };

export const datesWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles => {
    const tokens = getDateTokens(theme);

    return css`
      border-collapse: separate;
      border-spacing: 0 ${tokens('rowPadding')};
    `;
  };
