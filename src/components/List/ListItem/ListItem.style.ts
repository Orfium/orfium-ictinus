import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import { ListRowSize } from '../types';

export const listItemStyle =
  ({
    size,
    isSelected,
    isHighlighted,
    isDisabled,
    isGroupItem,
  }: {
    size: ListRowSize;
    isSelected: boolean;
    isHighlighted: boolean;
    isDisabled: boolean;
    isGroupItem?: boolean;
  }) =>
  (theme: Theme): SerializedStyles =>
    css`
      height: ${size === 'normal' ? rem(56) : rem(46)};
      font-size: ${theme.globals.typography.fontSizes.get(size === 'normal' ? '4' : '3')};
      background-color: ${isSelected
        ? theme.utils.getColor('blue', 50)
        : theme.globals.colors.white};
      display: flex;
      align-items: center;
      padding: 0px ${theme.globals.spacing.get('6')} 0px
        ${isGroupItem ? theme.globals.spacing.get('9') : theme.globals.spacing.get('6')};
      font-weight: ${isSelected && theme.globals.typography.weights.get('medium')};
      cursor: pointer;

      ${isHighlighted && 'font-weight: 500;'}

      &:hover {
        background-color: ${theme.utils.getColor('lightGrey', 50)};
      }

      ${isDisabled &&
      `
        opacity: 0.5;
        cursor: not-allowed;
    `}
    `;

export const contentStyle = (): SerializedStyles => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: inherit;
  flex: 1;
  flex-direction: row;
  display: flex;
  > div {
    flex: 1;
  }
`;
