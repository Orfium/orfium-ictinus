import { css, SerializedStyles } from '@emotion/core';
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
  font-weight: ${selected ? 'bold' : 'initial'};
  cursor: pointer;
`;

export const buttonsMonthsWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const monthsWrapperStyle = () => (theme: Theme): SerializedStyles => css`
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 10;
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
