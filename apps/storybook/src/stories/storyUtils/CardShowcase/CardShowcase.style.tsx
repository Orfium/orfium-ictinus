import type { SerializedStyles } from '@emotion/react';
import { css } from '@emotion/react';
import type { Theme } from 'theme';

export const showcaseContainerStyle = (theme: Theme): SerializedStyles => css`
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
