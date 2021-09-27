import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

export const showcaseContainerStyle = (theme: Theme): SerializedStyles => css`
  width: 1000px;
  height: 400px;
  background: ${theme.utils.getColor('lightGrey', 50)};
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
