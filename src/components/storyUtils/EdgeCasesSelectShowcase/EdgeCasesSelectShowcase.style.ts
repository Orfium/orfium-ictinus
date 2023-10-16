import { css, SerializedStyles } from '@emotion/react';
import { rem } from 'theme/utils';

export const showcaseContainer = (): SerializedStyles => css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: ${rem(400)};
`;
