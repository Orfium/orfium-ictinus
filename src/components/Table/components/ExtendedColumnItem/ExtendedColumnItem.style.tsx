import { css, SerializedStyles } from '@emotion/core';

import { flexCenterVertical } from 'theme/functions';

export const containerStyles = (gap: string, isClickable = false) => (): SerializedStyles => css`
  ${flexCenterVertical};
  display: inline-flex;
  gap: ${gap}px;

  cursor: ${isClickable ? 'pointer' : undefined};
`;
