import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import { ListRowSize } from '../../types';

export const listGroupTitleStyle =
  ({ size, isDisabled }: { size: ListRowSize; isDisabled?: boolean }) =>
  (theme: Theme): SerializedStyles =>
    css`
      height: ${size === 'normal' ? rem(56) : rem(46)};
      font-size: ${theme.typography.fontSizes[size === 'normal' ? '13' : '11']};
      background-color: ${theme.palette.white};
      color: ${theme.utils.getColor('lightGrey', 650)};
      display: flex;
      align-items: center;
      padding: 0px ${theme.spacing.md};
      font-weight: ${theme.typography.weights.bold};

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
`;
