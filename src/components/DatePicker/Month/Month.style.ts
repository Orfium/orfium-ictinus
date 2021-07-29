import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

export const weekDaysWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${theme.utils.getColor('lightGray', 200)};
`;

export const weekDayStyle = () => (theme: Theme): SerializedStyles => css`
  color: ${theme.utils.getColor('lightGray', 500)};
  padding: ${theme.spacing.md} 0;
  width: 39px;
  font-size: ${theme.typography.fontSizes['14']};
  text-align: center;
`;

export const datesWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  border-collapse: separate;
  border-spacing: 0 ${theme.spacing.sm};
`;
