import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';

export const loaderContainer = () => (): SerializedStyles => css`
  align-self: center;
`;
