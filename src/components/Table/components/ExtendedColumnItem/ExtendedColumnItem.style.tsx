import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'polished';
import { flexCenterVertical } from 'theme/functions';

import { Theme } from '../../../../theme';

export const containerStyles = (gap: string) => (): SerializedStyles => css`
  ${flexCenterVertical};
  display: inline-flex;
  gap: ${rem(`${gap}px`)};
`;

export const contentStyles = () => (theme: Theme): SerializedStyles => css`
  font-weight: ${theme.typography.weights.medium};
  color: ${theme.utils.getColor('lightGray', 600)};
`;
