import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

import { flex } from '../../../theme/functions';

export const overlayWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      ${flex};
      border: 1px solid ${theme.utils.getColor('lightGrey', 100)};
      border-radius: ${theme.spacing.get('3')};
      width: fit-content;
    `;

export const optionsWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      background-color: ${theme.utils.getColor('lightGrey', null, 'pale')};
    `;

export const optionStyle =
  ({ isSelected }: { isSelected?: boolean }) =>
  (theme: Theme): SerializedStyles =>
    css`
      white-space: nowrap;
      padding: ${theme.spacing.get('6')};
      font-weight: ${isSelected
        ? theme.typography.weights.medium
        : theme.typography.weights.regular};
      cursor: pointer;
      background-color: ${isSelected ? theme.utils.getColor('blue', 50) : 'transparent'};
      position: relative;
      font-size: ${theme.typography.fontSizes['13']};

      &:hover {
        background-color: ${theme.utils.getColor('lightGrey', 50)};
      }

      ${isSelected &&
      `&:after {
    content: '';
    position: absolute;
    right: -10px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #fff;
    clear: both;
    transform: rotate(90deg);
  }`}
    `;

export const buttonsMonthsWrapperStyle =
  ({ isRangePicker }: { isRangePicker: boolean }) =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      flex-direction: column;
      position: relative;
      margin-bottom: ${isRangePicker && theme.spacing.get('6')};
    `;
export const monthsWrapperStyle =
  ({ isRangePicker }: { isRangePicker: boolean }) =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      flex-direction: row;
      position: relative;
      padding: 0 ${theme.spacing.get('8')};
      z-index: 10;

      > div:first-of-type {
        margin-right: ${isRangePicker ? theme.spacing.get('8') : 0};
      }
    `;

export const buttonsWrapperStyle =
  () =>
  (theme: Theme): SerializedStyles =>
    css`
      display: flex;
      justify-content: flex-end;
      margin-bottom: ${theme.spacing.get('6')};
      margin-right: ${theme.spacing.get('8')};

      > button {
        margin: ${theme.spacing.get('4')} 0 ${theme.spacing.get('4')} ${theme.spacing.get('4')};
      }
    `;
