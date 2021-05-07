import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { flex } from '../../../theme/functions';

export const overlayWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  ${flex};
`;

export const optionsWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  border-right: 1px solid #dfdfdf;
`;

export const optionStyle = ({ selected }: { selected?: boolean }) => (
  theme: Theme
): SerializedStyles => css`
  white-space: nowrap;
  padding: ${theme.spacing.md};
  font-weight: ${selected ? theme.typography.weights.bold : theme.typography.weights.regular};
  cursor: pointer;
`;

export const buttonsMonthsWrapperStyle = ({ isRangePicker }: { isRangePicker: boolean }) => (
  theme: Theme
): SerializedStyles => css`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: ${isRangePicker && theme.spacing.md};
`;
export const monthsWrapperStyle = ({ isRangePicker }: { isRangePicker: boolean }) => (
  theme: Theme
): SerializedStyles => css`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 0 ${theme.spacing.lg};
  z-index: 10;

  > div:first-of-type {
    margin-right: ${isRangePicker ? theme.spacing.lg : 0};
  }
`;

export const buttonsWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${theme.spacing.md};
  margin-right: ${theme.spacing.lg};

  > button {
    margin: ${theme.spacing.sm} 0 ${theme.spacing.sm} ${theme.spacing.sm};
  }
`;
