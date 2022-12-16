import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { flex } from 'theme/functions';

import { BadgeProps } from './Badge';

export const badgeStyle =
  ({ fill = 'greyScale', isSelected }: BadgeProps) =>
  (theme: Theme): SerializedStyles =>
    css`
      ${flex};
      width: ${theme.globals.spacing.get('6')};
      height: ${theme.globals.spacing.get('6')};
      border-radius: 100%;
      background: ${isSelected
        ? theme.utils.getColor(fill, 550)
        : theme.utils.getColor('lightGrey', 200)};
      font-size: ${theme.globals.typography.fontSizes.get('1')};
      font-weight: ${theme.globals.typography.weights.get('medium')};
      align-items: center;
      flex-shrink: 0;
      line-height: normal;
      justify-content: center;
      color: ${isSelected
        ? theme.utils.getAAColorFromSwatches(fill, 550)
        : theme.utils.getAAColorFromSwatches('lightGrey', 200)};
    `;
