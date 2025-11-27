import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

import { vars } from '@orfium/tokens';
import { getDatePickerTokens } from '../DatePicker.tokens';

export const weekDaysWrapperStyle = (): SerializedStyles => css`
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
      color: ${vars.color.text.default.secondary};
      width: ${tokens('dateSize')};
      height: ${tokens('dateSize')};
      font-size: ${vars['font-size']['3']};
      line-height: ${vars['line-height']['4']};
      text-align: center;
      font-weight: ${vars.weight.medium};
    `;
  };

export const datesWrapperStyle = (): SerializedStyles => {
  return css`
    border-collapse: separate;
    border-spacing: 0 ${vars.spacing['5']};
  `;
};
