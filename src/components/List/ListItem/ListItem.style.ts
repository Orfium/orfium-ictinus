import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { rem } from 'theme/utils';

import { ListRowSize } from '../types';

export const listItemStyle = ({
  size,
  selected,
  highlighted,
  disabled,
  isGroupItem,
}: {
  size: ListRowSize;
  selected: boolean;
  highlighted: boolean;
  disabled: boolean;
  isGroupItem?: boolean;
}) => (theme: Theme): SerializedStyles => css`
  height: ${size === 'normal' ? rem(56) : rem(46)};
  font-size: ${theme.typography.fontSizes[size === 'normal' ? '16' : '14']};
  background-color: ${selected ? theme.utils.getColor('blue', 50) : theme.palette.white};
  display: flex;
  align-items: center;
  padding: 0px ${theme.spacing.md} 0px ${isGroupItem ? theme.spacing.xl : theme.spacing.md};
  font-weight: ${selected && theme.typography.weights.medium};
  cursor: pointer;

  ${highlighted && 'font-weight: 500;'}

  &:hover {
    background-color: ${theme.utils.getColor('lightGrey', 50)};
  }

  ${disabled &&
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
