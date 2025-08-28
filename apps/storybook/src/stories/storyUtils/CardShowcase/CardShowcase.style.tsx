import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

export const showcaseContainerStyle = (): SerializedStyles => css`
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
