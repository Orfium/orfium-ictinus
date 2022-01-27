import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';
import { flex } from 'theme/functions';

import { Props } from '../../Chip';

export const badgeStyle = ({ fill = 'greyScale', isSelected }: Props) => (
  theme: Theme
): SerializedStyles => css`
  ${flex};
  width: ${theme.spacing.md};
  height: ${theme.spacing.md};
  border-radius: 100%;
  background: ${isSelected
    ? theme.utils.getColor(fill, 550)
    : theme.utils.getColor('lightGrey', 200)};
  font-size: ${theme.typography.fontSizes['10']};
  font-weight: ${theme.typography.weights.medium};
  align-items: center;
  flex-shrink: 0;
  line-height: normal;
  justify-content: center;
  color: ${isSelected
    ? theme.utils.getAAColorFromSwatches(fill, 550)
    : theme.utils.getAAColorFromSwatches('lightGrey', 200)};
`;
