import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

export const weekDaysWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: ${theme.utils.getColor('lightGrey', 100)};
`;

export const weekDayStyle = () => (theme: Theme): SerializedStyles => css`
  color: ${theme.utils.getColor('lightGrey', 650)};
  padding: ${theme.spacing.md} 0;
  width: 39px;
  font-size: ${theme.typography.fontSizes['14']};
  text-align: center;
  font-weight: ${theme.typography.weights.medium};
`;

export const datesWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  border-collapse: separate;
  border-spacing: 0 ${theme.spacing.sm};
`;
