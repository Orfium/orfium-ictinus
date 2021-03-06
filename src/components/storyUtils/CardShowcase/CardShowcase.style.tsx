import { css, SerializedStyles } from '@emotion/core';

import { Theme } from 'theme';

export const showcaseContainerStyle = (theme: Theme): SerializedStyles => css`
  width: 1000px;
  height: 400px;
  background: ${theme.utils.getColor('lightGray', 100)};
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
