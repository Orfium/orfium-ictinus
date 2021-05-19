import { css } from '@emotion/react';
import { Theme } from 'theme';

export const separatorStyles = () => (theme: Theme) => css`
  margin: auto ${theme.spacing.sm};
  color: ${theme.utils.getColor('lightGray', 400)};
  cursor: default;
`;
