import { css, SerializedStyles } from '@emotion/core';

import { flexCenterVertical } from 'theme/functions';

export const containerStyles = (gap: string) => (): SerializedStyles => css`
  ${flexCenterVertical};
  gap: ${gap}px;
`;
