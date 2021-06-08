import { css, SerializedStyles } from '@emotion/react';

import { Theme } from 'theme';

export const flexContainer = () => (): SerializedStyles => css`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const labelUnitStyle = () => (theme: Theme): SerializedStyles => css`
  width: 80%;
  font-size: ${theme.typography.fontSizes['12']};
  color: ${theme.utils.getColor('lightGray', 500)};
  text-align: center;
`;
