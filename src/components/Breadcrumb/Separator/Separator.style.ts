import { css, SerializedStyles } from '@emotion/react';
import { Theme } from 'theme';

export const separatorStyles = () => (theme: Theme): SerializedStyles => css`
  margin: auto ${theme.spacing.get('6')};
  cursor: default;
`;
