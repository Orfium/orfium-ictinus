import { Theme } from 'theme';
import { css } from '@emotion/core';

export const separatorStyles = () => (theme: Theme) => css`
  margin: auto ${theme.spacing.sm};
  color: ${theme.palette.flat.lightGray[400]};
  cursor: default;
`;
