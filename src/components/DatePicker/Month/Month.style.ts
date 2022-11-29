import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

export const weekDaysWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  justify-content: space-around;
  border-top: ${rem(1)} solid;
  border-bottom: ${rem(1)} solid;
  border-color: ${theme.utils.getColor('lightGrey', 100)};
`;

export const weekDayStyle = () => (theme: Theme): SerializedStyles => css`
  color: ${theme.utils.getColor('lightGrey', 650)};
  padding: ${theme.spacing.get('6')} 0;
  width: ${rem(39)};
  font-size: ${theme.typography.fontSizes['14']};
  text-align: center;
  font-weight: ${theme.typography.weights.medium};
`;

export const datesWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  border-collapse: separate;
  border-spacing: 0 ${theme.spacing.get('4')};
`;
