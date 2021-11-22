import { css, SerializedStyles } from '@emotion/react';
import { flexCenterVertical } from 'theme/functions';
import { rem } from 'theme/utils';

import { Theme } from '../../theme';
import { Props } from './Chip';

export const chipStyle = ({
  styleType,
  fill = 'greyScale',
  isSelected,
  onClear,
  onClick,
}: Props) => (theme: Theme): SerializedStyles => css`
  ${flexCenterVertical};
  height: ${theme.spacing.lg};
  border-radius: ${theme.spacing.lg};
  font-size: ${theme.typography.fontSizes['12']};
  font-weight: ${theme.typography.weights.medium};
  line-height: normal;
  box-sizing: border-box;
  padding: ${theme.spacing.xsm} ${theme.spacing.sm};
  background-color: ${styleType === 'read-only' || onClear || isSelected
    ? theme.utils.getColor(fill, 50)
    : theme.palette.white};
  color: ${theme.utils.getColor('darkGrey', 850)};
  border: ${rem(1)} solid
    ${styleType === 'read-only' || onClear || isSelected
      ? theme.utils.getColor(fill, 550)
      : theme.utils.getColor('lightGrey', 200)};
  cursor: ${onClick ? 'pointer' : 'auto'};
  width: fit-content;
  transition: background-color 150ms linear;

  &:hover {
    background: ${styleType === 'read-only' || onClear || isSelected
      ? theme.utils.getColor(fill, 100)
      : theme.utils.getColor('lightGrey', null, 'pale')};
  }

  > :not(:last-child) {
    margin-right: ${theme.spacing.xsm};
  }
`;

export const closeIconWrapperStyle = () => (): SerializedStyles => css`
  cursor: pointer;
`;
