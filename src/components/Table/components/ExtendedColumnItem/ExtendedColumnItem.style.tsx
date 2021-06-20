import { css, SerializedStyles } from '@emotion/core';

import { flexCenterVertical } from 'theme/functions';
import { Theme } from '../../../../theme';

export const containerStyles = (gap: string) => (): SerializedStyles => css`
  ${flexCenterVertical};
  display: inline-flex;
  gap: ${gap}px;
`;

export const contentStyles = () => (theme: Theme): SerializedStyles => css`
  font-weight: 500;
  color: ${theme.utils.getColor('lightGray', 600)};
`;
