import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

import { vars } from '@orfium/tokens';
import { DATEPICKER_TOKENS } from '../Day/Day.style';

export const weekDaysWrapperStyle = (): SerializedStyles => css`
  display: flex;
  justify-content: space-around;
`;

export const weekDayStyle = (): SerializedStyles => {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${vars.color.text.default.secondary};
    width: ${DATEPICKER_TOKENS.dateSize};
    height: ${DATEPICKER_TOKENS.dateSize};
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
